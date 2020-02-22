//Select all elements using IDs

let start = document.getElementById("start");
let quiz = document.getElementById("quiz");
let question = document.getElementById("question");
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let submitBtn = document.getElementById("submit");
let initials = document.getElementById("initials");
var feedback = document.getElementById("feedback");

//array of questions

let questions =[
    {
    question: "what is blah blah",
    choiceA:"op 1",
    choiceB:"op2",
    choiceC:"op3",
    correct:"A"
    },
    
    {
    question: "what is ah ah",
    choiceA:"op 1",
    choiceB:"op2",
    choiceC:"op3",
    correct:"B"
    },

    {
    question: "what is bl bl",
    choiceA:"op 1",
    choiceB:"op2",
    choiceC:"op3",
    correct:"A"    
    },

    {
    question: "what is ya ya",
    choiceA:"op 1",
    choiceB:"op2",
    choiceC:"op3",
    correct:"C"
    },

    {
    question: "what is ha blah",
    choiceA:"op 1",
    choiceB:"op2",
    choiceC:"op3",
    correct:"B"
    }
];

//select each question

questions[0].question
questions[0].choiceA
questions[0].choiceB
questions[0].choiceC
questions[0].correct


 
//variables to display a question from array. 
//array = [q1, q2 ,q3 ,q4 ,q5]. array.length = 5. array index = 4
let lastQuestionIndex = questions.length - 1;

//variable for the question the user is answering
let currentQuestionIndex = 0;

//variable to start time
let secondsLeft = 60;


// on click function using start button
start.addEventListener("click", startQuiz)

function startQuiz(){
    let startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class","hide");
    
    //start time, show first question, list of ans.
    let mainEl = document.getElementById("time");
    let timerInterval = setInterval(function() {
        secondsLeft--;
        mainEl.textContent = secondsLeft;
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }
    }, 1000);

    showQuestion();
}

//function to display current question
function showQuestion(){
    let display = questions[currentQuestionIndex];
    question.innerHTML = "<h2>" + display.question + "</h2>";
    choiceA.innerHTML = display.choiceA;
    choiceB.innerHTML = display.choiceB;
    choiceC.innerHTML = display.choiceC;
}

//check answer function
function checkAnswer(answer){
    //answer is correct
    if (answer == questions[currentQuestionIndex].correct){
        feedback.textContent = "Correct!";
    }
    else{
        //answer is wrong
        time -= 15;
        feedback.textContent = "Wrong!";
    }
    if (time < 0) {
      time = 0;
    }
}