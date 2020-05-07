let textBox = document.getElementById("logo");

setTimeout(showNav, 3500);
setTimeout(deleteText, 1000);

var lastPage = document.referrer // debug thing
var typeSpeed = 80
var introText = "hirob.in" 

if (lastPage.startsWith("https://hirob.in/")){ // Checks the last page for a smoother text transition
	var prevPage = lastPage.replace("https://hirob.in/","").replace("/","");
	if (prevPage == "contact"){
		var introText = "Wanna talk? 📱";
		textBox.innerHTML = introText
	}
	else if (prevPage == "about"){
		var introText = "Heres the deets ٩( ᐛ )و";
		textBox.innerHTML = introText
	} 

	else if (prevPage == "portfolio"){
		var introText = "I make stuff!! ✨";
		textBox.innerHTML = introText
	} 

	else if (prevPage == ""){
		var introText = "Hi, I'm Robin! ★";
		textBox.innerHTML = introText
	}
}

function addText() { // this bit types it out with random delay to simulate typing
	let newText = textBox.getAttribute('animationText'); // "Hi, I'm Robin! ★"; // this is where the gay boy goes
  let n = 0;
  function typeNewText() {
  	if (n <= newText.length) {
  		textBox.innerHTML = newText.slice(0, n);
    	n++;
    	setTimeout(typeNewText, Math.floor((Math.random() * typeSpeed) + (typeSpeed * .5)));
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
    setTimeout(deleteText, Math.floor((Math.random() * typeSpeed) + (typeSpeed * .5)));
  } else if (oldText.length == 0) {
  	addText();
  }
}

function showNav() { // makes sure the nav shows after the animation
	var x = document.getElementById("navtextintro");
	x.style.display = "block";
  } 

// Code heavily adapted from dcookwebdev on FreeCodeCamp
// original source https://jsfiddle.net/q9tn70uo/1/