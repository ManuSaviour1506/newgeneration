const News = require("../models/newsModel");

// @desc    Get all news articles
// @route   GET /api/news
// @access  Public
const getNews = async (req, res) => {
  // Finds all news articles and sorts them by date in descending order.
  const news = await News.find({}).sort({ date: -1 });
  res.json(news);
};

// @desc    Create a new news article
// @route   POST /api/news
// @access  Private (Admin only)
const createNews = async (req, res) => {
  // Destructure title, content, and imageUrl from the request body.
  const { title, content, imageUrl } = req.body;

  // Validate that all required fields are provided.
  if (!title || !content || !imageUrl) {
    return res
      .status(400)
      .json({ message: "Please add all fields: title, content, and imageUrl" });
  }

  // Create a new news document in the database.
  const news = await News.create({ title, content, imageUrl });
  res.status(201).json(news);
};

// @desc    Delete a news article
// @route   DELETE /api/news/:id
// @access  Private (Admin only)
const deleteNews = async (req, res) => {
  const news = await News.findById(req.params.id);
  if (!news) {
    return res.status(404).json({ message: "News not found" });
  }
  await news.deleteOne();
  res.json({ id: req.params.id, message: "News deleted successfully" });
};

module.exports = { getNews, createNews, deleteNews };
