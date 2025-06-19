import Express from 'express'

import { createJob } from '../controllers/job.controller.ts'
import { getAllJobs } from '../controllers/job.controller.ts'
import { getJobById } from '../controllers/job.controller.ts'
import { updateJob } from '../controllers/job.controller.ts'
import { deleteJob } from '../controllers/job.controller.ts'
import { matchByJob } from '../controllers/job.controller.ts'
import { matchByCustomSkills } from '../controllers/job.controller.ts'


import { authentionToken } from '../middleware/auth.Middleware.ts'


export const jobRoute = Express.Router()

import express from 'express';


jobRoute.post('/', createJob);
jobRoute.get('/', getAllJobs);
jobRoute.get('/:id', getJobById);
jobRoute.put('/:id', updateJob);
jobRoute.delete('/:id', deleteJob);
jobRoute.get('/match/:id', matchByJob);
jobRoute.get('/habities/:id', matchByCustomSkills);
