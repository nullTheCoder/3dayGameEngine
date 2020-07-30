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

    addObject('wall', 5, 0, 'G')
    addObject('test', 0, 3, '^')
}

function update() {
    i2++
    if (i2 == 30) {
        moveObject('test', 1, 0)
        moveObject('test', 0, -1)
        i2 = 0 
    }
}