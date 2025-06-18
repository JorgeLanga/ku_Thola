import mongoose, { Schema } from "mongoose";
import { jobProps } from "../types/job.ts";


const JobSchema = new Schema<jobProps>({
  title: { type: String, required: true },
  description: String,
  requirements: [String],
  status: { type: String, enum: ["aberta", "fechada"], default: "aberta" },
  createdBy: { type: Schema.Types.ObjectId, ref: "user", required: true },
  createdById:{type: String, require:true},
  createdAt: { type: Date, default: Date.now }

});

export const Job = mongoose.model<jobProps>("job", JobSchema);