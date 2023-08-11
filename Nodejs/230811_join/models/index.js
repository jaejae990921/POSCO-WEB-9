'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// 모델
db.Student = require('./Student')(sequelize);
db.Classes = require('./Classes')(sequelize);
db.StudentProfile = require('./StudentProfile')(sequelize);

// 관계
// 1:1 학생:프로필
db.Student.hasOne(db.StudentProfile);
db.StudentProfile.belongsTo(db.Student);

// 1:다 학생:강의
db.Student.hasMany(db.Classes) // 외래키를 student_id로 지정
db.Classes.belongsTo(db.Student) // 알아서 지정은 안적으면 됨

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;