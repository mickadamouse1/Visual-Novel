window.onload = function() {

    var arrAiko = ["aikoPlain", "aikoBlush1", "aikoBlush2", "aikoBlush3"];

    var x = 0;

    aiko.onclick = function() {
        x = x + 1;
        if (x == arrAiko.length) x = 0;
        aiko.style.background = (`url("images/character/${arrAiko[x]}.png") center/contain no-repeat`);
        console.log(arrAiko[x]);   
    }
}



