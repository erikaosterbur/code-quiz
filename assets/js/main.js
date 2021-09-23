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

// var mainPage = document.getElementById("main-page");
// var timerEl = document.getElementById("countdown");
// var startBtn = document.getElementById("startBtn");
// var question = document.getElementById("question");
// var option1 = document.getElementById("option1");
// var option2 = document.getElementById("option2");
// var option3 = document.getElementById("option3");
// var option4 = document.getElementById("option4");
// var score = 0;
// var questions = [
//     {
//     questionText: "What is the capital of Nigeria?" ,
//     choices: ["Kano", "Ibadan", "Lagos", "Abuja"] ,
//     answer: "Abuja"
//     },
//     {
//     questionText: "How many islands are in the Philippines?" ,
//     choices: ["579", "7,640", "20,999", "28"] ,
//     answer: "7,640"
//     },
//     {
//     questionText: "Monaco is located in which continent?" ,
//     choices: ["Europe", "Asia", "Africa", "Oceana"] ,
//     answer: "Europe"
//     },
//     {
//     questionText: "Which are the only two landlocked countries in South America?" ,
//     choices: ["Colombia & Paraguay", "Paraguay & Bolivia", "Bolivia & Uruguay", "Colombia & Uruguay"] ,
//     answer: "7,640"
//     },
// ];
// var currentQuestionIndex = 0;


// // on click, the startGame function begins
// function startGame() {

//     // makes the title, instructions, and start button disappear
//      mainPage.setAttribute("style", "display: none")

//     //  countdown begins function 
//         var timeLeft = 60;
//         function callback() { 
//             timeLeft--;
//             timerEl.textContent = "Time: " + timeLeft;
//         if (timeLeft === 0) {
//             clearInterval(timerInterval);
//             timerEl.textContent = "Time is up!";
//         }
//         }
//     var timerInterval = setInterval(callback, 1000);
//     };


//     // if (answer.clicked == true) {
//     //     score ++;
//     // } 
//     // else {
//     //     timeLeft - 10;
//     // }


//     function askQuestion() {
//         var currentQuestion = questions[currentQuestionIndex]
//         question = currentQuestion.questionText;
//         option1 = currentQuestion.choices[0];
//         option2 = currentQuestion.choices[1];
//         option3 = currentQuestion.choices[2];
//         option4 = currentQuestion.choices[3];
        
    
//     }

// submitAnswer.addEventListener("click", checkAnswer) //checkAnswer callback function & advance currentQuestionIndex

// // if (checkAnswer === true) {
// //     score ++;
// //     else {
// //     timeLeft -10;
// //     }
// // };


var mainPage = document.getElementById("main-page");
var timerEl = document.getElementById("countdown");
var startBtn = document.getElementById("startBtn");
var score = 0;
var numQuestions = 0;
var answerDiv = document.getElementById('answers');
var questionDiv = document.getElementById('question');
var numRightSpan = document.getElementById('numRight');
var numQuestionsSpan = document.getElementById('numQuestions');


questions = [
    {
        question: "What is the capital of Nigeria?" ,
        options: ["Kano", "Ibadan", "Lagos", "Abuja"],
        answerIdx: 3
    },
    {
        question: "How many islands are in the Philippines?" ,
        options: ["579", "7,640", "20,999", "28"],
        answerIdx: 1
    },
    {
        question: "Monaco is located in which continent?" ,
        options: ["Europe", "Asia", "Africa", "Oceana"],
        answerIdx: 0
    },
    {
        question: "Which are the only two landlocked countries in South America?" ,
        options: ["Colombia & Paraguay", "Paraguay & Bolivia", "Bolivia & Uruguay", "Colombia & Uruguay"],
        answerIdx: 1
    }, 
]
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
     
    function displayQuestion(q) {  
    // insert the question
    questionDiv.innerHTML = q.question;

    // remove any pre-existing answer buttons
    answerDiv.innerHTML = '';

    // for each option in the 'options' array, create a button
    // attach an 'onclick' event handler that will update
    // the question counts and display the next question in the array
    for(i = 0; i < q.options.length; i++) {
        btn = document.createElement('button');
        btn.innerHTML = q.options[i];
        btn.setAttribute("id",i);

        // event handler for each answer button
        btn.onclick = function() {
            var id = parseInt(this.getAttribute("id"));
            numQuestionsSpan.innerHTML = ++numQuestions;

            // if this is the right answer, increment score; wrong answer, deduct time
            if(id === q.answerIdx) {
                ++score;
            }
            else {
                timeLeft - 10;
            }

            // if there is another question to be asked, run the function again
            // otherwise, complete the test
            if(questions.length) {
                displayQuestion(questions.shift()); 
            } else {
                alert("You got " + score + "of " + numQuestions + " right! Click Ok to enter your initials on the scoreboard.");
                window.location.href = "";
            }                    
        }
        answerDiv.appendChild(btn);        
    }
}
displayQuestion(questions.shift());
};
