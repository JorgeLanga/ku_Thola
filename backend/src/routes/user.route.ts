import Express from 'express'

import { register } from '../controllers/user.controller.ts'
import { getMe } from '../controllers/user.controller.ts'
import { getAllUsers } from '../controllers/user.controller.ts'
import { updateUser } from '../controllers/user.controller.ts'

import { authentionToken } from '../middleware/auth.Middleware.ts'
export const useRoute = Express.Router()
useRoute.post('/register', register)
useRoute.get('/:id',authentionToken,getMe)
useRoute.get('/',getAllUsers)
useRoute.put('/:id',updateUser)

