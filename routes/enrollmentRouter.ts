import express from "express";
import { enrollStudent, getStudentCourse } from "../controllers/enrollmentController";

const router = express.Router();

router.post("/", enrollStudent);
router.get("/:id/courses", getStudentCourse);

export default router;