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


let engine_updateFunc

let engine_width = 0
let engine_height = 0

let engine_fixed_background = []
let engine_background_symbols = []

let engine_background_render = ""

function engine_start() {
    document.getElementById("mainText").textContent = "Made using \n 3-day game engine \n which was made in 3 days"

    setInterval(engine_update, 20)
}

function engine_update() {
    //engine_updateFunction()
    engine_updateCurrentScene()
    engine_render()
}


//function engine_addUpdate(func) {
//    engine_updateFunction = func
//}


function engine_setScreen(width_, height_) {
    engine_width = width_
    engine_height = height_
}

function engine_displayBackground(list) {
    engine_fixed_background = list
}

function engine_render() {
    engine_background_render = ""

    engine_background_symbols = Array.from(engine_fixed_background)

    for (i = 0; engine_objects.length > i; i++) {
        engine_background_symbols[engine_objects[i].y] = engine_background_symbols[engine_objects[i].y].replaceAt(engine_objects[i].x, engine_objects[i].symbol)
        //engine_background_symbols[engine_objects[i].y][engine_objects[i].x] = engine_objects[i].symbol
    }

    for (i = 0; i < engine_background_symbols.length; i++) {
        engine_background_render = engine_background_render + engine_background_symbols[i] + "\n"
    }

    document.getElementById("mainText").textContent = engine_background_render
}   


String.prototype.replaceAt = function (index, char) {
    // if (index > str.length - 1) return str;
    // return str.substr(0, index) + chr + str.substr(index + 1);

    return this.substr(0, index) + char + this.substr(index + char.length);
}