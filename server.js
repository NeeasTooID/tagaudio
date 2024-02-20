const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Atur routing untuk file audio
app.get('/:audioName', (req, res) => {
  const audioName = req.params.audioName;
  const audioFilePath = path.join(__dirname, 'mp3', audioName);
  if (fs.existsSync(audioFilePath)) {
    res.sendFile(audioFilePath);
  } else {
    res.status(404).send('File audio tidak ditemukan');
  }
});

// Atur port server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
