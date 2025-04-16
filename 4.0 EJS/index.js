import express from "express";
import ejs from "ejs";
const app = express();
const date = new Date();
const day = date.getDay();
const port = 3000;

if (day === 6 || day === 0) {
  app.render(
    "index.ejs",
    {
      message: "Yay! Its the weekend! time to have fun!",
    },
    (err, str) => {
      if (err) {
        console.error(err);
        return;
      }
      app.get("/", (req, res) => {
        res.send(str);
      });
    }
  );
} else {
  app.render(
    "index.ejs",
    { message: "Boo! Its a weekday! time to work!" },
    (err, str) => {
      if (err) {
        console.error(err);
        return;
      }
      app.get("/", (req, res) => {
        res.send(str);
      });
    }
  );
}
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
