const express = require("express");
const app = express();

const router = express.Router();

const users = require("./users");
const feeds = require("./feeds");


module.exports = [users, feeds];
