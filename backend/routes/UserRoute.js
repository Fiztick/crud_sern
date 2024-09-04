import express from "express";
import {
    getUsers, 
    getUserById,
    createUser,
    DeleteUser,
    updateUser,
} from "../controllers/UserController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/user/:id', getUserById);
router.post('/user', createUser);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', DeleteUser);


export default router;