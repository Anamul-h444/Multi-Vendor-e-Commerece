const userRouter = require("../routes/users/userRouter");

module.exports = (app) => {
  app.use("/api/user", userRouter);

  app.use("*", (req, res) => {
    res.status(404).send("404 not found!");
  });
};
