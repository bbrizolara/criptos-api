import request from "supertest";
import app from "../src/app";
import { COINMARKET_TOTAL_CURRENCIES } from "../src/config";
import { GenerateTokenService } from "../src/services/session";

const userPayload = {
  id: "1",
  email: "bbrizolara7@gmail.com",
  password: "123",
  roles: ["Admin", "Editor", "Viewer"],
};

describe("Testing APP endpoints", () => {
  let signedToken = "";

  beforeAll(async () => {
    const { email, password } = userPayload;
    const { token } = await GenerateTokenService.execute({ email, password });
    signedToken = token;
  });

  describe("testing basic server response", () => {
    it("should return http code 200", async () => {
      const response = await request(app).get(`/ping`);
      expect(response.status).toBe(200);
    });
  });

  describe("Testing currencies list response", () => {
    it("should return status code 401", async () => {
      const { status } = await request(app).get(`/criptos`);

      expect(status).toBe(401);
    });

    it("should return status code 200 and currencies", async () => {
      const { status, body } = await request(app)
        .get(`/criptos`)
        .set("Authorization", `Bearer ${signedToken}`);

      expect(status).toBe(200);
      expect(body).toHaveProperty(["total"]);
      expect(body).toHaveProperty(["currencies"]);
      expect(body.total).toBe(Number(COINMARKET_TOTAL_CURRENCIES));
    }, 7000);
  });

  describe("Testing sessions response", () => {
    it("should return status code 400 Invalid session request", async () => {
      const { status, body } = await request(app).post(`/session`);

      expect(status).toBe(400);
      expect(body.message).toBe("Invalid session request value");
    });

    it("should return status code 400 Invalid credentials", async () => {
      let { email } = userPayload;
      // Wrong password to get error
      const password = "1234";

      const { status, body } = await request(app)
        .post(`/session`)
        .send({ email, password });

      expect(status).toBe(400);
      expect(body.message).toBe("Invalid credentials");
    });

    it("should return status code 200 and token", async () => {
      let { email, password } = userPayload;

      const { status, body } = await request(app)
        .post(`/session`)
        .send({ email, password });

      expect(status).toBe(200);
      expect(body.user.email).toBe("bbrizolara7@gmail.com");
      expect(body.token).toBeTruthy();
    });
  });
});
