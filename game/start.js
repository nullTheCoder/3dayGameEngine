let i2 = 0

function startGame() {
    addUpdates(update)   
    setScreen(20, 5)
    displayBackground([
        "####################",
        "####################",
        "####################",
        "####################",
        "####################"
    ])
}

function update() {
    i2++
    if (i2 == 30) {
        moveObject('test', 1, 0)
        i2 = 0 
    }
}