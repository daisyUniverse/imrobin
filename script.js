let textBox = document.getElementById("logo");

setTimeout(showNav, 3500);
setTimeout(deleteText, 1000);

function addText() {
	let newText = "Hi, I'm Robin! ★";
  let n = 0;
  function typeNewText() {
  	if (n <= newText.length) {
  		textBox.innerHTML = newText.slice(0, n);
    	n++;
    	setTimeout(typeNewText, Math.floor((Math.random() * 100) + 40));
  	}
  }
  if (n == 0) {
  	typeNewText();
  }
}

function deleteText() {
	let oldText = textBox.innerHTML;
  if (oldText.length > 0) {
  	textBox.innerHTML = oldText.slice(0, oldText.length - 1);
    setTimeout(deleteText, Math.floor((Math.random() * 100) + 40));
  } else if (oldText.length == 0) {
  	addText();
  }
}

function showNav() {
	var x = document.getElementById("navtext");
	x.style.display = "block";
  } 

// Code heavily adapted from dcookwebdev on FreeCodeCamp
// original source https://jsfiddle.net/q9tn70uo/1/