require('dotenv').config();

const express = require('express');
const artistRoutes = require('./routing/artistRouter'); 

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', artistRoutes);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
