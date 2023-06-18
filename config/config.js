require("dotenv").config();
const env = process.env;

const development = {
  username: "root",
  password: "poiu4321",
  database: "ebdb",
  host: "awseb-e-bkzbetgqzn-stack-awsebrdsdatabase-cozic2hdcxgg.cgpmu40qmwlj.us-west-2.rds.amazonaws.com",
  dialect: "mysql",
  timezone: "Asia/Seoul",
  dialectOptions: {
    timezone: "local",
  },
};

const production = {
  username: env.MYSQL_USERNAME,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE,
  host: env.MYSQL_HOST,
  dialect: "mysql",
  //port: env.MYSQL_PORT
};

const test = {
  username: env.MYSQL_USERNAME,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE_TEST,
  host: env.MYSQL_HOST,
  dialect: "mysql",
  //port: env.MYSQL_PORT
};

module.exports = { development, production, test };




// {
//   "development": {
//     "username": "root",
//     "password": "poiu4321",
//     "database": "ebdb",
//     "host": "awseb-e-bkzbetgqzn-stack-awsebrdsdatabase-cozic2hdcxgg.cgpmu40qmwlj.us-west-2.rds.amazonaws.com",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }
