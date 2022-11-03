import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { APP_SECRET, JWT_EXPIRES_IN } from "src/config";
import { User } from "src/models/user";
import AppError from "@utils/app_error";
import usersJson from "../../../users.json";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

export class GenerateTokenService {
  static async execute({ email, password }: IRequest): Promise<IResponse> {
    const users: User[] = usersJson as User[];

    const user = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );

    if (!user) {
      throw new AppError("Invalid credentials", 400);
    }

    const validPassword = await compare(password, user.password);
    if (!validPassword) {
      throw new AppError("Invalid credentials", 400);
    }

    const subject = `${user.id} ${user.roles.toString()}`;
    const token = sign({}, APP_SECRET, {
      subject,
      expiresIn: JWT_EXPIRES_IN,
    });

    return {
      user,
      token,
    };
  }
}
