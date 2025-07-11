import { Schema, model, Document , Types} from "mongoose";


export interface jobProps extends Document {

  title: string;         
  description?: string;      
  requirements: string[];   
  status: "aberta" | "fechada";  
  createdBy: Types.ObjectId;  
  createdById: string,
  createdAt: Date;   
       
}