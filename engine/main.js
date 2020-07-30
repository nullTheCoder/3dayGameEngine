let i = 0


function start() {
    document.getElementById("mainText").textContent = "Made using \n     3-day game engine \n       which was made in 3 days"

    setInterval(everyUpdate, 20)

}


function everyUpdate() {
    i++
    document.getElementById("mainText").textContent = parseInt(i / 50)
}