
let updateFuncs = []

function start() {
    document.getElementById("mainText").textContent = "Made using \n 3-day game engine \n which was made in 3 days"

    setInterval(everyUpdate, 20)

}

function addUpdates(func)
{
    updateFuncs.push(func)
}



function everyUpdate() {
    for (i = 0; i < updateFuncs.length; i++)
    {
        updateFuncs[i]()
    }
}