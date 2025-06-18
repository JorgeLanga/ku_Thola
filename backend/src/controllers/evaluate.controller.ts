import { Request, Response } from "express";
import { Evaluation } from "../models/evaluate.models";
import { Candidature } from "../models/candidature.models";

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
    if (!candidature) {
       res.status(404).json({ message: "Candidatura não encontrada." });
    }

    const evaluation = await Evaluation.create({
      applicationId,
      evaluatorId,
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



/*
export const evaluateCandidatureStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // ID da candidatura
    const { status, note } = req.body;

    const allowedStatuses = [
      "avaliado",
      "aceite",
      "entrevistado",
      "rejeitado",
      "contratado"
    ];

    if (!allowedStatuses.includes(status)) {
       res.status(400).json({ message: "Status inválido." });
    }

    
    const candidature = await Candidature.findById(id);
    if (!candidature) {
      return res.status(404).json({ message: "Candidatura não encontrada." });
    }

  
    candidature.status = status;


    candidature.history.push({
      status,
      changedAt: new Date(),
      note: note || ""
    });

    await candidature.save();

    res.status(200).json({
      message: "Status da candidatura atualizado com sucesso.",
      candidature
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Erro ao atualizar status da candidatura.",
      error
    });
  }
};

*/
  