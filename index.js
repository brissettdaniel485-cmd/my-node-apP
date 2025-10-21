const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('Hello World from Render!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
