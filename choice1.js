
choice1.addEventListener('click', () => {
   if (gameState === 'menu') {

       gameTitle.style.opacity = 0;
       choices.style.opacity = 0;
       blackScreen.style.display = 'block';

       setTimeout(() => {
        gameTitle.style.display = 'none';
        choices.style.display = 'none';
        blackScreen.style.opacity = 1;
       }, 500);

       chooseName.style.display = 'flex';

       setTimeout(() => {
        chooseName.style.opacity = 1;
       }, 1500);
   }
});

