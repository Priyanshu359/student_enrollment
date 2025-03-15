import express from "express";
import { createCourse } from "../controllers/courseController";
const router = express.Router();

router.post("/", createCourse);

export default router;