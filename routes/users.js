import express from 'express';
import  { getUsers , addUser , getUserById , updateUser } from '../controllers/users.js';

const router = express.Router();

//all routes here are starting with /users
router.get('/', getUsers);
//post data to the database
router.post('/', addUser);
//get user by id
router.get('/:id' ,getUserById);
//update user using patch to update a single entry
router.patch('/:id', updateUser);
export default router;