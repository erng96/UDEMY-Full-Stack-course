export default function logger(req, res, next) {
  console.log(`running custom middleware ${req.method} ${req.url}`);
  next();
}
