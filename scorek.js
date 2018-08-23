var p1b = document.querySelector("#p1");
var p2b = document.getElementById("p2");
var resetbtn = document.getElementById("reset");
var numInput = document.querySelector("input[type= 'number']");
var para = document.querySelector("p span");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var gameOver = false;
var winScore = 5;

var p1score = 0;
var p2score = 0;



p1b.addEventListener("click",function(){
	if(!gameOver){
		p1score++;
		if (p1score === winScore) {
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1score;
	}
});

p2b.addEventListener("click",function(){
if(!gameOver){
		p2score++;
		if (p2score === winScore) {
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2score;
	}
});

resetbtn.addEventListener("click", reset());

function reset(){
		p1score=0;
	p2score=0;
	p1Display.textContent = p1score;
	p2Display.textContent = p2score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver= false;
}

numInput.addEventListener("change", function(){
para.textContent = this.value;
winScore=Number(this.value);
reset();
});