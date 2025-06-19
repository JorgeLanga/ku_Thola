import Express from 'express'

import { createCandidature } from '../controllers/candidature.controller.ts'

import { getAllCandidatures } from '../controllers/candidature.controller.ts'
import { getCandidaturesByJob } from '../controllers/candidature.controller.ts'
import { deleteCandidature } from '../controllers/candidature.controller.ts'

import { authentionToken } from '../middleware/auth.Middleware.ts'
export const candidatureRoute = Express.Router()
candidatureRoute.post('/registar',authentionToken, createCandidature)
candidatureRoute.get('/',authentionToken,getAllCandidatures)
candidatureRoute.get('/:id',authentionToken,getCandidaturesByJob)
candidatureRoute.delete('/:id',authentionToken,deleteCandidature)
