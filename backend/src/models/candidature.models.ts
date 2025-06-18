import mongoose, { Schema } from "mongoose";
import { candidatureProps } from "../types/candidature.ts";


const candidatureSchema = new Schema<candidatureProps>({
  candidateId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  jobId: { type: Schema.Types.ObjectId, ref: "Job", required: true },
  resumeUrl: String,
  status: {
    type: String,
    enum: ["recebida" ,  "avaliado" ,"aceite" ,"entrevistado","rejeitado" , "contratado"],
    default: "recebida"
  },
  history: [
    {
      action: String,
      by: { type: Schema.Types.ObjectId, ref: "User" },
      date: { type: Date, default: Date.now }
    }
  ],
  submittedAt: { type: Date, default: Date.now }
});

export const Candidature = mongoose.model<candidatureProps>("Candidature", candidatureSchema);