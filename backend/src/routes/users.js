import express from "express";
import { getAllUsers, createUser } from "../controllers/users.js";

const router = express.Router();

router.route("/all").get(getAllUsers);
router.post("/add", createUser);

export default router;
