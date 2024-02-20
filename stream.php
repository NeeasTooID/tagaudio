<?php
$filePath = 'path/to/your/media/file.mp3';
$fileSize = filesize($filePath);

// Set header untuk streaming
header('Content-Type: audio/mpeg');
header('Content-Length: ' . $fileSize);
header('Content-Disposition: inline; filename="audio.mp3"');

// Buka dan baca file
$handle = fopen($filePath, 'rb');
while (!feof($handle)) {
    // Baca dan kirim data file
    echo fread($handle, 8192);
    ob_flush();
    flush();
}
fclose($handle);
?>
