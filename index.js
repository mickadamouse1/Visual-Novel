let gameState = 'menu'; // ch1 = choice 1, ch2 = choice 2 etc.

let playerName = '';

let objDialogue;

window.dialogue = 'z0';

const choices = document.getElementById("groupChoices");

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

setName.addEventListener('click', () => {
    if (chooseNameInput.value) {
        gameState = 'introduction';
        playerName = chooseNameInput.value;
        
        graphicsArea.style.background = 'url(images/background/intro.jpg) center/contain no-repeat';

        textArea.style.bottom = '20.9rem';

        setDisplay(graphicsArea, chooseName, 'flex', 1500);
        setTimeout(() => {
            blackScreen.style.transition = '3s ease';
            setDisplay(graphicsArea, blackScreen, 'flex', 3000);
            setDisplay(textArea, undefined, 'block', 1500);
        }, 1750);

        setTimeout(() => {
            renderText(dialogue);
        }, 4000)

        createDialogue();
        updateChoiceDesign();
    }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

btnExitCredits.addEventListener('click', () => {
    setDisplay(choices, credits, 'flex', 175);
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

textArea.addEventListener('click', () => {
    nextText();

    switch (dialogue) {
        case "z8": 
            transitionScene("z9", "url(images/background/intro2.jpg) center/contain no-repeat");
            break;
        case "z12":
            transitionScene("z13", "url(images/background/townRoadDay.jpg) center/cover no-repeat");
            break;
        case "z15":
            gameState = "ch1";
            changeChoices("z1");
            textArea.style.bottom = "2.9rem";
            setDisplay(choices, undefined, "flex", 500);
    }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function transitionScene(nextDialogue, sceneBackground) {
    setDisplay(textBlocker, undefined, 'block', 25);    // disables next dialogue

    setTransition(blackScreen, '1s ease');  // sets blackscreen transition
    setDisplay(blackScreen, textArea, 'block', 250);    // hides textbox and fades in black screen

    setTimeout(() => {  // execute after 3s
        setBackground(graphicsArea, sceneBackground);   // changes background

        setTransition(blackScreen, '2s ease');  // sets blackscreen transition
        setDisplay(graphicsArea, blackScreen, 'flex', 2000);    // fades out blackscreen

        setDisplay(textArea, textBlocker, 'block', 2000);   // enables next dialogue

        setTimeout(() => { // execute after 3s (6s total)
            dialogue = nextDialogue; // sets dialogue
            renderText(dialogue); // renders dialogue^^
        }, 2000);
    }, 1500);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////



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

const setDisplay = (ele1, ele2, val, time, ele3, ele4, ele5, ele6) => {
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

window.onload = function() {
    const changeExpression = expression => {
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
    }   
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
    console.log(arr);
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

//////////////////////////////////////////////////////////////////////////////////////////////

// CHANGES THE CHOICE TEXT

const catalogue = {
    z1: ["Walk into the centre of town.", "Sneakily scout through the town while hidden."],
    z2: ["Run away!", "Attack her!"]
};

function changeChoices(x) {
    let key = eval("catalogue." + x);

    let nodes = groupChoices.children;

    for (let i = 0; i < nodes.length; i++) {
        nodes[i].innerHTML = key[i];
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

btnLoveMeter.addEventListener("mouseover", () => {
    loveMeter.style.opacity = "1";
});

btnLoveMeter.addEventListener("mouseout", () => {
    loveMeter.style.opacity = "0";
})