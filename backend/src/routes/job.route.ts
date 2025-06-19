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
jobRoute.post('/registar', createJob)
jobRoute.get('/:id',authentionToken,getJobById)
jobRoute.get('/',authentionToken,getAllJobs)
jobRoute.put('/:id',authentionToken,updateJob)
jobRoute.delete('/:id',authentionToken,deleteJob)
jobRoute.get("/match:id",authentionToken,matchByJob)
jobRoute.get("habities/:id",authentionToken,matchByCustomSkills)




