import { Request, Response } from "express";
import { RegisterUser } from "../use-cases/RegisterUser";
import { GetAllUsers } from "../use-cases/GetAllUsers";

export class UserController {
  constructor(
    private registerUser: RegisterUser,
    private getAllUsers: GetAllUsers
  ) {}

  async register(req: Request, res: Response): Promise<void> {
    try {
      const { firstName, lastName, email, password } = req.body;
      const user = await this.registerUser.execute(
        firstName,
        lastName,
        email,
        password
      );
      res.status(201).json(user);
    } catch (error: unknown) {
        if(error instanceof Error){
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: "An unknown error ocurred" });
        }
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.getAllUsers.execute();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching users" });
    }
  }
}
