// základní proměnné
var totalScore, roundScore, activePlayer, dice, playGame;

totalScore= [0,0];
roundScore= 0;
activePlayer= 0;

// vynulování a odstranění kostky
document.getElementById("totalScorePlayer-0").textContent = 0;
document.getElementById("totalScorePlayer-1").textContent = 0;
document.getElementById("currentScore-0").textContent = 0;
document.getElementById("currentScore-1").textContent = 0;

document.querySelector (".diceImage").style.display="none";


newStart();

function newStart(){
    totalScore= [0,0];
    roundScore= 0;
    activePlayer = 0;
    playGame = true;

   // vynulování a odstranění kostky
   document.getElementById("totalScorePlayer-0").textContent = 0;
   document.getElementById("totalScorePlayer-1").textContent = 0;
   document.getElementById("currentScore-0").textContent = 0;
   document.getElementById("currentScore-1").textContent = 0;

   // skrytí kostky
   document.querySelector(".diceImage").style.display = "none";

   // texty do původního stavu
    document.querySelector("#name-0").textContent = "Skóre 1. hráče";
    document.querySelector("#name-1").textContent = "Skóre 2. hráče";

    // vrátíme zvýraznění aktivního hráče k prvnímu a u druhého odstraníme
    document.querySelector(".totalScore0").classList.add("active");
    document.querySelector(".totalScore1").classList.remove("active");
}
    // zavolá funkci newStart a vše se vrátí do původního stavu
    document.querySelector(".newGame").addEventListener("click", newStart);













// měníme obrázek kostky podle náhodného čísla
document.querySelector(".rollDice").addEventListener("click", function(){
    if(playGame){
        // 1. generuje náhodné číslo 1 - 6
    var dice = Math.ceil(Math.random()*6);
    // 2. zobrazit správný obrázek
    var diceElement = document.querySelector(".diceImage");
    diceElement.style.display = "block";
    console.log(diceElement.src = "img/" + dice + ".jpg");

    // 3. Načítáme čísla z kostky
    if (dice !== 1){
    roundScore = roundScore + dice;
    document.getElementById ("currentScore-" + activePlayer).textContent = roundScore;
} else {
    // bude hrát další hráč
    nextPlayer();
    }   
}
       
});


function nextPlayer(){
    if(activePlayer === 0){
        activePlayer = 1;
    }else {
        activePlayer = 0;
    }
    roundScore = 0;

    document.getElementById("currentScore-0").textContent = 0;
    document.getElementById("currentScore-1").textContent = 0;

    document.querySelector(".diceImage").style.display = "none";

    document.querySelector(".totalScore0").classList.toggle("active");
    document.querySelector(".totalScore1").classList.toggle("active");

}

document.querySelector(".holdScore").addEventListener("click", function(){
    if(playGame){
        // celkové se skóre se vyplní současným skóre  
    totalScore[activePlayer]= totalScore[activePlayer] + roundScore;
    // propsání celkového skôre
    document.querySelector("#totalScorePlayer-" + activePlayer).textContent = totalScore[activePlayer];

    if(totalScore [activePlayer]>= 30){
        document.querySelector("#name-" + activePlayer).textContent = "Vítěz!";
        document.querySelector(".diceImage").style.display = "none";
        playGame = false;
    } else {
        nextPlayer();
        }
    }
});

