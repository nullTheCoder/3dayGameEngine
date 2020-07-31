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


let engine_updateFunc

let engine_width = 0

let engine_height = 0

let engine_bg_symbols = []

let engine_background_symbols = []

let engine_background_render = ""


function start() {
    document.getElementById("mainText").textContent = "Made using \n 3-day game engine \n which was made in 3 days"

    setInterval(everyUpdate, 20)

}

function addUpdates(func)
{
    engine_updateFunc = func
}

function everyUpdate() {
    engine_updateFunc()
    engine_render()
}


function setScreen(width_, height_) {
    engine_width = width_
    engine_height = height_
}

function displayBackground(list_of_strings)
{
    engine_bg_symbols = list_of_strings
}

function engine_render() {
    engine_background_render = ""

    for (i = 0; i < engine_height; i++)
        engine_background_symbols[i] = engine_bg_symbols[i]

    for (i = 0; engine_objects.length > i; i++) {
        engine_background_symbols[engine_objects[i].y] = replaceAt(engine_background_symbols[engine_objects[i].y], engine_objects[i].x, engine_objects[i].symbol)
    }


    for (i = 0; i < engine_background_symbols.length; i++) {
        engine_background_render = engine_background_render + engine_background_symbols[i] + "\n"
    }

    document.getElementById("mainText").textContent = engine_background_render
}   


function replaceAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}