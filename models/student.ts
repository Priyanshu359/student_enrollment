import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class Student extends Model{ 
    public id!: number;
    public name!: string;
    public age!: number;
}

Student.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: "students",
    }
);
export default Student;