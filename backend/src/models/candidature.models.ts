import mongoose, { Schema } from "mongoose";
import { candidatureProps } from "../types/candidature.ts";


const candidatureSchema = new Schema<candidatureProps>({
  candidate: { type: Schema.Types.ObjectId, ref: "user", required: true },
  candidateId: {type: String, required: true},
  job: { type: Schema.Types.ObjectId, ref: "job", required: true },
  jobId: {type: String, required: true},
  resumeUrl: {type:String},
  status: {
    type: String,
    enum: ["recebida" ,  "avaliado" ,"aceite" ,"entrevistado","rejeitado" , "contratado"],
    default: "recebida"
  },
  submittedAt: { type: Date, required: true }
});

export const Candidature = mongoose.model<candidatureProps>("candidature", candidatureSchema);