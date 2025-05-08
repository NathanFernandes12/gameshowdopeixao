function startGame() {
    window.location.href = 'game.html';
  }
  
  function openSettings() {
    document.getElementById('settingsModal').style.display = 'flex';
  }
  
  function openCredits() {
    document.getElementById('creditsModal').style.display = 'flex';
  }
  
  function confirmExit() {
    document.getElementById('exitModal').style.display = 'flex';
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }
  
  function exit() {
    window.close();
    window.location.href = 'about:blank';
  }
  
  // Close modals when clicking outside
  window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (const modal of modals) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    }
  }
  
  // Save settings when changed
  const settingsForm = document.querySelector('.settings-form');
  settingsForm.addEventListener('change', function(e) {
    const settings = {
      soundVolume: document.getElementById('soundVolume').value,
      musicVolume: document.getElementById('musicVolume').value,
      difficulty: document.getElementById('difficulty').value
    };
    localStorage.setItem('gameSettings', JSON.stringify(settings));
  });
  
  // Load saved settings
  window.addEventListener('load', function() {
    const savedSettings = localStorage.getItem('gameSettings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      document.getElementById('soundVolume').value = settings.soundVolume;
      document.getElementById('musicVolume').value = settings.musicVolume;
      document.getElementById('difficulty').value = settings.difficulty;
    }
  });

  function volumeAudio(){
    const soundVolume = document.getElementById('soundVolume');
    const musicVolume = document.getElementById('musicVolume');

    volumeControl.addEventListener('input', function() {
      audio.volume = this.value;
  });
  }