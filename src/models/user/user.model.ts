export class User {
  constructor(
    public id?: string,
    public email?: string,
    public password?: string,
    public roles?: Roles[]
  ) {}
}

export enum Roles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}
