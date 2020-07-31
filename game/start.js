// The Three Day Engine
// Copyright(C) 2020 The TDE Team
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

function game_start() {
    engine_addScene({
        name: "t0", background: [
            "####################",
            "#       -->       %#",
            "#            -->  %#",
            "#   -->           %#",
            "####################"
        ],
        walls: [
            "####################",
            "#   #         ##  %#",
            "#        #        %#",
            "##    #     #  #  %#",
            "####################"
        ],
        objects: [{ name: "player", symbol: "F", x: 1, y: 2 }]

    })

    engine_changeScene("t0")
    //engine_addUpdate(update)
    engine_setScreen(20, 5)

    engine_addScene({
        name: "t1", background: [
            "########           #",
            "#    -->           #",
            "#           -->    #",
            "#        -->       #",
            "####################"
        ],
        walls: [
            "#############    ###",
            "#     #       #  # #",
            "#         #       # ",
            "#    #     #  #    %",
            "####################"
        ],
        objects: [{ name: "player", symbol: "F", x: 1, y: 2 }]
    })

    engine_addScene({
        name: "t2", background: [
            "############        ",
            "#           -->     ",
            "#    -->     -->   #",
            "#                  #",
            "####################"
        ],
        walls: [
            "############        ",
            "#     #       #  ## ",
            "#               # #%",
            "#    #             #",
            "####################"
        ],
        objects: [{ name: "player", symbol: "F", x: 1, y: 2 }],
    })

    engine_addScene({
        name: "end", background: [
            "^^^^^^^^^^^^^^^^^^^^",
            "<                  >",
            "<      le ende     >",
            "<                  >",
            "^^^^^^^^^^^^^^^^^^^^"
        ],
        walls: [],
        objects: []
    })

    document.addEventListener('keydown', logKey);
}

function logKey(e) {
    let vector = []

    if (e.key == "w") {
        vector = [0, -1]
    }

    else if (e.key == "s") {
        vector = [0, 1]
    }

    else if (e.key == "a") {
        vector = [-1, 0]
    }

    else if (e.key == "d") {
        vector = [1, 0]
    }

    else {
        return
    }

    while (engine_moveObject("player", vector[0], vector[1])[0] === true) { }

    if (engine_moveObject("player", vector[0], vector[1])[1].symbol == "%") {
        if (engine_getCurrentScene() == "t0") {
            engine_changeScene("t1")
        }
        else if (engine_getCurrentScene() == "t1") {
            engine_changeScene("t2")
        }
        else if (engine_getCurrentScene() == "t2") {
            engine_changeScene("end")
        }
    }
}