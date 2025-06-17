import { Request, Response } from "express";
import { Candidature } from "../models/candidature.models";
import { candidatureProps } from "../types/candidature";


export const createCandidature = async (req: Request, res: Response) => {
  try {
    const body: candidatureProps=req.body;
    const { candidateId, jobId,  resumeUrl,
      submittedAt } = body;

    const existing = await Candidature.findOne({ candidateId, jobId, resumeUrl,
      submittedAt });

    if (existing) {
      return res.status(400).json({
        message: "Já existe uma candidatura para esta vaga por este candidato.",
      });
    }

    const candidature = await Candidature.create({
      candidateId,
      jobId,
    });

    res.status(201).json({ message: "Candidatura criada com sucesso", candidature });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao criar candidatura", error });
  }
};

export const getAllCandidatures = async (_req: Request, res: Response) => {
  try {
    const candidatures = await Candidature.find().populate("jobId").populate("candidateId");

    res.status(200).json({ message: "Lista de candidaturas", candidatures });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao buscar candidaturas", error });
  }
};

export const getCandidaturesByJob = async (req: Request, res: Response) => {
  try {
    const { jobId } = req.params;

    const candidatures = await Candidature.find({ jobId }).populate("candidateId");

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
      return res.status(404).json({ message: "Candidatura não encontrada" });
    }

    res.status(200).json({ message: "Candidatura removida com sucesso" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao remover candidatura", error });
  }
};