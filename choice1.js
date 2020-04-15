choice1.addEventListener("click", () => {
    checkLoveMeter();
    if (!gameOver) {
        switch (gameState) {
            case "menu":
                setDisplay(blackScreen, choices, "block", 750, gameTitle);
                setDisplay(chooseName, undefined, "flex", 1500);
                break;
            
            case "ch1":
                hideChoices();
                transitionScene("a0", "url(images/background/townDay.jpg) center/cover no-repeat", sceneTransitionSpeed);
                break;
            
            case "ch2":
                setTransition(aiko, "0s");
                changeExpression("smile1");
                hideChoices();
                updateDialogue("c0");
                break;
    
            case "d1":
                love--;
                updateLoveMeter();
                hideChoices();
                updateDialogue("d2");
                setTransition(aiko, "0s");
                changeExpression("huff");
                break;
            
            case "d2":
                love--;
                updateLoveMeter();
                hideChoices();
                updateDialogue("d4");
                setTransition(aiko, "0s");
                changeExpression("angry1");
                break;
        }
    }
});