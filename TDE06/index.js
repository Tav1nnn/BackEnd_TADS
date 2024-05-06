const express = require('express');
const app = express();

app.get('/health', (req, res) => {
    res.json({ status: 'running' });
});
  

app.listen(5000);