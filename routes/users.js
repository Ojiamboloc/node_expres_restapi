import express from "express";
const router = express.Router();

import { createUser } from "../controllers/users.js";
import { getUsers } from "../controllers/users.js";
import {getUser} from "../controllers/users.js";
import { deleteUser } from "../controllers/users.js";
import { updateUser } from "../controllers/users.js";
let users = [];
router.get("/", getUsers);
router.post("/", createUser);
//users/2+req.params{id:2}
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);
export default router;
