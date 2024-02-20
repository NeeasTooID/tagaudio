const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const mp3Folder = path.join(__dirname, 'mp3');

// Serve HTML, CSS, and JavaScript files
app.use(express.static('public'));

// Route to fetch list of audio files
app.get('/audio/list', (req, res) => {
  fs.readdir(mp3Folder, (err, files) => {
    if (err) {
      console.error('Error reading mp3 folder:', err);
      return res.status(500).send('Internal Server Error');
    }
    const audioFiles = files.filter(file => file.endsWith('.mp3'));
    res.json(audioFiles);
  });
});

// Route to serve audio files
app.get('/audio/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(mp3Folder, fileName);
  res.sendFile(filePath);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
