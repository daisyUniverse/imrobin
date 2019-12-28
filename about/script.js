let textBox = document.getElementById("logo");

setTimeout(showNav, 3500);
setTimeout(deleteText, 1000);

function addText() { // this bit types it out with random delay to simulate typing
	let newText = "Hi, I'm Robin! ★"; // this is where the gay boy goes
  let n = 0;
  function typeNewText() {
  	if (n <= newText.length) {
  		textBox.innerHTML = newText.slice(0, n);
    	n++;
    	setTimeout(typeNewText, Math.floor((Math.random() * 100) + 40));
  	}
  }
  if (n == 0) {
  	typeNewText(); // starts the loop when prev text is thanosed
  }
}

function deleteText() { // deletes the existing text
	let oldText = textBox.innerHTML;
  if (oldText.length > 0) {
  	textBox.innerHTML = oldText.slice(0, oldText.length - 1); //bit by bit
    setTimeout(deleteText, Math.floor((Math.random() * 100) + 40));
  } else if (oldText.length == 0) {
  	addText();
  }
}

function showNav() { // makes sure the nav shows after the animation
	var x = document.getElementById("navtext");
	x.style.display = "block";
  } 

// Code heavily adapted from dcookwebdev on FreeCodeCamp
// original source https://jsfiddle.net/q9tn70uo/1/