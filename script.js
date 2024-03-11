let playButton = document.querySelector("#play")
let stopButton = document.querySelector("#stop")
let timeBox = document.querySelectorAll(".number")

playButton.addEventListener('click', play)
stopButton.addEventListener('click', stop)
    


let theTime
let miliSeconds = 0
let seconds = 0
let minutes = 0
let hours = 0
let days = 0

/*Função parar, ela irá parar a contagem*/ 
function stop() {
    clearInterval(timer)
}

/*Função para iniciar, ela irá iniciar a contagem*/
function play() {
        clearInterval(timer)
        theTime = setInterval(timer, 10)
    }

/*Função timer, ela irá fazer as contas das outras unidad/*Função parar, ela irá parar a contagemes com base nos milissegundos decorridos*/    
function timer(){
    miliSeconds++
    
    /*Condicional*/
    if(miliSeconds == 100) {
        seconds++
        miliSeconds = 0
    }
    if(seconds == 60) {
        minutes++
        seconds = 0
    }
    if(minutes == 60) {
        hours++
        minutes = 0
    }
    if(hours == 24) {
        days++
        hours = 0
    }

    console.log(seconds)

    timeDisplay(seconds, minutes, hours, days)

}

/*Aqui está a função que vai mostrar os dados calculados na função anterior no site*/
function timeDisplay() {  
    timeBox[4].innerHTML = `${miliSeconds}`
    timeBox[3].innerHTML = `${seconds}`
    timeBox[2].innerHTML = `${minutes}`
    timeBox[1].innerHTML = `${hours}`
    timeBox[0].innerHTML = `${days}`    
}

// Número aleatório

function game(){
    let randonNumber = Math.floor(Math.random() * 10); 
    console.log(randonNumber)
    let yourChoice = '';
    
    while (yourChoice == '' || yourChoice == null) {
        yourChoice = prompt('Escolha um número de 1 a 10')
    }
    
    if (randonNumber == yourChoice) {
        alert("Você é um guerreiro, parabéns!")
    }
    else {
        alert(`Você perdeu! O número certo é ${randonNumber}`)
    }
}



