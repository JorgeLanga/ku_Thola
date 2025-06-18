import { Request, Response,NextFunction } from 'express'
import bcrypt from 'bcrypt'
import { userProps } from '../types/user.ts';
import { User } from '../models/users.models.ts'

export const register = async (req:Request, res:Response) => {
  try {
    const body:userProps = req.body;
    const { name, email, password,phone,role,skills,createdAt } = body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res
        .status(400)
        .json({ message: "There is already a user registered with this email." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      name,
      password: hashedPassword,
      phone,
      role,
      skills,
      createdAt
    });

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "An internal server error has occurred", error });
  }
};

export const getMe=(req:Request,res:Response)=> {
  try {
    res.status(200).json((req as any ).user)

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Error fetching user data" })
  }
}





export const getAllUsers = async (req:Request, res:Response) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({ message: "ok", users });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Ocorreu um erro interno no servidor", error });
  }
};

export const getUser = async (req:Request, res:Response) => {
  try {
    const id = req.params.id;

    const existingUser = await User.findById(id).select("-password");

    if (!existingUser) {
      res.json({ message: "Usuário não encontrado" });
    }

    res.status(200).json({ message: "ok", existingUser });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Ocorreu um erro interno no servidor", error });
  }
};

export const updateUser = async (req:Request, res:Response) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const { name, email, password,phone,skills } = body;

    const existingUser = await User.findById(id);

    if (!existingUser) {
      res.json({ message: "Usuário não encontrado" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.findById(id).updateOne({
      name,
      email,
      password: hashedPassword,
      skills,
      phone
    });

    const user = await User.findById(id).select("-password");
    res.status(200).json({ message: "Usuário actualizado com sucesso", user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Ocorreu um erro interno no servidor", error });
  }
};

export const deleteUser = async (req:Request, res:Response) => {
  try {
    const id = req.params.id;

    const user = await User.deleteOne({ id });

    if (!user) {
      res.json({ message: "Usuário não encontrado" });
    }

    res
      .status(200)
      .json({ message: "Usuário Eliminado com sucesso com sucesso", user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Ocorreu um erro interno no servidor", error });
  }
};