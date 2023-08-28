require("dotenv").config();
const Express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRouter = require("./routes/userRouter");
const Auth = require("./middlewares/Auth");
const postRouter = require("./routes/postRouter");

const app=Express();
app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(Auth);
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@padishivas.1tqvkkg.mongodb.net/linkedin`
);

app.use("/users",userRouter);
app.use("/posts",postRouter);

app.listen(4000, () => console.log("Server running at port 4000"));