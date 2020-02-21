// set variables/array (set questions) - loop thru questions and right answer (jsun)

let questions = [{
	"question":"this is a question 1",
	"answers":"['a', 'b']",
	"correctAnswer":"b"},
	{
	"question":"this is a question 2",
	"answers":"['c', 'd']",
	"correctAnswer":"c"},
	{
	"question":"this is a question 3",
	"answers":"['answer1', 'answer2']",
	"correctAnswer":"answer2"},
	{
	"question":"this is a question 4",
	"answers":"['answer1', 'answer2']",
	"correctAnswer":"answer2"},
	{
	"question":"this is a question 5",
	"answers":"['answer1', 'answer2']",
	"correctAnswer":"answer2"}
];
console.log(questions);
// on click function using start button
var secondsLeft = 60;
start.onclick = function(){
    //start time, show first question, list of ans.
    var mainEl = document.getElementById("time");
    var timerInterval = setInterval(function() {
        secondsLeft--;
        mainEl.textContent = secondsLeft;
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }
    }, 750);
    console.log("start");
}
//function that loops thru ques array 1 at a time
//function to compare ans (right or wrong)
//function end screen
    //user chooses ans. 
    //right ans - move to next question
    //wrong ans - decrease time - move to next question
    //last question/ran out time - show end screen div
    //type initial, max 3. 
    //on click submit button goes to highscore.html