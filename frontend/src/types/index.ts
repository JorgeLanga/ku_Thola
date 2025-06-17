// This file exports TypeScript types and interfaces used throughout the application for props and state management.

export interface Job {
    id: string;
    title: string;
    department: string;
    type: 'presencial' | 'virtual';
    expirationDate: string;
    description: string;
    requirements: string[];
    location: string;
    benefits?: string[];
}

export interface Candidate {
    id: string;
    name: string;
    email: string;
    phone: string;
    cvUrl: string;
    applications: Application[];
}

export interface Application {
    jobId: string;
    candidateId: string;
    status: 'received' | 'in_review' | 'interview' | 'result';
    interviewDate?: string;
    feedback?: string;
}

export interface Recruiter {
    id: string;
    email: string;
    password: string;
}

export interface Progress {
    currentStep: number;
    totalSteps: number;
}

export interface Feedback {
    message: string;
    status: 'approved' | 'not_selected';
}