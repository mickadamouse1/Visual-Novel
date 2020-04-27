choice1.addEventListener("click", () => {
    switch (gameState) {
        case "menu":
            setDisplay(blackScreen, choices, "block", 750, gameTitle);
            setDisplay(chooseName, undefined, "flex", 1500);
            break;
            
        case "a1":
            hideChoices();
            transitionScene("a0", "url(images/background/townDay.jpg) center/cover no-repeat", sceneTransitionSpeed);
            break;
            
        case "b1":
            hideChoices();
            updateDialogue("c0");
            renderNextExpression(true);
            break;
    
        case "b2":
            reduceLove(true);
            hideChoices();
            updateDialogue("d2");
            break;
            
        case "b3":
            reduceLove(true);
            hideChoices();
            updateDialogue("d4");
            break;

        case "c1":
            reduceLove(true);
            hideChoices();
            updateDialogue("f0");
            break;

        case "c2":
            changeExpression("cry1");
            hideChoices();
            updateDialogue("ea0");
            break;
        
        case "c3":
            changeExpression("huff");
            hideChoices();
            updateDialogue("ed0");
            break;

        case "d1":
            hideChoices();
            updateDialogue("i0");
            break;
        }
    }
);