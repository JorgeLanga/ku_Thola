import mongoose, { Schema } from "mongoose";
import { evaluateProps } from "../types/evaluate.ts";


const EvaluateSchema = new Schema<evaluateProps>({
  applicationId: { type: Schema.Types.ObjectId, ref: "candidature", required: true },
  
  evaluatorId: { type: Schema.Types.ObjectId, ref: "user", required: true },
  technicalScore: { type: Number, min: 0, max: 10 },
  behavioralScore: { type: Number, min: 0, max: 10 },
  comment: String,
  createdAt: { type: Date, default: Date.now }
});

export const Evaluation = mongoose.model<evaluateProps>("evaluation", EvaluateSchema);
