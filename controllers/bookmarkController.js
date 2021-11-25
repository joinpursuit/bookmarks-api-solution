const express = require("express");
const bookmarks = express.Router();
const bookmarkArray = require("../models/bookmarksArray.js");

// Custom Middleware
const validateURL = (req, res, next) => {
  if (
    req.body.url.substring(0, 7) === "http://" ||
    req.body.url.substring(0, 8) === "https://"
  ) {
    return next();
  } else {
    res
      .status(400)
      .send(`Oops, you forgot to start your url with http:// or https://`);
  }
};

// INDEX
bookmarks.get("/", (req, res) => {
  res.status(200).json(bookmarkArray);
});

// SHOW
bookmarks.get("/:arrayIndex", (req, res) => {
  if (bookmarkArray[req.params.arrayIndex]) {
    res.json(bookmarkArray[req.params.arrayIndex]);
  } else {
    res.redirect("/404");
  }
});

// UPDATE
bookmarks.put("/:arrayIndex", async (req, res) => {
  bookmarkArray[req.params.arrayIndex] = req.body;
  res.status(200).json(bookmarkArray[req.params.arrayIndex]);
});

// CREATE

bookmarks.post("/", validateURL, (req, res) => {
  const updatedArray = await bookmarkArray.push(req.body);
  res.json(bookmarkArray[updatedArray - 1]);
});

// DELETE
bookmarks.delete("/:indexArray", (req, res) => {
  const deletedBookMark = bookmarkArray.splice(req.params.indexArray, 1);
  res.status(200).json(deletedBookMark);
});

module.exports = bookmarks;
