import Express from 'express'

import { createEvaluation } from '../controllers/evaluate.controller.ts'
import { authentionToken } from '../middleware/auth.Middleware.ts'
export const routeEvatuation = Express.Router()
routeEvatuation.post('/', authentionToken,createEvaluation)
