import { Schema, model, Document, Types } from "mongoose";

export interface historyProps {
  action: string;
  by: Types.ObjectId;
  date: Date;
}

export interface candidatureProps extends Document {
  candidateId: Types.ObjectId;
  jobId: Types.ObjectId;
  resumeUrl?: string;
  status: "recebida" |  "avaliado" | "aceite" | "entrevistado"|"rejeitado" | "contratado" |"contratado";
  history: historyProps[];
  submittedAt: Date;
}

