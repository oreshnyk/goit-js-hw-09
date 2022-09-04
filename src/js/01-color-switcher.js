const btnStart = document.querySelector("[data-start]")
const btnStop = document.querySelector("[data-stop]")
const body = document.querySelector("body")
let hex_value = body.style.backgroundColor;
let setTimeoutHandler = 0

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

function bgColorChanger(){
    body.style.backgroundColor = getRandomHexColor();
    if(btnStart.getAttribute("disabled")){
        setTimeoutHandler = setTimeout(() => {
            bgColorChanger()
        },1000)
    }
}

btnStart.addEventListener("click", (event) => {
    if(!event.target.getAttribute("disabled")){
        event.target.setAttribute("disabled","disabled")
    }
    btnStop.removeAttribute("disabled")
    bgColorChanger()
})

btnStop.addEventListener("click", (event) => {
    if(!btnStart.getAttribute("disabled")){
        return 
    }
    if(!event.target.getAttribute("disabled")){
        event.target.setAttribute("disabled","disabled")
    }
    btnStart.removeAttribute("disabled")
    if(setTimeoutHandler){
        clearTimeout(setTimeoutHandler)
    }
    setTimeoutHandler = 0
})


