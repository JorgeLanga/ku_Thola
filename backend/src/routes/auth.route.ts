import Express from 'express'
import { login } from '../controllers/auth.controller.ts'


export const authRoute = Express.Router()

authRoute.post('/', login)
