import { jobProps } from "../types/job";
import { Job } from "../models/job.modes";
import { Request, Response,NextFunction } from 'express'


export const createJob = async (req: Request, res: Response) => {
  try {
    const body: jobProps = req.body;
    const { title, description, requirements, createdBy,createdAt } = body;

    const job = await Job.create({
      title,
      description,
      requirements,
      createdBy ,
      createdAt
    });

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
      return res.status(404).json({ message: "Vaga não encontrada" });
    }

    res.status(200).json({ message: "Vaga encontrada", job });
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
      return res.status(404).json({ message: "Vaga não encontrada" });
    }

    res.status(200).json({ message: "Vaga atualizada com sucesso", updatedJob });
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
      return res.status(404).json({ message: "Vaga não encontrada" });
    }

    res.status(200).json({ message: "Vaga removida com sucesso" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao remover vaga", error });
  }
};