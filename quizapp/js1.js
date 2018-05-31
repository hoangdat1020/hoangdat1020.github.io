var cauhoihtai=0;
var diem=0;
var slcauhoi=questions.length;
var khunghinh=document.getElementById('quiz');
var cauhoi=document.getElementById('ask');
var opt1=document.getElementById('opt1');
var opt2=document.getElementById('opt2');
var opt3=document.getElementById('opt3');
var opt4=document.getElementById('opt4');
var nextbt=document.getElementById('nextbutton');
var result=document.getElementById('result');

function loadQuestion(questionIndex){
	var q=questions[questionIndex];
	cauhoi.textContent= (questionIndex+1) +'. '+q.question;
	opt1.textContent=q.option1;
	opt2.textContent=q.option2;
	opt3.textContent=q.option3;
	opt4.textContent=q.option4;
}
function loadNextQuestion(){
	var selected = document.querySelector('input[type=radio]:checked');
	if(!selected){
		alert('Vui long chon dap an ');
		return;
	}
	var answer=selected.value;
	if(questions[cauhoihtai].answer==answer){
		diem+=10;
	}
	selected.checked =false;
	cauhoihtai++;
	if(cauhoihtai==slcauhoi-1){
		nextbt.textContent='Finish';

	}
	if(cauhoihtai==slcauhoi){
		khunghinh.style.display='none';
		result.style.display='';
		result.textContent='Your Score : '+diem;
		return;

	}
	loadQuestion(cauhoihtai);

}
loadQuestion(cauhoihtai);