import { Request, Response } from "express";
import Student from "../models/student";
import { StudentSchema } from "../validators/validation";

export const createStudent = async (req: Request, res: Response) => {
    try {
        const { error } = StudentSchema.validate(req.body);
        if (error) res.status(400).send(error.details[0].message);

        const student = await Student.create({
            name: req.body.name,
            email: req.body.email,
        });
        res.status(201).json(student);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});
    }
}
