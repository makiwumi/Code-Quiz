//Select all elements using IDs

let start = document.getElementById("start");
let timer = document.getElementById("time");
let question = document.getElementById("question");
let choicesEl = document.getElementById("choices");
let submitBtn = document.getElementById("submit");
let initials = document.getElementById("initials");
let feedback = document.getElementById("feedback");

//array of questions

let questions =[
    {
    questDis: "what is blah blah",
    choices:["A", "B", "C"],
    answer:"A"
    },
    
    {
    questDis: "what is ah ah",
    choices:["A", "B", "C"],
    answer:"B"
    },

    {
    questDis: "what is bl bl",
    choices:["A", "B", "C"],
    answer:"A"    
    },

    {
    questDis: "what is ya ya",
    choices:["A", "B", "C"],
    answer:"C"
    },

    {
    questDis: "what is ha blah",
    choices:["A", "B", "C"],
    answer:"B"
    }
];
 
//variables to display a question from array. 
//array = [q1, q2 ,q3 ,q4 ,q5]. array.length = 5. array index = 4
//variable for the question the user is answering
let currentQuestionIndex = 0;

//variable to start time (5 * 25 =125 seconds start)

let time = questions.length * 25;

let timerId;

function startQuiz(){
    //remove start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

    question.removeAttribute("class");
    
    //start time, show first question, list of ans.
   
    timerId = setInterval(clockTick, 1000);

    timer.textContent = time;

    showQuestion();
}

//function to display current question
function showQuestion(){
    
    let currentQuestion = questions[currentQuestionIndex];
    
    //change to new question
    display = document.getElementById("question-title");
    display.textContent = currentQuestion.questDis;
    
    //remove choices for next question
    choicesEl.innerHTML = "";

    //randomize choices
    currentQuestion.choices.forEach(function(choice, i) {
    // button made for each choice
        let choiceSelect = document.createElement("button");
        choiceSelect.setAttribute("class", "choice");
        choiceSelect.setAttribute("value", choice);
    
        choiceSelect.textContent = i + 1 + ". " + choice;
    
        // on click for user click answer
        choiceSelect.onclick = checkAnswer;
    
        // display on the page
        choicesEl.appendChild(choiceSelect);
    });
}

//check answer function
function checkAnswer(){
    // check if user guessed wrong
    if (this.value !== questions[currentQuestionIndex].answer) {
    // subtract 5 seconds
        time -= 20;
    
        if (time < 0) {
          time = 0;
        }
    
    // show remaining time
        timer.textContent = time;
    
        feedback.textContent = "Wrong!";
    } 
    else {
        
        feedback.textContent = "Correct!";
    }
    
    // display feedback until next question
    feedback.setAttribute("class", "feedback");
    
    setTimeout(function() {
        feedback.setAttribute("class", "feedback hide");
    }, 1000);
    
    // move to next question
    currentQuestionIndex++;
    
      // check if we've run out of questions
    if (currentQuestionIndex === questions.length) {
        gameOver();
    } else{
        showQuestion();
    }
}
//stop time when game is over   
function gameOver(){
    clearInterval(timerId);
    //displate endscreen & final score
    let endscreen = document.getElementById("end-screen");
    endscreen.removeAttribute("class");

    let finalscore = document.getElementById("final-score");
    finalscore.textContent = time;

    questions.setAttribute("class", "hide");
}

function clockTick() {
    // change time as user answers wrong
    time--;
    timer.textContent = time;
      
    // if user runs out of time. its game over. Call game over function
    if (time <= 0) {
        gameOver();
    }
}

function saveHighscore() {
        // get value of input box
    var initials = initials.value.trim();
      
        // make sure value wasn't empty
    if (initials !== "") {
          // get saved scores from localstorage, or if not any, set to empty array
        var highscores = 
            JSON.parse(window.localStorage.getItem("highscores")) || [];
      
          // format new score object for current user
        var newScore = {
            score: time,
            initials: initials
          };
      
          // save to localstorage
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
        
        window.location.href="highscores.html";
    }
}
      
function checkForEnter(event) {
        // "13" represents the enter key
    if (event.key === "Enter") {
        saveHighscore();
    }
}
      
      // user clicks button to submit initials
submitBtn.onclick = saveHighscore;
      
      // user clicks button to start quiz
start.onclick = startQuiz;
      
initials.onkeyup = checkForEnter;