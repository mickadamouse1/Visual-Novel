window.onload = function() {

    aiko.onclick = function() {
        changeExpression('plain2');  
    }

    const changeExpression = expression => {
        var x = 48;
        switch(expression) {
            case 'plain1': 
                x = '3rem';
                break;
            case 'plain2':
                x = -248;
                break;
            case 'smile1':
                x = '-34rem';
                break;
            case 'smile2':
                x = ''
            case 'cry1':
                x = '-163.5rem';
        }
        aiko.style.backgroundPosition = x + "px";
    }
}



