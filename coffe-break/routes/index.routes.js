const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

const places = require('./place.routes')
router.use('/', places)

module.exports = router;
