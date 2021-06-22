 function AboutShown(){
    document.getElementById("About").style.visibility = "visible";
    document.getElementById('videobcg').style.filter = 'blur(15px)';
}

function AboutHide(){
    document.getElementById("About").style.visibility = "hidden";
    document.getElementById('videobcg').style.filter = 'blur(0px)';
}

function consoleShow(){
    document.getElementById("console").style.visibility = "visible";
    document.getElementById("consoleheader").style.visibility = "visible";
    document.getElementById("consolelog").style.visibility = "visible";
    document.getElementById("consoleinput").style.visibility = "visible";
    document.getElementById("consoleinputbutton").style.visibility = "visible";
}

function consoleHide(){
    document.getElementById("console").style.visibility = "hidden";
    document.getElementById("consoleheader").style.visibility = "hidden";
    document.getElementById("consolelog").style.visibility = "hidden";
    document.getElementById("consoleinput").style.visibility = "hidden";
    document.getElementById("consoleinputbutton").style.visibility = "hidden";
}

var consoleIsHidden = true;

document.addEventListener("keypress", function(event) {
    if (event.key == '`') {
      if (consoleIsHidden == true){
        consoleShow();
        consoleIsHidden = false;
      } else {
        consoleHide();
        consoleIsHidden = true;
      }
    }
  });

  