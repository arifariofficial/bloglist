const testingService = require("express").Router();
const { Mongoose } = require("mongoose");
const { connect } = require("../app");
const Blog = require("../models/blog");
const User = require("../models/user");

testingService.post("/reset", async (request, response) => {
  try {
    await Mongoose.connect();
    await Blog.deleteMany({});
    await User.deleteMany({});

    response.status(204).end();
  } catch (error) {
    console.log("mongoDb: ", error);
  }
});

module.exports = testingService;
