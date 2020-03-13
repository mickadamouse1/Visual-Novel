var gameState = 'menu';

var playerName = '';

let dialogue;

quitYes.addEventListener('click', () => {
    window.close();
});

quitNo.addEventListener('click', () => {
    setDisplay(choices, warning, 'flex', 150);
});

setName.addEventListener('click', () => {
    gameState = 'introduction';
    playerName = chooseNameInput.value;
    
    graphicsArea.style.background = 'url(images/background/intro.jpg) center/contain no-repeat';

    textArea.style.bottom = '20.9rem';

    setDisplay(graphicsArea, chooseName, 'flex', 1500);
    setTimeout(() => {
        blackScreen.style.transition = '5s ease';
        setDisplay(graphicsArea, blackScreen, 'flex', 5000);
        setDisplay(textArea, undefined, 'block', 2500);
    }, 2000);

    setTimeout(() => {
        renderText('z0');
    }, 6000)

    createDialogue();
});

btnExitCredits.addEventListener('click', () => {
    setDisplay(choices, credits, 'flex', 175);
});

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

const renderText = (txtDialogue) => {
    const x = 'dialogue.';
    let string = eval(x + txtDialogue);

    var stringx = string.split("");
    
    var txt = "";
    
    const b = setInterval(() => {
        if (txt.length != string.length) {
            txt = txt + string[txt.length];
            txtRender.innerHTML = txt;
        } else {
            clearInterval(b);
        }
        
    }, 50);
}
