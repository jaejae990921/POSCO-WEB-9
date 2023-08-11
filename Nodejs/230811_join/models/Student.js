const { DataTypes } = require('sequelize');

const studentModel = (sequelize) => {
    const Student = sequelize.define('student', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userid: {
            type: DataTypes.STRING(31),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(255), // 추후 암호화를 진행하면 길이가 늘어날 수 있어서 넉넉하게
            allowNull: false,
        },
        email: DataTypes.STRING(63), // 하나만 작성할 때는 생략 가능(무조건 type)
    });
    return Student;
}

module.exports = studentModel;