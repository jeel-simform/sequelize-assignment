require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const userRouter = require("./router/user");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

app.use(userRouter);

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
