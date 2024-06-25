import express from 'express'
import UserController from '../controller/userControllers.js'
const router = express.Router()

router
   .get('/', UserController.getAllUsers)
   .get('/:id', UserController.getUserById)
   .post('/', UserController.addUser)
   .put('/:id', UserController.updateUser)
   .delete('/:id', UserController.deleteUser)

export default router