import  jwt  from 'jsonwebtoken';
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { userProps } from '../types/user.ts';
import { User } from '../models/users.models.ts';




export const login = async (req: Request, res: Response): Promise<any> => {
  const body:userProps = req.body
  const { email, password,phone,
      skills,
      createdAt
 } = body

  const user = await User.findOne({ email })

  if (!user) {
    return res
      .status(404)
      .json({ message: "Not found" })
  }

  const isEqual = await bcrypt.compare(password, user.password);
  if (!user || !isEqual) {
   return res.status(401).json({ message: "not authorized" });
  }

const jwtSecret: string = process.env.JWT_SECRET || '';
  const token = jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
      phone:user.phone,
      skills:user.skills,
      createdAt:user.createdAt

    },
   jwtSecret,
    {
      expiresIn: "24h",
    }
  );
  res.status(200).json({ message: "Ok", userId: user._id ,token})}



