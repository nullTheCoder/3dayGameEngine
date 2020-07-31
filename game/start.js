let i2 = 0
let i4 = 0


function startGame() {
    addSceene({
        sceene_name: "t0", sceene_bg: [
            "####################",
            "#       -->       %#",
            "#            -->  %#",
            "#   -->           %#",
            "####################"
        ],
        wall_objs: [
            "####################",
            "#   #         ##  %#",
            "#        #        %#",
            "##    #     #  #  %#",
            "####################"
        ],
        game_objects: [{ name: "player", symbol: "F", x: 1, y: 2 }]

    })

    change_sceene("t0")
    addUpdates(update)
    setScreen(20, 5)
    addSceene({
        sceene_name: "t1", sceene_bg: [
            "########           #",
            "#    -->           #",
            "#           -->    #",
            "#        -->       #",
            "####################"
        ],
        wall_objs: [
            "#############    ###",
            "#      #      #  # #",
            "#         #       # ",
            "#    #     #  #    %",
            "####################"
        ],
        game_objects: [{ name: "player", symbol: "F", x: 1, y: 2 }]
    })

    addSceene({
        sceene_name: "t2", sceene_bg: [
            "############        ",
            "#           -->     ",
            "#    -->     -->   #",
            "#                  #",
            "####################"
        ],
        wall_objs: [
            "############        ",
            "#     #       #  ## ",
            "#               # #%",
            "#    #             #",
            "####################"
        ],
        game_objects: [{ name: "player", symbol: "F", x: 1, y: 2 }]
    })

    addSceene({
        sceene_name: "end", sceene_bg: [
            "^^^^^^^^^^^^^^^^^^^^",
            "<                  >",
            "<    le ende       >",
            "thx for playing this>",
            "^^^^^^^^^^^^^^^^^^^^"
        ],
        wall_objs: [
        ],
        game_objects: []
    })

    document.addEventListener('keydown', logKey);


}

function update() {}

function logKey(e) {
    if (e.key == "w") {
        while (moveObject("player", 0, -1)[0] === true) { }

        if (moveObject("player", 0, -1)[1].symbol != '%') {
            return
        }
    }
    else if (e.key == "s") {
        while (moveObject("player", 0, 1)[0] === true) { }
        if (moveObject("player", 0, 1)[1].symbol != '%') {
            return
        }
    }
    else if (e.key == "a") {
        while (moveObject("player", -1, 0)[0] === true) { }
        if (moveObject("player", -1, 0)[1].symbol != '%') {
            return
        }
    }
    else if (e.key == "d") {
        while (moveObject("player", 1, 0)[0] === true) { }
        if (moveObject("player", 1, 0)[1].symbol != '%') {
            return
        }
    }
    else return

    if (getSceene() == "t0") {
        change_sceene("t1")
    }
    else if (getSceene() == "t1") {
        change_sceene("t2")
    }
    else if (getSceene() == "t2") {
        change_sceene("end")
    }

}