import express from "express";
import {
  getUsers,
  addUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", getUser);

router.post("/", addUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
