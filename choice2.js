

choice2.addEventListener('click', () => {
    checkLoveMeter();
    if (!gameOver) {
        switch (gameState) {
            case "menu":
                setDisplay(credits, choices, "flex", 175);
                break;
    
            case "ch1":
                hideChoices();
                transitionScene("b0", "url(images/background/townAlley.png) center/cover no-repeat", sceneTransitionSpeed);
                break;
    
            case "ch2":
                love--;
                updateLoveMeter();
                hideChoices();
                updateDialogue("d0")
                break;
    
            case "d1":
                hideChoices();
                updateDialogue("c0");
                break;
    
            case "d2":
                hideChoices();
                updateDialogue("c0");
                break;
        }
    }
});