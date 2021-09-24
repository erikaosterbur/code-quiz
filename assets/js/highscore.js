
var currentHighScore = document.getElementById("current-high-score");
var playAgain = document.getElementById("play-again");


        var initials = localStorage.getItem("initials");
        var score = localStorage.getItem("score")


console.log("Initials: " + initials + "Score: " + score);

function highScore(){
    currentHighScore.textContent = "Initials: " + initials + " Score: " + score;
    //play again button doesn't quite work how I want. I'm not sure how to make it go back to the home page
    var playAgainBtn = document.createElement('button');
             playAgainBtn.textContent = "Play Again";
             playAgainBtn.onclick = function () {
                location.href = "https://erikaosterbur.github.io/code-quiz/";
    }
    playAgain.appendChild(playAgainBtn);
}

highScore()
