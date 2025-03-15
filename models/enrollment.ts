import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Student from './student';
import Course from './course';

class Enrollment extends Model{
    public id!: number;
    public studentId!: number;
    public courseId!: number;
    public enrolledAt!: Date;
};

Enrollment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        studentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Student,
                key: 'id'
            }
        },
        courseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Course,
                key: 'id'
            }
        },
        enrolledAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, 
    {
        sequelize,
        tableName: 'enrollments'
    }
);

Student.hasMany(Enrollment, {
    foreignKey: 'studentId'
});
Course.hasMany(Enrollment, {
    foreignKey: 'courseId'
});
Enrollment.belongsTo(Student, {
    foreignKey: 'studentId'
});
Enrollment.belongsTo(Course, {
    foreignKey: 'courseId'
});

export default Enrollment;