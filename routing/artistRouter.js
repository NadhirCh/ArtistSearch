require('dotenv').config();
const express = require('express');
const router = express.Router();
const artistService = require('../artistService'); 

router.get('/artist/search', async (req, res) => {
  const { name, filename } = req.query;
  try {
    const results = await artistService.searchArtist(name);
    if (results.length > 0) {
      await artistService.writeResultsToCSV(results, filename);
      res.status(200).json({ message: 'Results written to CSV successfully.' });
    } else {
      res.status(404).json({ message: 'No artists found.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
