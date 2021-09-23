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
var questionText = document.getElementById("question");
var optionList = document.getElementById("option-list");
var optionOne = document.getElementById("option1");
var optionTwo = document.getElementById("option2");
var optionThree = document.getElementById("option3");
var optionFour = document.getElementById("option4");
var score = 0;
var questions = [
    {
    questionText: "What is the capital of Nigeria?" ,
    options: ["Kano", "Ibadan", "Lagos", "Abuja"] ,
    answer: "Abuja"
    },
    {
    questionText: "How many islands are in the Philippines?" ,
    options: ["579", "7,640", "20,999", "28"] ,
    answer: "7,640"
    },
    {
    questionText: "Monaco is located in which continent?" ,
    options: ["Europe", "Asia", "Africa", "Oceana"] ,
    answer: "Europe"
    },
    {
    questionText: "Which are the only two landlocked countries in South America?" ,
    options: ["Colombia & Paraguay", "Paraguay & Bolivia", "Bolivia & Uruguay", "Colombia & Uruguay"] ,
    answer: "Paraguay & Bolivia"
    },
];
var currentQuestionIndex = 0;


// on click, the startGame function begins
function startGame() {

    // makes the title, instructions, and start button disappear
     mainPage.setAttribute("style", "display: none")

    //  countdown begins function 
        var timeLeft = 60;
        function callback() { 
            timeLeft--;
            timerEl.textContent = "Time: " + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            timerEl.textContent = "Time is up!";
        }
    }
    var timerInterval = setInterval(callback, 1000);

    // Function to ask the questions
    function quizQuestions() {
        // Loads question text:  
        var currentQuestion = questions[0];
        questionText.textContent = currentQuestion.questionText;
        optionOne.textContent = currentQuestion.options[0];
        optionTwo.textContent = currentQuestion.options[1];
        optionThree.textContent = currentQuestion.options[2];
        optionFour.textContent = currentQuestion.options[3];
        
        //Event listener for click on answers:
        optionList.addEventListener("click", function(event) {
            var userAnswer = event.target;  
            var currentQuestion = questions[currentQuestionIndex];
            if (userAnswer.textContent === currentQuestion.answer) {
            score++;
            console.log(score);
            } 
            else {
            timeLeft - 10;
            }
        
            currentQuestionIndex++;
    
            if (currentQuestionIndex < questions.length){ 
            currentQuestion = questions[currentQuestionIndex];
            questionText.textContent = currentQuestion.questionText;
            optionOne.textContent = currentQuestion.options[0];
            optionTwo.textContent = currentQuestion.options[1];
            optionThree.textContent = currentQuestion.options[2];
            optionFour.textContent = currentQuestion.options[3];
            }
            else {
                endGame();
            };
        });
    };
    quizQuestions();
};

function endGame() {
    console.log("The game has ended");
    

}