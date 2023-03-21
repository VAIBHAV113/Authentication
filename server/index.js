const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const jwt = require("jsonwebtoken");
const User = require("./models/models.js");

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://VAIBHAV:12347890@cluster0.wgv9p.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.json());

app.post("/auth/register", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      Name: req.body.Name,
      Email: req.body.Email,
      Password: req.body.Password,
    });
    res.json({ status: "Ok" });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "Duplicate name" });
  }
});

app.post("/auth/login", async (req, res) => {
  const user = await User.findOne({
    Email: req.body.Email,
  });
  if (user) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "Secret123"
    );
    return res.json({ status: "ok", user: token });
  } else {
    res.json({ status: "Not ok" });
  }
  // const isPasswordValid = await bcrypt.compare(
  //   req.body.password,
  //   user.password
  // );
  // if(!isPasswordValid){

  // }
});

app.listen(8000, () => {
  console.log("Server started on 8000 port");
});
