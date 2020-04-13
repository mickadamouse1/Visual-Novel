
choice1.addEventListener('click', () => {
   switch (gameState) {
       case "menu" :
           setDisplay(blackScreen, choices, "block", 750, gameTitle);
           setDisplay(chooseName, undefined, "flex", 1500);
           break;

       case "ch1" :
           setDisplay(textArea, choices, "block", 250);
           transitionScene("a0", "url(images/background/townDay.jpg) center/cover no-repeat");
           break;
   }
});

