
const arr =[
"images/dice1.png",
"images/dice2.png",
"images/dice3.png",
"images/dice4.png",
"images/dice5.png",
"images/dice6.png"
]

let random = Math.floor(Math.random()*arr.length)
let random2 = Math.floor(Math.random()*arr.length)




function winner(){
  let image1 = document.querySelector(".img1").src=arr[random]
  let image2 = document.querySelector(".img2").src=arr[random2]
  if (random>random2) {
    document.querySelector("h1").innerHTML="🚩 Player 1 wins!"

  }
  else if (random<random2){
    document.querySelector("h1").innerHTML="Player 2 wins! 🚀"


  }
  else{
    document.querySelector("h1").innerHTML="It's a tie!"

  }
}
winner()
