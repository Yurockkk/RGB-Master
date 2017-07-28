
var numSquares = 6;
var colors = generateRandomNumber(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");

	//generate all new color 
	numSquares = 3;
	colors = generateRandomNumber(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay
	colorDisplay.textContent = pickedColor;
	//change the colors of square
	for(var i = 0 ; i < squares.length; i++){

		//add initail color to squares
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];

		}else{
			squares[i].style.display = "none";

		}

	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";


});

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");

	numSquares = 6;
	//generate all new color 
	colors = generateRandomNumber(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay
	colorDisplay.textContent = pickedColor;
	//change the colors of square

	for(var i = 0 ; i < squares.length; i++){

		//add initail color to squares
		
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";

	}

	h1.style.backgroundColor = "black";
	messageDisplay.textContent = "";



});
 
resetBtn.addEventListener("click",function(){
	//generate all new color 
	colors = generateRandomNumber(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay
	colorDisplay.textContent = pickedColor;
	//change the colors of square
	for(var i = 0 ; i < squares.length; i++){

	//add initail color to squares
	squares[i].style.backgroundColor = colors[i];
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetBtn.textContent = "New Colors"
}


});
colorDisplay.textContent = pickedColor;

for(var i = 0 ; i < squares.length; i++){

	//add initail color to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listener to squares
	squares[i].addEventListener("click", function(event){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!"
			changeColor(pickedColor);
			h1.style.backgroundColor = pickedColor;
			resetBtn.textContent = "Play Again?"
		}else{
			this.style.backgroundColor = "black";
			messageDisplay.textContent = "Try Again!"
			resetBtn.textContent = "New Colors"

		}
	});
}

function changeColor(color){
	for(var i = 0 ; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomNumber(num){
	//make an array
	var arr = [];
	//add random colors to array
	for(var i = 0 ; i < num; i++){
		arr.push(randomColor());
	}
	//return the array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 to 255
	var b = Math.floor(Math.random() * 256);
	//format to "rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

