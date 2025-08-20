const express = require("express");
const router = express.Router();
const {
  getNews,
  createNews,
  deleteNews,
} = require("../controllers/newsController");
const { protect } = require("../middleware/authMiddleware");

router
  .route("/")
  .get(getNews) // Public users can view all news.
  .post(protect, createNews); // Only protected (authenticated) users can create news.

router.route("/:id").delete(protect, deleteNews); // Only protected users can delete news.

module.exports = router;
