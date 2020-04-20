let gameState = 'menu'; // ch1 = choice 1, ch2 = choice 2 etc.

let playerName = '';

let objDialogue;

let dialogue = 'z0';

const choices = document.getElementById("groupChoices");

const sceneTransitionSpeed = 1250;

setInterval(() => {
    console.log(dialogue);
}, 500);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

quitYes.addEventListener('click', () => {
    window.close();
});

quitNo.addEventListener('click', () => {
    setDisplay(choices, warning, 'flex', 150);
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

btnContinue.addEventListener('click', () => {
    if (chooseNameInput.value) {
        gameState = 'introduction';
        
        playerName = chooseNameInput.value;
        updateName();
        
        hideCreationScreen('url(images/background/intro.jpg) center/contain no-repeat');

        createDialogue();
        updateChoiceDesign();
    }
});

btnSkipIntro.addEventListener("click", () => {
    if (chooseNameInput.value) {
        gameState = 'introduction';

        dialogue = "z13";

        playerName = chooseNameInput.value;
        updateName();

        hideCreationScreen('url(images/background/townRoadDay.jpg) center/cover no-repeat');

        createDialogue();
        updateChoiceDesign();
    }
});

function hideCreationScreen(nextBackground) {
    graphicsArea.style.background = nextBackground;

    textArea.style.bottom = '20.9rem';

    setDisplay(graphicsArea, chooseName, 'flex', 1500);
    setTimeout(() => {
        blackScreen.style.transition = '3s ease';
        setDisplay(graphicsArea, blackScreen, 'flex', 3000);
        setDisplay(textArea, undefined, 'block', 1500);
    }, 1750);

    setTimeout(() => {
        renderText(dialogue);
    }, 4000);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

btnExitCredits.addEventListener('click', () => {
    setDisplay(choices, credits, 'flex', 175);
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

textArea.addEventListener('click', () => {
    nextText();

    // Z

    switch (dialogue) {
        case "z8": 
            transitionScene("z9", "url(images/background/intro2.jpg) center/contain no-repeat", sceneTransitionSpeed);
            break;
        case "z12":
            transitionScene("z13", "url(images/background/townRoadDay.jpg) center/cover no-repeat", sceneTransitionSpeed);
            break;
        case "z15":
            setDisplay(btnLoveMeter, undefined, "flex", 500);
            changeChoices("a1");
            textArea.style.bottom = "2.9rem";
            showChoices();
    }


    // A

    switch (dialogue) {
        case "a6":
            transitionScene("a7", "url(images/background/townDay.jpg) center/cover no-repeat", sceneTransitionSpeed);
            setDisplay(aiko, undefined, "block", 2500);
            break;
        case "a8":
            changeChoices("b1");
            showChoices();
    }


    // B

    switch (dialogue) {
        case "b6":
            reduceLove();
            setDisplay(aiko, undefined, "block", 500);
            break;

        case "b9":
            changeChoices("b1");
            showChoices();
    }

    // C

    switch (dialogue) {
        case "c3":
            changeChoices("c1");
            showChoices();
    }

    // D

    switch (dialogue) {
        case "d1":
            changeChoices("b2");
            showChoices();
            break;

        case "d3":
            changeChoices("b3");
            showChoices();
            break;
    }


    // E

    switch (dialogue) {
        case "e12":
            changeChoices("c2");
            showChoices();
            break;
    }


    // GG

    switch (dialogue) {
        case "gg1":
            setDisplay(dragonAiko, aiko, "block", 500);
            break;
        
        case "gg3":
            setDisplay(blackScreen, textArea, "block", 250);
            setTimeout(() => {
                location.reload();
            }, 2000);
            break;
    }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function transitionScene(nextDialogue, sceneBackground, speed) {
    let x = speed;

    setDisplay(textBlocker, undefined, 'block', 25);    // disables next dialogue

    setTransition(blackScreen, '1s ease');  // sets blackscreen transition
    setDisplay(blackScreen, textArea, 'block', 250);    // hides textbox and fades in black screen

    setTimeout(() => {  // execute after 3s
        setBackground(graphicsArea, sceneBackground);   // changes background

        setTransition(blackScreen, '2s ease');  // sets blackscreen transition
        setDisplay(graphicsArea, blackScreen, 'flex', (x + 500));    // fades out blackscreen

        setDisplay(textArea, textBlocker, 'block', (x + 500));   // enables next dialogue

        setTimeout(() => { // execute after 3s (6s total)
            dialogue = nextDialogue; // sets dialogue
            renderText(dialogue); // renders dialogue^^
        }, (x + 500));
    }, x);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DISPLAYS CHOICES

function hideChoices() {
    setDisplay(textArea, choices, "block", 250);
}

function showChoices() {
    setDisplay(choices, textArea, "flex", 500);
}

// CHANGES CHOICES

function changeChoices(x) {
    gameState = x;
    let key = eval("catalogue." + x);

    let nodes = groupChoices.children;

    for (let i = 0; i < nodes.length; i++) {
        nodes[i].innerHTML = key[i];
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// SET STYLES

function setTransition(ele, val) {
    ele.style.transition = val;
}

function setBackground(ele, val) {
    ele.style.background = val;
}

//////////////////////////////////////////////////////////////////////////////////////////////

// CONTROLS FADE IN AND FADE OUT OF ELEMENTS

// ele1 = element that fades in.
// ele2 = element that fades out.
// val = element display value that fades in (flex, block etc.).
// time = timeout before the fade-in executes (fade-out is always instant).
// ele3, ele4... = excess elements that fade out.

function setDisplay(ele1, ele2, val, time, ele3, ele4, ele5, ele6) {
    let arr = [ele2, ele3, ele4, ele5, ele6];
    ele1.style.display = val;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) {
            arr[i].style.opacity = 0;
        }
    }

    setTimeout(() => {
        ele1.style.opacity = 1;
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== undefined) {
                arr[i].style.display = 'none';
            } 
        }
    }, time);
}

//////////////////////////////////////////////////////////////////////////////////////////////

function changeExpression(expression) {
    setTransition(aiko, "0s");
    let x;
    switch(expression) {
        case 'plain1': 
            x = '3rem';
            break;
        case 'plain2':
            x = '-20.95rem';
            break;
        case 'smile1':
            x = '-44.85rem';
            break;
        case 'smile2':
            x = '-68.75rem'
            break;
        case 'blink1':
            x = '-92.65rem';
            break;
        case 'blink2':
            x = '-116.6rem';
            break;
        case 'huff':
            x = '-140.5rem';
            break;
        case 'angry1':
            x = '-164.45rem';
            break;
        case 'angry2':
            x = '-188.35rem';
            break;
        case 'cry1': 
            x = '-212.25rem';
            break;
        case 'cry2':
            x = '-236.2rem';
            break;
    }
    aiko.style.backgroundPosition = x;
    setTimeout(() => {
        setTransition(aiko, ".75s ease");
    }, 500)
    
}   

//////////////////////////////////////////////////////////////////////////////////////////////

// TEXT RENDERING

function nextText() {
    clearTextArea();
    let arr = dialogue.match(/[a-z]+|[^a-z]+/gi);
    let x = arr[1];
    +x++;
    arr[1] = x;
    arr = arr.join("");
    dialogue = arr;
    renderText(dialogue);
}

function clearTextArea() {
    txtRender.innerHTML = "";
}

const renderText = (txtDialogue) => {
    const x = 'objDialogue.';
    let string = eval(x + txtDialogue);
    var txt = "";

    let rendering = false;
    
    const b = setInterval(() => {
        if (!rendering) {
            rendering = true;
        } else if (txtRender.innerHTML == "") {
            rendering = false;
            clearInterval(b);
        }

        if (rendering) {
            if (txt.length != string.length) {
                txt = txt + string[txt.length];
                txtRender.innerHTML = txt;
            } else {
                clearInterval(b);
            }
        } 
    }, 25);
}

function updateDialogue(val) {
    if (love <= 0 || love >= 5) {
        checkLoveMeter();
    } else {
        dialogue = val;
        renderText(dialogue);
    }
    
}

//////////////////////////////////////////////////////////////////////////////////////////////

// UPDATE CHOICES DESIGN AFTER GAME START

function updateChoiceDesign() {
    let nodes = groupChoices.children;

    for (let i = 0; i < nodes.length; i++) {
        nodes[i].classList.remove("choice-Menu");
        nodes[i].classList.add("choice-InGame");
    }

    nodes[2].style.display = "none";
    
    choices.style.top = "10rem";
}

//////////////////////////////////////////////////////////////////////////////////////////////

// LOVE METER MECHANICS

let love = 3;

let gameOver = false;

function checkLoveMeter() {
    if (!gameOver) {
        if (love <= 0) {
            dialogue = "gg0";
            renderText(dialogue);
            gameOver = true;
        } else if (love >= 5) {
    
        } 
    }
}

function reduceLove() {
    love--;
    updateLoveMeter();

    if (love == 0) {
        changeExpression("angry1");
    } else {
        changeExpression("huff");
    }
}

function addLove() {
    love++;
    updateLoveMeter();
}

function updateLoveMeter() {
    console.log(`Current Love: ${love}`);
    let nodes = loveMeter.children;
    
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].style.opacity = "0";
    }
    
    for (let i = 0; i < love; i++) {
        nodes[i].style.opacity = "1";
    }

    checkLoveMeter();
}

updateLoveMeter();

btnLoveMeter.addEventListener("mouseover", () => {
    loveMeter.style.opacity = "1";
});

btnLoveMeter.addEventListener("mouseout", () => {
    loveMeter.style.opacity = "0";
})

//////////////////////////////////////////////////////////////////////////////////////////////

// NAME UPDATE

function updateName() {
    let arr = playerName.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split("");
        arr[i][0] = arr[i][0].toUpperCase();
        arr[i] = arr[i].join("");
        playerName = arr.join(" ");
    }
}