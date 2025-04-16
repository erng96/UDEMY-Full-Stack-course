import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res, next) => {
  const fname = req.body.fName;
  const lname = req.body.lName;
  const NameLength = fname.length + lname.length;
  console.log(NameLength);
  res.render("index.ejs", {
    H1:
      fname && lname
        ? `<h1> Your name is ${NameLength} characters long.</h1>`
        : "<h1> Please enter your name</h1>",
  });
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
