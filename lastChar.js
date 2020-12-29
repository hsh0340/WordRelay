var firstChar = document.createElement('div');
firstChar.innerText = '승하';
document.body.append(firstChar);
// 첫번째 단어 주어짐

var 폼 = document.createElement('form');
document.body.append(폼);

var answer = document.createElement('input');
폼.append(answer);
//입력창

var btn = document.createElement('button');
btn.textContent = '입력!';
폼.append(btn);
//버튼

var result = document.createElement('div');
document.body.append(result);
//결과창

폼.addEventListener('click', function(event) {
    event.preventDefault();
    if (firstChar.textContent[firstChar.textContent.length-1] === answer.value[0]) {
        result.textContent = '딩동댕';
        firstChar.textContent = answer.value;
        answer.value='';
        answer.focus();
    } else {
        result.textContent = '땡';
        answer.value='';
        answer.focus();
    }
});

