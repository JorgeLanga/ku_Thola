import { Document, Types } from "mongoose";

export interface evaluateProps extends Document {
  applicationId: Types.ObjectId;
  evaluatorId: Types.ObjectId;
  technicalScore?: number;
  behavioralScore?: number;
  comment?: string;
  createdAt: Date;
}