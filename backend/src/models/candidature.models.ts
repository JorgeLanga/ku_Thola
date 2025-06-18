import mongoose, { Schema } from "mongoose";
import { candidatureProps } from "../types/candidature.ts";


const candidatureSchema = new Schema<candidatureProps>({
  candidateId: { type: Schema.Types.ObjectId, ref: "user", required: true },
  jobId: { type: Schema.Types.ObjectId, ref: "job", required: true },
  resumeUrl: String,
  status: {
    type: String,
    enum: ["recebida" ,  "avaliado" ,"aceite" ,"entrevistado","rejeitado" , "contratado"],
    default: "recebida"
  },
  submittedAt: { type: Date, default: Date.now }
});

export const Candidature = mongoose.model<candidatureProps>("candidature", candidatureSchema);