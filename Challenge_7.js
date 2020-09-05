function Question (question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}
Question.prototype.showQ = function(){
    console.log(this.question);
    for(var i=0; i< this.answers.length; i++){
        console.log(this.answers[i]);
    }
}
function checkAnswer (){
    if (questions[index].correctAnswer === questions[index].answers[answerQ]){
        console.log("Your answer is correct...");
        count++;
    }
    else {
        console.log("Your answer is wrong!!");
        console.log("Correct answer =>  " + questions[index].correctAnswer);
    }
}

var q1 = new Question ("Which built-in method combines the text of two strings and returns a new string?", 
                        ["0 : append()", "1 : concat()", "2 : attach()"],"1 : concat()");
                           
var q2 = new Question ("Which built-in method returns the calling string value converted to lower case?", 
                        ["0 : toLowerCase()", "1 : toLower()", "2 : changeCase(case)"],"0 : toLowerCase()");

var q3 = new Question ("Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?", 
                        ["0 : slice()", "1 : split()", "2 : replace()"],"1 : split()");

var questions =[q1,q2,q3];

var index =Math.floor(Math.random()*3);

questions[index].showQ();

var answerQ = prompt("Please select correct answer :");
var count = 0;

checkAnswer();
console.log("Your correct answer count: " + count);
console.log("-------------------------------------");
while (true){
    index =Math.floor(Math.random()*3);
    questions[index].showQ();
    answerQ = prompt("Please select correct answer :");
    checkAnswer();
    if(answerQ === null){
        console.log("Your correct answer count: " + count);
        break;
    }
    else{
        console.log("Your correct answer count: " + count);
        console.log("-------------------------------------");

    }
}
