const selectPlayer = document.querySelector(".player");



document.querySelector(".play").addEventListener("click", tocarMusica);
document.querySelector(".pause").addEventListener("click", pausarMusica)


function tocarMusica () {
    selectPlayer.play()
    document.querySelector(".play").style.display = "none"
    document.querySelector(".pause").style.display = "block"
}

function pausarMusica() {
    selectPlayer.pause()
    document.querySelector(".play").style.display = "block"
    document.querySelector(".pause").style.display = "none"
}