import express from "express";
import ejs from "ejs";
const app = express();
const date = new Date("04/19/2025");
const day = date.getDay();
const port = 3000;

app.get("/", (req, res) => {
  res.render("index.ejs", {
    message:
      day === 6 || day === 0
        ? "Yay! Its the weekend! time to have fun!"
        : "Boo! Its a weekday! time to work!",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
