let card1 = window.document.getElementById("card1")
let card2 = window.document.getElementById("card2")
let card3 = window.document.getElementById("card3")
let setaDireita = window.document.getElementById("setadireita")
let setaEsquerda = window.document.getElementById("setaesquerda")

function RolarDireita(){
  card1.style = "display:none"
  card3.style = "display:flex"
  setaDireita.style = "display:none"
  setaEsquerda.style = "display:flex; margin-top:55px; margin-left: 80px"
}

function RolarEsquerda(){
  card1.style = "display:flex"
  card3.style = "display:none"
  setaDireita.style = "display:flex"
  setaEsquerda.style = "display:none"
}