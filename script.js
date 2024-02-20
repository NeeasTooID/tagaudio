document.addEventListener('DOMContentLoaded', () => {
  const audioContainer = document.getElementById('audio-container');

  // Fetch list of audio files
  fetch('/audio/list')
    .then(response => response.json())
    .then(audioFiles => {
      audioFiles.forEach(file => {
        const audioElement = createAudioElement(file);
        audioContainer.appendChild(audioElement);
      });
    })
    .catch(error => console.error('Error fetching audio files:', error));

  // Function to create audio element
  function createAudioElement(fileName) {
    const audioElement = document.createElement('audio');
    audioElement.controls = true;
    const sourceElement = document.createElement('source');
    sourceElement.src = `/audio/${encodeURIComponent(fileName)}`;
    sourceElement.type = 'audio/mpeg';
    audioElement.appendChild(sourceElement);
    
    const audioItem = document.createElement('div');
    audioItem.className = 'audio-item';
    audioItem.appendChild(audioElement);

    return audioItem;
  }
});
