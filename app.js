var example = document.querySelector("#word"); //제시어 태그
var word = "커피"; //첫 제시어
example.innerText = `제시어 : ${word}`; //제시어 태그 안에 제시어

var user = document.querySelector("form"); //폼태그
var answer = user.querySelector("#answer"); //사용자 입력창
var result = document.querySelector("#result"); //딩동댕 or 땡
var score = 0; //점수 초기값
var displayScore = document.querySelector("#score"); //점수 칸
var count = 10; //10초 초기값
var counter = setInterval(timer, 1000); // 1초마다 timer함수 실행

user.querySelector("#btn").addEventListener("click",compare); //btn 클릭하면 compare함수 실행

function timer(){
    count --; //count 1초씩 줄어듦
    document.querySelector("#count").innerText = `남은 시간 : ${count}`; // count 브라우저에 표시
    if (count < 0) { // 0초 밑으로 내려가면
        clearInterval(counter); // counter 변수 interval 클리어
        alert(`게임 종료. 당신의 점수는 ${score}점 입니다.`);
        document.querySelector("#count").innerText = '게임종료'; // 남은시간 대신 게임종료
        document.querySelector("#answer").disabled = true; // 입력창 입력 못하게
        document.querySelector("#btn").disabled = true; // 버튼 못누르게
    }
}

function compare(event) { 
    event.preventDefault(); //새로고침 방지
    if(word[word.length-1] === answer.value[0]) { // 제시어 마지막 글자랑 입력글자 첫글자 같으면
        result.innerText = "딩동댕"; 
        example.innerText = `제시어 : ${answer.value}`; //제시어 부분에 입력글자 올라감
        word = answer.value; // 제시어에 입력글자 대입
        score += 10; // 점수 10점 추가
        displayScore.innerText = `점수 : ${score}`; //점수칸에 점수 보이게
        answer.value=''; //입력칸 클리어
        count=11; //카운트 다시 10으로 올려줌
    } else {
        result.innerText = "땡";
        answer.value=''; //입력칸 클리어
    }
}