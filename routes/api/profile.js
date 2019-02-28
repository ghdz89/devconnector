// to use router, must bring in express
const express = require('express');
const router = express.Router();

// @route GET /api/profile/test
// @desc Tests the profile routes
// @access This is a public route
router.get('/test', (req, res) => {
  res.json({msg: "Profile routes is working! Gilberto"})
});

module.exports = router;