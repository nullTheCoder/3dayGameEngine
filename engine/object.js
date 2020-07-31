

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