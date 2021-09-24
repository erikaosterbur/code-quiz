// I have a bunch of quiz questions to ask
// What is the best way to store all of those questions, plus the correct answer for each one
// For each question in the quiz:
    // The question itself
    // The possible answers (4 for each one)
    // Which answer is correct

// Have a process where (call this process every time user is ready for new question):
    // When the game starts a coutdown begins
    // A question is selected from the collection you have
    // All the elements are added to the DOM
    // The user will click on one of the answers (list element with buttons)
    // Detect that click and determine if the user clicked on the right answer
        // If yes, add some points to user's total
        // If no, subtract 10 seconds from time remaining
        // Then go to next question

// After all questions OR after time runs out, show user their score
// High score tracking

var mainPage = document.getElementById("main-page");
var timerEl = document.getElementById("countdown");
var startBtn = document.getElementById("startBtn");
var answerDiv = document.getElementById("answers");
var questionDiv = document.getElementById("question");
var displayScore = document.getElementById("display-score");
var scoreSpan = document.getElementById("score");
var quizArea = document.getElementById("quiz-area");
var submitEl = document.getElementById("submit");
var scoreForm = document.getElementById("score-form");
var endOfQuiz = document.getElementById("end-of-quiz");
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
        scoreSpan = parseInt(scoreSpan);
        scoreSpan = 0;
        console.log(scoreSpan);


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

        function askQuestion(q) {  

            quizArea.setAttribute("style", "display: block");
       
            questionDiv.innerHTML = q.question;

            answerDiv.innerHTML = '';
    
            for(i = 0; i < q.options.length; i++) {
                var btn = document.createElement('button');
                btn.innerHTML = q.options[i];
                btn.setAttribute('id', i);
    
                btn.addEventListener("click", function(event) {
                    var userSelection = event.target;
                        if(userSelection.textContent === q.answerIdx) {
                        scoreSpan = scoreSpan + 10;
                        displayScore.textContent = "Score: " + scoreSpan;
                        }
                        else {
                        timeLeft = timeLeft - 20;
                        }
    
                        if(questions.length) {
                        askQuestion(questions.shift()); 
                        } 
                        else {
                        endGame();
                        }                
                    }     
                )               
                answerDiv.appendChild(btn);
            }  
            console.log(scoreSpan);   
        } 
        askQuestion(questions.shift());
    };


    function endGame() {
        clearInterval(timerInterval);
        timerEl.textContent = "Time is up!"
        quizArea.setAttribute("style", "display: none");
        scoreForm.setAttribute("style", "display: block");
        endOfQuiz.textContent = "Done! Your score: " + scoreSpan;

    }

