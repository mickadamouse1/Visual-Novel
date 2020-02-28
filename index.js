

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





