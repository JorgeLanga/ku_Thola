import { Request, Response } from "express";
import { Evaluation } from "../models/evaluate.models";
import { Candidature } from "../models/candidature.models";
import { User } from "../models/users.models";

export const createEvaluation = async (req: Request, res: Response) => {
  try {
    const {
      applicationId,
      evaluatorId,
      technicalScore,
      behavioralScore,
      comment
    } = req.body;

    const candidature = await Candidature.findById(applicationId);
    const existingEvaluator= await User.findById(evaluatorId)
    if (!candidature) {
       res.status(404).json({ message: "Candidatura não encontrada." });
    }
    

    const evaluation = await Evaluation.create({
      applicationId:applicationId,
      evaluatorId:existingEvaluator,
      technicalScore,
      behavioralScore,
      comment
    });

    res.status(201).json({
      message: "Avaliação criada com sucesso",
      evaluation
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Erro ao criar avaliação",
      error
    });
  }
};


