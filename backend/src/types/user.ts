import { Schema, model, Document } from "mongoose";

export interface userProps extends Document {
  name: string;
  email: string;
  passwordHash: string;
  phone?: string;
  role: "candidato" | "recrutador" | "avaliador" | "admin";
  skills?: string[];
  createdAt: Date;
}