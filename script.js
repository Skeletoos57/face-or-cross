// Getting div's

let result = document.getElementById("result");
let secondResult = document.getElementById('secondResult');
let button = document.getElementById("throwCoin");

// Preparing the audio

let coinFlip = new Audio("coin-flip.mp3");

// Add Listener

button.addEventListener('click', () => {
    generateFaceOrCross();
});

// Function to generate the result

function generateFaceOrCross() {

    let options = ["☻", "✘"];
    let num = Math.floor(Math.random() * 100);

    coinFlip.play();
    

    if (num >= 50) {
        result.innerHTML = options[0];
        secondResult.innerHTML = "Cara";
        result.style.color = "rgb(255, 255, 0)";
        secondResult.style.color = "rgb(255, 255, 0)";
    }else{
        result.innerHTML = options[1];
        secondResult.innerHTML = "Cruz";
        result.style.color = "rgb(255, 255, 0)";
        secondResult.style.color = "rgb(255, 255, 0)";
    }

    let i = 0;
    let interval = setInterval(function() {
        if (i >= 1) {
            result.style.color = "rgb(0, 0, 0)";
            secondResult.style.color = "rgb(0, 0, 0)";
            result.innerHTML = "?";
            secondResult.innerHTML = "";
            clearInterval(interval);
        }else{
            i++;
        }
 
   }, 550)

}