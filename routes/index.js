const express = require("express");
const app = express();

const router = express.Router();

const users = require("./users");

module.exports = [users];
