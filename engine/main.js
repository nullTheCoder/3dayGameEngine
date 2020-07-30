
let updateFuncs = []

let width = 0

let height = 0

let background_symbols = []

let background_render = ""

function start() {
    document.getElementById("mainText").textContent = "Made using \n 3-day game engine \n which was made in 3 days"

    setInterval(everyUpdate, 20)

}

function addUpdates(func)
{
    updateFuncs.push(func)
    render()
}



function everyUpdate() {
    for (i = 0; i < updateFuncs.length; i++)
    {
        updateFuncs[i]()
    }
}


function setScreen(width_, height_) {
    width = width_
    height = height_
}

function displayBackground(list_of_strings)
{
    background_symbols = list_of_strings
    console.log("test");
}

function render() {
    background_render = ""
    for (i = 0; i < background_symbols.length; i++) {
        background_render = background_render + background_symbols[i] + "/n"
    }

    document.getElementById("mainText").textContent = background_render
}