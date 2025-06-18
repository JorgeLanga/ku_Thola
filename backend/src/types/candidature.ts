import { Schema, model, Document, Types } from "mongoose";

export interface historyProps {
  action: string;
  status: "recebida" | "avaliado" | "entrevistado" | "rejeitado" | "aceite" | "contratado";
  changedAt: Date;
  by: Types.ObjectId;
  date: Date;
}

export interface candidatureProps extends Document {
  candidate: Types.ObjectId;
  candidateId: string;
  job: Types.ObjectId;
  jobId: string;
  resumeUrl?: string;
  status: "recebida" |  "avaliado" | "aceite" | "entrevistado"|"rejeitado" | "contratado";
  history: historyProps[];
  submittedAt: Date;
}

