
choice1.addEventListener('click', () => {
   if (gameState === 'menu') {
       setDisplay(blackScreen, choices, 'block', 750, gameTitle);
       setDisplay(chooseName, undefined, 'flex', 1500);
   }
});

