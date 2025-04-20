import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const posts = [];
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/about", (req, res) => {
  res.render("about.ejs");
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});
app.get("/createpost", (req, res) => {
  res.render("createBlog.ejs");
});
app.post("/createpost", (req, res) => {
  const post = {
    title: req.body.title,
    content: req.body.content,
    postId: Math.floor(Math.random() * 1000),
  };
  console.log(post);
  posts.push(post);
});
app.post("/deletepost", (req, res) => {
  // the postId gets the value property from targeting the input with the name property: Id
  const postId = req.body.id;
  const postIndex = posts.findIndex((post) => post.postId == postId);
  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
  } else {
    console.log("Post not found");
  }
  res.redirect("/posts");
});
app.get("/posts", (req, res) => {
  res.render("posts.ejs", { posts: posts });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
