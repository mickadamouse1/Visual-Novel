

choice2.addEventListener('click', () => {
    switch (gameState) {
        case "menu":
            setDisplay(credits, choices, "flex", 175);
            break;
        case "ch1":
            setDisplay(textArea, choices, "block", 250);
            transitionScene("gg0", "url(images/background/gameOver.jpg) center/cover no-repeat", sceneTransitionSpeed);
            setDisplay(dragonAiko, undefined, "block", 2500);
            break;
    }
});