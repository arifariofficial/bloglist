const testingService = require("express").Router();
const Blog = require("../models/blog");
const User = require("../models/user");

testingService.post("/reset", async (request, response) => {
  try {
    await connectDB();
    await Blog.deleteMany({});
    await User.deleteMany({});

    response.status(204).end();
  } catch (error) {
    console.log("mongoDb: ", error);
  }
});

module.exports = testingService;
