import { jobProps } from "../types/job";
import { Job } from "../models/job.modes";
import { Request, Response,NextFunction } from 'express'
import { Candidature } from "../models/candidature.models";
import { User } from "../models/users.models";


export const createJob = async (req: Request, res: Response) => {
  try {
    
    const body = req.body;
    const { title, description, requirements, createdBy } = body;
    const userId=(req as any).user.id;
    const existingCreater=await User.findOne(createdBy)

    let job ;
    if(existingCreater?.role==="recrutador"){
     job = await Job.create({
      createdBy:existingCreater,
      title,
      description,
      requirements,
      createdById:userId ,
      status:"aberta",
    });} else{
       res.
    status(500).json({message:"Não tem permissão para crair candidatura"})
    }

      
    res.status(201).json({ message: "Vaga criada com sucesso", job });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro interno ao criar vaga", error });
  }
};
export const getAllJobs = async (_req: Request, res: Response) => {
  try {
    const jobs = await Job.find();
    res.status(200).json({ message: "Lista de vagas", jobs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao buscar vagas", error });
  }
};

export const getJobById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);

    if (!job) {
      res.status(404).json({ message: "Vaga não encontrada" });
    } else {
      res.status(200).json({ message: "Vaga encontrada", job });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao buscar vaga", error });
  }
};


export const updateJob = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedJob = await Job.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedJob) {
      res.status(404).json({ message: "Vaga não encontrada" });
    } else {
      res.status(200).json({ message: "Vaga atualizada com sucesso", updatedJob });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao atualizar vaga", error });
  }
};

export const deleteJob = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedJob = await Job.findByIdAndDelete(id);

    if (!deletedJob) {
      res.status(404).json({ message: "Vaga não encontrada" });
    } else {
      res.status(200).json({ message: "Vaga removida com sucesso" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao remover vaga", error });
  }
};

function countMatching(skills: string[], required: string[]) {
   skills.filter(skill => required.includes(skill)).length;
}

export const matchByJob = async (req: Request, res: Response) => {
  try {
    const job = await Job.findById(req.params.jobId);
    if (!job) {
      res.status(404).json({ message: "Vaga não encontrada" });
    } else {
      const applications = await Candidature.find({ jobId: job._id }).populate("candidateId");

      const result = applications.map(app => {
        const candidate = app.candidateId as any;
        const score = countMatching(candidate.skills, job.requirements);
        return {
          candidate: {
            id: candidate._id,
            name: candidate.name,
            email: candidate.email,
            skills: candidate.skills
          },
          matchScore: score
        };
      });

      result.sort((a, b) => {
        const scoreA = a?.matchScore ?? 0;
        const scoreB = b?.matchScore ?? 0;
        return scoreB - scoreA;
      });

      res.json(result);
    }
  } catch (err) {
    res.status(500).json({ message: "Erro ao fazer matching", err });
  }
};

export const matchByCustomSkills = async (req: Request, res: Response) => {
  try {
    const { jobId, selectedSkills } = req.body;
    const job = await Job.findById(jobId);
    if (!job) {
      res.status(404).json({ message: "Vaga não encontrada" });
    } else {
      const applications = await Candidature.find({ jobId }).populate("candidateId");

      const result = applications.map(app => {
        const candidate = app.candidateId as any;
        const score = countMatching(candidate.skills, selectedSkills);
        return {
          candidate: {
            id: candidate._id,
            name: candidate.name,
            email: candidate.email,
            skills: candidate.skills
          },
          matchScore: score
        };
      });

      result.sort((a, b) => {
        const scoreA = typeof a.matchScore === "number" ? a.matchScore : 0;
        const scoreB = typeof b.matchScore === "number" ? b.matchScore : 0;
        return scoreB - scoreA;
      });

      res.json(result);
    }
  } catch (err) {
    res.status(500).json({ message: "Erro ao fazer matching personalizado", err });
  }
};