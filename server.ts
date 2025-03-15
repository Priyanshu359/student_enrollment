import express from "express";
import studentRouter from "./routes/studentRouter";
import courseRouter from "./routes/courseRouter";
import enrollmentRouter from "./routes/enrollmentRouter";
import sequelize from "./config/database";

const app = express();
app.use(express.json());
const port = process.env.PORT || 8080;

app.use("/students", studentRouter);
app.use("/courses", courseRouter);
app.use("/enrollments", enrollmentRouter);

sequelize.sync().then(() => console.log("Database connected"));

app.listen(port, () => console.log(`Server is running on port ${port}`));