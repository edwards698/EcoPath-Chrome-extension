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
  
  function addCard() {
    const cardsContainer = document.querySelector('.cards-container');
  
    // Create a new card element
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.innerHTML = `
      <div class="header">
        <h1>New Card</h1>
        <span class="settings-icon" onclick="addCard()">
          <img src="assets/icons/setting _1.png" alt="Settings">
        </span>
      </div>
      <div class="info-box">
        <p>This is a dynamically added card.</p>
      </div>
      <button class="create-btn">Action</button>
    `;
  
    // Add the new card to the left of existing cards
    cardsContainer.prepend(newCard);
  }

  // Toggle visibility of the second card
function toggleSecondCard() {
  const secondCard = document.getElementById("second-card");
  secondCard.classList.toggle("hidden");
}

  