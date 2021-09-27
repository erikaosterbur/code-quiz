
var currentHighScore = document.getElementById("current-high-score");
var playAgain = document.getElementById("play-again");


        var initials = localStorage.getItem("initials");
        var score = localStorage.getItem("score")


console.log("Initials: " + initials + "Score: " + score);

//Displays current high score and play again button
function highScore(){
    currentHighScore.textContent = "Initials: " + initials + " Score: " + score;
    var playAgainBtn = document.createElement('button');
             playAgainBtn.textContent = "Play Again";
             playAgainBtn.onclick = function () {
                window.location.href = "../index.html";
    }
    playAgain.appendChild(playAgainBtn);
}

highScore()
