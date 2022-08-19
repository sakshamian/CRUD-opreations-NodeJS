import express from "express";
import { createUser, getUsers, findUser, deleteUser, updateUser} from "../controllers/users.js";

const router = express.Router();

//all routes have /users already
router.get('/', getUsers);

router.post('/', createUser);

// get a specific user
router.get('/:id', findUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;