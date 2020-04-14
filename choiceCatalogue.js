//////////////////////////////////////////////////////////////////////////////////////////////

// CHANGES THE CHOICE TEXT

const catalogue = {
    z1: ["Walk into the centre of town.", "Sneakily scout through the town while hidden."],
    z2: ["I'm just a wandering traveller. Heard this is quite the secret getaway.", "I'm your worst nightmare! *finger guns* say your prayers! pew! pew! pew!"]
};

function changeChoices(x) {
    let key = eval("catalogue." + x);

    let nodes = groupChoices.children;

    for (let i = 0; i < nodes.length; i++) {
        nodes[i].innerHTML = key[i];
    }
}