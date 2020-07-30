

let objects = [{ name: 'test', symbol: 't', x: 1, y: 1 }]

let currentOBJ = -1

function moveObject(name, x, y) {
    for (let i = 0; i < objects.length; i++) {
        if (name === objects[i].name) {
            currentOBJ = i
            i = objects.length
       
        }
    }

    for (let i = 0; i < objects.length; i++) {if (objects[currentOBJ].x + x == objects[i].x) { if (objects[currentOBJ].y + y == objects[i].y) {return false } }}


    objects[currentOBJ].x = objects[currentOBJ].x + x
    objects[currentOBJ].y = objects[currentOBJ].y + y
    return true
}