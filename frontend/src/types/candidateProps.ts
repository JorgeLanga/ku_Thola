// Tipos relacionados a candidatos e candidaturas

import type { Key } from "react";

export interface CandidateProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  cvUrl: string;
  applications: ApplicationProps[];
}

export interface ApplicationProps {
  applicationDate: string | number | Date;
  applicationId: Key | null | undefined;
  jobId: string;
  jobTitle: string;
  candidateId: string;
  status: 'received' | 'in_review' | 'interview' | 'result';
  interviewDate?: string;
  feedback?: string;
}

export interface FeedbackProps {
  message: string;
  status: 'approved' | 'not_selected';
}

export interface ProgressProps {
  currentStep: number;
  totalSteps: number;
}

export interface ProgressBarProps {
  progress: number; // Progress percentage (0 to 100)
}
