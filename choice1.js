choice1.addEventListener("click", () => {
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
            hideChoices();
            updateDialogue("c0");
            changeExpression("smile1");
            break;
    
        case "d1":
            reduceLove();
            hideChoices();
            updateDialogue("d2");
            break;
            
        case "d2":
            reduceLove();
            hideChoices();
            updateDialogue("d4");
            break;
        }
    }
);