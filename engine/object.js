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

let engine_objects = []


let engine_currentOBJ = -1

function getPosObject(name) {
    for (let i = 0; i < engine_objects.length; i++) {
        if (name === engine_objects[i].name) {
            return [engine_objects[i].x, engine_objects[i].y]

        }
    }
}


function moveObject(name, x, y) {
    for (let i = 0; i < engine_objects.length; i++) {
        if (name === engine_objects[i].name) {
            engine_currentOBJ = i
            i = engine_objects.length
       
        }
    }

    for (let i = 0; i < engine_objects.length; i++) { if (engine_objects[engine_currentOBJ].x + x == engine_objects[i].x) { if (engine_objects[engine_currentOBJ].y + y == engine_objects[i].y) { return [false, engine_objects[i]] }  } }

    if (engine_objects[engine_currentOBJ].x + x < 0 || engine_objects[engine_currentOBJ].y + y < 0) { return [false, "non"] }
    if (engine_objects[engine_currentOBJ].x + x > engine_width - 1 || engine_objects[engine_currentOBJ].y + y > engine_height - 1) { return [false, { name: "null", symbol: ' ', x: 0, y: 0 }] }
    
    engine_objects[engine_currentOBJ].x = engine_objects[engine_currentOBJ].x + x
    engine_objects[engine_currentOBJ].y = engine_objects[engine_currentOBJ].y + y
    return [true, { name: "null", symbol: ' ', x: 0, y: 0 }]
}

function addObject(name, x, y, symbol) {
    engine_objects.push({name:name,symbol:symbol,x:x,y:y});

}


    function removeObject(name) {
        for (let i = 0; i < engine_objects.length; i++) {
            if (name === engine_objects[i].name) {
                engine_objects[i] = { name: "null", symbol: '#', x: 140924, y: 0 }
                return true

            }
        }

        return false
    }


function setObjectsPos(name, x, y) {
    for (let i = 0; i < engine_objects.length; i++) {
        if (name === engine_objects[i].name) {
            engine_currentOBJ = i
            i = engine_objects.length

        }
    }
    engine_objects[engine_currentOBJ].x = x
    engine_objects[engine_currentOBJ].y = y

}