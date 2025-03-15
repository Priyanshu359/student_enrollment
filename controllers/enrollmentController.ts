import { Request, Response } from "express";
import Enrollment from "../models/enrollment";
import Course from "../models/course";

export const enrollStudent = async (req: Request, res: Response) => {
    try {
        const { studentId, courseId } = req.body;
        const enrollment = await Enrollment.create({
            studentId,
            courseId
        })
        res.status(201).json(enrollment);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getStudentCourse = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const enrollments = await Enrollment.findAll({
            where: {
                studentId: id,
            },
            include: [
                Course
            ]
        });
        res.status(201).json(enrollments);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }

};
