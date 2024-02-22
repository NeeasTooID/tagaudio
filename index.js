const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/mp3/:songName', (req, res) => {
    const songName = req.params.songName;
    const filePath = path.join(__dirname, 'mp3', `${songName}.mp3`);
    res.sendFile(filePath);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
