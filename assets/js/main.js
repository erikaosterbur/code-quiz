// selectors
var mainPage = document.getElementById("main-page");
var timerEl = document.getElementById("countdown");
var startBtn = document.getElementById("startBtn");
var answerDiv = document.getElementById("answers");
var questionDiv = document.getElementById("question");
var displayScore = document.getElementById("display-score");
var scoreSpan = document.getElementById("score");
var quizArea = document.getElementById("quiz-area");
var submitBtn = document.getElementById("submit");
var scoreForm = document.getElementById("score-form");
var endOfQuiz = document.getElementById("end-of-quiz");
var initials = document.getElementById("initials");
var playAgain = document.getElementById("play-again");

//global variables
var timerInterval = "";
var questions = [
        {
        question: "What is the capital of Nigeria?" ,
        options: ["Kano", "Ibadan", "Lagos", "Abuja"] ,
        answerIdx: "Abuja"
        },
        {
        question: "How many islands are in the Philippines?" ,
        options: ["579", "7,640", "20,999", "28"] ,
        answerIdx: "7,640"
        },
        {
        question: "Monaco is located in which continent?" ,
        options: ["Europe", "Asia", "Africa", "Oceana"] ,
        answerIdx: "Europe"
        },
        {
        question: "Which are the only two landlocked countries in South America?" ,
        options: ["Colombia & Paraguay", "Paraguay & Bolivia", "Bolivia & Uruguay", "Colombia & Uruguay"] ,
        answerIdx: "Paraguay & Bolivia"
        }
    ];

    function startGame() {

        // makes the title, instructions, and start button disappear
        mainPage.setAttribute("style", "display: none")
        // turns score into number
        scoreSpan = parseInt(scoreSpan);
        // sets beginning score to 0
        scoreSpan = 0;

        //  countdown begins function 
        var timeLeft = 60;
        function callback() { 
            timeLeft--;
            timerEl.textContent = "Time: " + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();             
            timerEl.textContent = "Time is up!";
            }
        }
        timerInterval = setInterval(callback, 1000);

        // function that triggers new questions and listens for user click on one option
        function askQuestion(q) {  
            // displays the quiz area
            quizArea.setAttribute("style", "display: block");
            // shows next question
            questionDiv.innerHTML = q.question;
            //clears previous buttons 
            answerDiv.innerHTML = '';
            // creates buttons for each option
            for(i = 0; i < q.options.length; i++) {
                var btn = document.createElement('button');
                btn.innerHTML = q.options[i];
                btn.setAttribute('id', i);
                // listens for user click on answer
                btn.addEventListener("click", function(event) {
                    var userSelection = event.target;
                        // if user clicks on correct answer, adds 10 to score
                        if(userSelection.textContent === q.answerIdx) {
                        scoreSpan = scoreSpan + 10;
                        displayScore.textContent = "Score: " + scoreSpan;
                        }
                        // if user clicks on incorrect answer, timer deducts 20 seconds
                        else {
                        timeLeft = timeLeft - 20;
                        }
                        // if there are more questions, askQuestion function starts over
                        if(questions.length) {
                        askQuestion(questions.shift()); 
                        } 
                        // if no more questions, end game
                        else {
                        endGame();
                        }                
                    }     
                )      
                // adds buttons for options to page        
                answerDiv.appendChild(btn);
            }     
        } 
        askQuestion(questions.shift());
    };

    function endGame() {
        // clears time left and quiz question and option buttons
        clearInterval(timerInterval);
        timerEl.textContent = "Time is up!"
        quizArea.setAttribute("style", "display: none");

        //this part doesn't work, and I'm not sure why. Some feedback would be great! 
        if ((localStorage.getItem)("score") < scoreSpan) {
            //displays form for user to enter initials
            scoreForm.setAttribute("style", "display: block");
             // displays final score
            endOfQuiz.textContent = "Done! Your score: " + scoreSpan;
            // stores score in local storage
            localStorage.setItem("score", JSON.stringify(scoreSpan));
            //upon clicking "submit," stores initials entered into local storage and brings user to highscore page
            submitBtn.addEventListener("click", function storeInitials(event){
                localStorage.setItem("initials", JSON.stringify(initials.value));
                });
        }   
        else {
             // displays final score
             endOfQuiz.textContent = "Done! Your score: " + scoreSpan + ". You did not beat the highscore. Play again?";
             var playAgainBtn = document.createElement('button');
             playAgainBtn.innerHTML.textContent = "Play Again";
             playAgainBtn.addEventListener("click", function startGameAgain(event){
                    startGame();
             })
             playAgain.appendChild(playAgainBtn);
        }
    }