import { Request, Response } from "express";
import Course from "../models/course";
import { CourseSchema } from "../validators/validation";

export const createCourse = async (req: Request, res: Response) => {
    try {
        const { error } = CourseSchema.validate(req.body);
        if (error) res.status(400).send(error.details[0].message);

        const course = await Course.create({
            name: req.body.name,
            description: req.body.description,
        });
        res.status(201).json(course);
    } 
    catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}