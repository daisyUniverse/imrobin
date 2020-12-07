// Make the DIV element draggable:
document.getElementById("cin")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        command = document.getElementById("cin").value;
        commandHandler(command);
        document.getElementById("cin").value = "";
    }
});

var cheats = false;
dragElement(document.getElementById("console"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

notallowed = ["I'm afraid I can't let you do that, Dave",
              "No.",
              "You aren't allowed to do that right now",
              "What the fuck are you trying to do. Get out of here",
              "I'd really like to. I would! but I won't.",
              "How do you know this but not know what you need to do first?"]

helpmessages = ["as far as help goes, there is no help",
                "Sorry. not gonna be that easy",
                "Just look at the source code like everyone else",
                "Oh uh. Nah.",
                "Consider therapy",
                "with what? finding your inner peace?",
                "I like that that's the first thing you do",
                "I can't help you, but I do want you to know that codie's pretty radical",
                "do I LOOK like the kind of person that would write documentation?"]

function commandHandler(input){
    // If you're coming here to see what commands exist, do you really gotta be like that tho
    cmd = input.toLowerCase();
    switch (cmd) {
        case 'about':
            commandLogger("This is a console created by Robin Universe");
            break;
        case 'exit':
            commandLogger("no.")
            break;
        case 'help':
            commandLogger(helpmessages[Math.floor(Math.random() * helpmessages.length)])
            break;
        case 'sv_cheats 0':
            commandLogger("welcome back to mortality")
            cheats = false;
            break;
        case 'sv_cheats 1':
            commandLogger("fine. but you better not crash the game, that mp4 in the bg.")
            cheats = true;
            break;
        case 'impulse 101':
            if (cheats == true) {
                commandLogger("Here's your uh, guns. I guess.")
                var audio = new Audio('https://wiki.teamfortress.com/w/images/e/e9/Grenade_launcher_drum_close.wav');
                audio.play()
                break;
            } else {
                commandLogger(notallowed[Math.floor(Math.random() * notallowed.length)])
                break;
            }
        case 'noclip':
            if (cheats == true) {
                commandLogger("Fly me to the moon")
                break;
            } else {
                commandLogger(notallowed[Math.floor(Math.random() * notallowed.length)])
                break;
            }
        case 'notarget':
            if (cheats == true) {
                commandLogger("Fine, I'll make it so the fairies ignore you, I guess.")
                var vid = document.getElementById("videobcg");
                vid.pause();
                break;
            } else {
                commandLogger(notallowed[Math.floor(Math.random() * notallowed.length)])
                break;
            }
        case 'clear':
            document.getElementById("consolelog").innerHTML = ""
            break;
        default:
            commandLogger("] " + input)
    }
}

function commandLogger(input){
    document.getElementById("consolelog").innerHTML += ( "</br>" + input);
}

