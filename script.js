document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.character-card');
  
  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Only allow clicking on locked cards
      if (card.classList.contains('locked')) {
        // Simulate character unlock
        card.classList.remove('locked');
        card.classList.add('active');
        
        // Remove active class from other cards
        cards.forEach(otherCard => {
          if (otherCard !== card && otherCard.classList.contains('active')) {
            otherCard.classList.remove('active');
          }
        });
        
        // Replace the content with character info
        const characterIcon = card.querySelector('.character-icon');
        characterIcon.classList.remove('gray');
        
        // Remove controller and dots
        const controls = card.querySelector('.character-controls');
        if (controls) {
          card.removeChild(controls);
        }
        
        // Remove join button
        const joinButton = card.querySelector('.join-button');
        if (joinButton) {
          card.removeChild(joinButton);
        }
        
        // Add character info
        const names = ['Luigi', 'Mario', 'Peach'];
        const randomName = names[Math.floor(Math.random() * names.length)];
        
        const nameElement = document.createElement('div');
        nameElement.classList.add('character-name');
        nameElement.textContent = randomName;
        card.appendChild(nameElement);
        
        const buttonElement = document.createElement('div');
        buttonElement.classList.add('character-button');
        buttonElement.textContent = 'Select';
        card.appendChild(buttonElement);
      }
    });
  });
});

