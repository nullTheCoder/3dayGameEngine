

let engine_objects = [{name:"null",symbol:'#',x:140924,y:0}]

let currentOBJ = -1

function moveObject(name, x, y) {
    for (let i = 0; i < engine_objects.length; i++) {
        if (name === engine_objects[i].name) {
            currentOBJ = i
            i = engine_objects.length
       
        }
    }

    for (let i = 0; i < engine_objects.length; i++) { if (engine_objects[currentOBJ].x + x == engine_objects[i].x) { if (engine_objects[currentOBJ].y + y == engine_objects[i].y) {return false } }}

    if (engine_objects[currentOBJ].x + x < 0 || engine_objects[currentOBJ].y + y < 0) { return false }
    if (engine_objects[currentOBJ].x + x > engine_width - 1|| engine_objects[currentOBJ].y + y > engine_height - 1) { return false }


    engine_objects[currentOBJ].x = engine_objects[currentOBJ].x + x
    engine_objects[currentOBJ].y = engine_objects[currentOBJ].y + y
    return true
}

function addObject(name, x, y, symbol) {
    engine_objects.push({name:name,symbol:symbol,x:x,y:y});

}

function removeObject(name) {
    for (let i = 0; i < engine_objects.length; i++) {
        if (name === engine_objects[i].name) {
            engine_objects[i] = {name:"null",symbol:'#',x:140924,y:0}
            return true

        }
    }

    return false
}