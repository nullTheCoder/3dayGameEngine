
let updateFunc

let width = 0

let height = 0

let background_symbols_br = []

let background_symbols = []

let background_render = ""

function start() {
    document.getElementById("mainText").textContent = "Made using \n 3-day game engine \n which was made in 3 days"

    setInterval(everyUpdate, 20)

}

function addUpdates(func)
{
    updateFunc = func
}

function everyUpdate() {
    updateFunc()
    render()
}


function setScreen(width_, height_) {
    width = width_
    height = height_
}

function displayBackground(list_of_strings)
{
    background_symbolssbr = list_of_strings
}

function render() {
    background_render = ""
    background_symbols = background_symbolssbr

    for (i = 0; objects.length > i; i++) {
        background_symbols[objects[i].y] = replaceAt(background_symbols[objects[i].y], objects[i].x, objects[i].symbol)
        console.log(i)
    }


    for (i = 0; i < background_symbols.length; i++) {
        background_render = background_render + background_symbols[i] + "\n"
    }

    document.getElementById("mainText").textContent = background_render
}


function replaceAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}