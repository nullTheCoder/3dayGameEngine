let i2 = 0
let i4 = 0


function startGame() {
    change_sceene("t0")
    addUpdates(update)
    setScreen(20, 5)
    addSceene({
        sceene_name: "t1", sceene_bg: [
            "####################",
            "#                  #",
            "#                  #",
            "#                  #",
            "####################"
        ],
        wall_objs: [
            "####################",
            "#      #      #  # #",
            "#        #        # ",
            "#    #     #  #    #",
            "####################"
        ],
        game_objects: [{ name: "player", symbol: "F", x: 1, y: 2 }]})
    addObject('wall', 5, 0, 'G')
    addObject('test', 0, 3, '^')

    document.addEventListener('keydown', logKey);


}

function update() {}

function logKey(e) {
    if (e.key == "w") {
        while (moveObject("player", 0, -1)) { }
    }
    if (e.key == "s") {
        while (moveObject("player", 0, 1)) { }
    }
    if (e.key == "a") {
        while (moveObject("player", -1, 0)) { }
    }
    if (e.key == "d") {
        while (moveObject("player", 1, 0)) { }
    }
    if (e.key == "c") {
        change_sceene("t1")
    }
}