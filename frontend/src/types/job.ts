import { Document , Types} from "mongoose";


export interface jobProps extends Document {
  title: string;         
  description?: string;      
  requirements: string[];   
  status: "aberta" | "fechada";  
  createdBy: Types.ObjectId;  
  createdAt: Date;   
       
}