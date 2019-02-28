// to use router, must bring in express
const express = require('express');
const router = express.Router();

// @route GET /api/users/test
// @desc Tests the users routes
// @access This is a public route
router.get('/test', (req, res) => {
  res.json({msg: "Users routes is working! Gilberto"})
});

module.exports = router;