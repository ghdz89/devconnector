// to use router, must bring in express
const express = require('express');
const router = express.Router();

// @route GET /api/posts/test
// @desc Tests the posts routes
// @access This is a public route
router.get('/test', (req, res) => {
  res.json({msg: "Posts routes is working! Gilberto"})
});

module.exports = router;