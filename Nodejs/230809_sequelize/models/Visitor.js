// visitor에 대한 테이블 정의
const Visitor = function (sequelize, DataTypes) {
    // sequelize는 models/index.js에 있는 sequelize
    // DataTypes는 models/index.js에 있는 Sequelize
    const model = sequelize.define(
        'visitor',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false, // NOT NULL
                primaryKey: true, // PK
                autoIncrement: true, // AI
            },
            name: {
                type: DataTypes.STRING(10), // VARCHAR(10)
                allowNull: false, // NOT NULL
            },
            comment: {
                type: DataTypes.TEXT('medium'), // mediumtext

            }
        },
        // {
        //     tableName: 'visitor',
        //     freezeTableName: true,
        //     timestamps: false,
        // }
    );
    return model;
}

module.exports = Visitor;