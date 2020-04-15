//////////////////////////////////////////////////////////////////////////////////////////////

// CHANGES THE CHOICE TEXT

const catalogue = {
    z1: ["Walk into the centre of town.", "Sneakily scout through the town while hidden."],
    z2: ["I'm just a wandering traveller. Heard this is quite the secret getaway.", "I'm your worst nightmare! *finger guns* say your prayers! pew! pew! pew!"],
    d1: ["I said. I am your worst nightmare! Fear me, peasant girl!", "Haha... I'm actually just a traveller..."],
    d2: ["I will not repeat myself again! Bow down to me or suffer the conciquences!", "Woah, woah! Calm down, I'm just playing around... I'm a traveller from America."]
};

function changeChoices(x) {
    let key = eval("catalogue." + x);

    let nodes = groupChoices.children;

    for (let i = 0; i < nodes.length; i++) {
        nodes[i].innerHTML = key[i];
    }
}