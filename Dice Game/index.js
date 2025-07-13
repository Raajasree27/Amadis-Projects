function fun(){
var image1=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var randomNumber1= Math.floor(Math.random()*image1.length);
document.querySelector(".img1").setAttribute("src",image1[randomNumber1]);

var image2=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var randomNumber2= Math.floor(Math.random()*image2.length);
document.querySelector(".img2").setAttribute("src",image2[randomNumber2]);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="DRAW";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}
}