const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('Server is running. Bot is active.');
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
