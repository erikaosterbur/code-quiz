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
var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var score = 0;
// timerEl.setAttribute("style",  )

if (startBtn.clicked === true) {
    startGame();
}


function startGame() {
     mainPage.setAttribute("style", "display: none")
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
    };

function question1() {
    question.textContent = "What is the capital of Nigeria";
    option1.textContent = "Kano";
    option2.textContent = "Ibadan";
    option3.textContent = "Lagos";
    option4.textContent = "Abuja";
    if (option4.clicked == true) {
        score ++;
    } 
    else {
        timeLeft - 10;
    }
}

function question2() {
    question.textContent = "How many islands are in the Philippines?";
    option1.textContent = "579";
    option2.textContent = "7,640";
    option3.textContent = "3,562";
    option4.textContent = "28";
    if (option2.clicked == true) {
        score ++;
    } 
    else {
        timeLeft - 10;
    }
}

function question3() {
    question.textContent = "Monaco is located in which continent?";
    option1.textContent = "Europe";
    option2.textContent = "Asia";
    option3.textContent = "Africa";
    option4.textContent = "Australia";
    if (option1.clicked == true) {
        score ++;
    } 
    else {
        timeLeft - 10;
    }
}

function question4() {
    question.textContent = "What is the largest province in Canada (land area)?";
    option1.textContent = "Nunavut";
    option2.textContent = "Quebec";
    option3.textContent = "Northwest Territories";
    option4.textContent = "British Columbia";
    if (option1.clicked == true) {
        score ++;
    } 
    else {
        timeLeft - 10;
    }
}

function question5() {
    question.textContent = "Which are the only two landlocked countries in South America?";
    option1.textContent = "Colombia & Paraguay";
    option2.textContent = "Paraguay & Bolivia";
    option3.textContent = "Bolivia & Uruguay";
    option4.textContent = "Colombia & Uruguay";
    if (option2.clicked == true) {
        score ++;
    } 
    else {
        timeLeft - 10;
    }
}


// startBtn.addEventListener("click", startGame());
