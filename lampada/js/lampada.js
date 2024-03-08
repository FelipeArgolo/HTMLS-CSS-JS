//dom

const lampada = document.querySelector('#lampada')
const bt01 = document.querySelector('#btligar')
const bt02 = document.querySelector('#btdesligar')

//evento

lampada.addEventListener('dblclick',quebrar)    
bt01.addEventListener('click',ligar)    
bt02.addEventListener('click',desligar)

//funções

function ligar(){

    lampada.src = 'images/acesa.gif' 

}


function desligar(){

    lampada.src = 'images/apagada.gif' 

}

function quebrar (){

    lampada.src = 'images/quebrada.jpg'
}