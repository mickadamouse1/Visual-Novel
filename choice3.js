choice3.addEventListener('click', () => {
    if (gameState === 'menu') {
        warning.style.display = "block";
        setTimeout(() => {
            warning.style.opacity = '1';
        }, 25);

        choices.style.opacity = '0';
    }
});