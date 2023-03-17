let btns = document.querySelectorAll('.hoh')
let img = document.querySelector('.img')
let text = document.querySelector('.two h1')
let speed = document.querySelector('.one h1')
let bil = document.querySelector('.bil')
let lol = document.querySelector('.lol')

let imgs = {
    "black": "./img/black.png",
    "white": "./img/white.png",
    "wheat": "./img/wheat.png"
}
btns.forEach((btn, idx) => {
    btn.onclick = () => {
        if (idx === 0) {
            img.style.backgroundImage = `url(${imgs.black})`
            text.innerHTML = "$89, 990"
            speed.innerHTML = "750км"
        } else if (idx === 1) {
            img.style.backgroundImage = `url(${imgs.white})`
            text.innerHTML = "$99, 990"
            speed.innerHTML = "850км"
        } else {
            img.style.backgroundImage = `url(${imgs.wheat})`
            text.innerHTML = "$110, 990"
            speed.innerHTML = "950км"
        }
    }
})

bil.onclick = () => {
    bil.classList.toggle('animation')
}

lol.onclick = () => {
    lol.classList.toggle('active')
}