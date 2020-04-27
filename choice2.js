

choice2.addEventListener('click', () => {
    checkLoveMeter();
    if (!gameOver) {
        switch (gameState) {
            case "menu":
                setDisplay(credits, choices, "flex", 175);
                break;
    
            case "a1":
                hideChoices();
                transitionScene("b0", "url(images/background/townAlley.png) center/cover no-repeat", sceneTransitionSpeed);
                break;
    
            case "b1":
                hideChoices();
                updateDialogue("d0");
                reduceLove(true);
                break;
    
            case "b2":
                hideChoices();
                updateDialogue("c0");
                renderNextExpression(true);
                break;
    
            case "b3":
                hideChoices();
                updateDialogue("c0");
                renderNextExpression(true);
                break;

            case "c1":
                changeExpression("blink1");
                hideChoices();
                updateDialogue("e0");
                break;

            case "c2":
                reduceLove(true);
                hideChoices();
                updateDialogue("eb0");
                break;

            case "c3":
                addLove(false);
                changeExpression("plain2");
                hideChoices();
                updateDialogue("ec0");
                break;

            case "d1":
                hideChoices();
                updateDialogue("h0");
        }
    }
});