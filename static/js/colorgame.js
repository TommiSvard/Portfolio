var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquare();
	reset();
}

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
 }
}

function setUpSquare(){
	for(var i = 0; i < squares.length; i++){

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		// grab color of clicked square 
		var clickedColor = this.style.backgroundColor
		
		// compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct"
			resetButton.textContent = "Play again?"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.background = "#232323"
			messageDisplay.textContent = "Try Again"
		}
	});
 }
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";

	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
		   squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "steelblue"
}

resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	//loop through all squares

	for(i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	// add num random colors to array
	for(var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor())
		
	}
	//return array
	return arr;
}

function randomColor(){
	//pick a red from 0-255
	var red = Math.floor(Math.random() * 256);
	//pick green from 0-255
	var green = Math.floor(Math.random() * 256);
	//pick green from 0-255
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}