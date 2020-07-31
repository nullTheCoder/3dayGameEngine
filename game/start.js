// The Three Day Engine
// Copyright(C) 2020 Stepan Gaidukevich
//
// This program is free software: you can redistribute it and / or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.See the
// GNU General Public License for more details.
// You should have received a copy of the GNU General Public License
// along with this program.If not, see https://www.gnu.org/licenses/.

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
            "#     #       #  # #",
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