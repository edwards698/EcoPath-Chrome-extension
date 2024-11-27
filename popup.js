document.getElementById('start-challenge').addEventListener('click', () => {
    chrome.storage.sync.set({ challengeStarted: true }, () => {
      document.getElementById('status').innerText = 'Challenge Started! 🎉';
    });
  });
  
  // Display saved state
  chrome.storage.sync.get('challengeStarted', (data) => {
    if (data.challengeStarted) {
      document.getElementById('status').innerText = 'Challenge already in progress! 💪';
    }
  });
  