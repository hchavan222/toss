
var valone = Math.floor(Math.random()*6) + 1;

var image1 = "images/dice"+valone+".png";

//document.querySelectorAll("img")[0].setAttribute("src", image1);
var qwe =document.querySelectorAll("img")[0]
qwe.setAttribute("src",image1)

var valtwo = Math.floor(Math.random()*6) + 1;

var image2 = "images/dice" + valtwo + ".png";

document.querySelectorAll("img")[1].setAttribute("src",image2);


if(valone>valtwo){
  document.querySelector("h1").innerHTML = "Player 1 wins "
}

else if (valtwo > valone) {
  document.querySelector("h1").innerHTML = "Player 2 wins "
}

else{
  document.querySelector("h1").innerHTML = "SCORE TIED TRY AGAIN"
}
