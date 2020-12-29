var example = document.querySelector("#word");
var word = "커피";
example.innerText = word;

var user = document.querySelector("form");
var answer = user.querySelector("#answer");
var result = document.querySelector("#result");
var score = 0;
var displayScore = document.querySelector("#score");

user.querySelector("#btn").addEventListener("click",compare);

function compare(event) {
    event.preventDefault();
    if(word[word.length-1] === answer.value[0]) {
        result.innerText = "딩동댕";
        example.innerText = answer.value;
        word = answer.value;
        score += 10;
        displayScore.innerText = score;
        answer.value='';

    } else {
        result.innerText = "땡";
        answer.value='';
    }
}