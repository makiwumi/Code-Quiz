// set variables/array (set questions) - loop thru questions and right answer (jsun)

let questions = [{
	question:"this is a question 1",
	options:"['a', 'b']",
	correctAnswer:"b"},
	{
    question:"this is a question 1",
    options:"['a', 'b']",
    correctAnswer:"b"},
	{
    question:"this is a question 1",
    options:"['a', 'b']",
    correctAnswer:"b"},
	{
    question:"this is a question 1",
    options:"['a', 'b']",
    correctAnswer:"b"},
	{
    question:"this is a question 1",
    options:"['a', 'b']",
    correctAnswer:"b"}
];
console.log(questions);
// on click function using start button
let secondsLeft = 60;

start.onclick = function(){
    //start time, show first question, list of ans.
    let mainEl = document.getElementById("time");
    let timerInterval = setInterval(function() {
        secondsLeft--;
        mainEl.textContent = secondsLeft;
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }
    }, 1000);
    console.log("start");

    // Call question function 
    showQuestion();
}
//function that loops thru ques array 1 at a time
function showQuestion(){
    let currentQuestion = questions
}
//function to compare ans (right or wrong)
//function end screen
    //user chooses ans. 
    //right ans - move to next question
    //wrong ans - decrease time - move to next question
    //last question/ran out time - show end screen div
    //type initial, max 3. 
    //on click submit button goes to highscore.html