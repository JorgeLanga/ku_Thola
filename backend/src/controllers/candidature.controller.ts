import { Request, Response } from "express";
import { Candidature } from "../models/candidature.models";
import { candidatureProps } from "../types/candidature";
import { Job } from "../models/job.modes";
import { User } from "../models/users.models";


export const createCandidature = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { jobId, resumeUrl, candidate } = body;
    console.log(body)

    const userId = (req as any).user.id;
    
    const submittedAt = new Date();
    const status = "recebida";

    const existingJob = await Job.findById(jobId);
    const existingCandidate= await User.findOne(candidate)
     
    
     if (!existingCandidate) {
      res.status(404).json({
        message: "Vaga não encontrada.",
      });
    }
    if (!existingJob) {
      res.status(404).json({
        message: "Vaga não encontrada.",
      });
    }
let candidature;
     if(existingCandidate?.role==="candidato"){
    candidature = await Candidature.create({
      candidate:existingCandidate,
      candidateId: userId,
      job: existingJob,
      jobId: existingJob,
      resumeUrl,
      submittedAt,
      status,
    });

    res
      .status(201)
      .json({ message: "Candidatura criada com sucesso", candidature });
  } else{  
    res.
    status(500).json({message:"Não tem permissão para crair candidatura"})
  }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao criar candidatura", error });
  }
};

export const getAllCandidatures = async (_req: Request, res: Response) => {
  try {
    const candidatures = await Candidature.find()
      .populate("jobId")
      .populate("candidateId");

    res.status(200).json({ message: "Lista de candidaturas", candidatures });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao buscar candidaturas", error });
  }
};

export const getCandidaturesByJob = async (req: Request, res: Response) => {
  try {
    const { jobId } = req.params;

    const candidatures = await Candidature.find({ jobId }).populate(
      "candidateId"
    );

    res.status(200).json({ message: "Candidaturas para a vaga", candidatures });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao buscar candidaturas", error });
  }
};

export const deleteCandidature = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleted = await Candidature.findByIdAndDelete(id);

    if (!deleted) {
      res.status(404).json({ message: "Candidatura não encontrada" });
    }

    res.status(200).json({ message: "Candidatura removida com sucesso" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao remover candidatura", error });
  }
};
