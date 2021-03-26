document.addEventListener("keypress", function (e) {
    let audio;
    switch (e.code) {
        case "KeyA":
            console.log("The 'A' key is pressed.");
            audio = new Audio("A.mp3");
            audio.play();
            break;
        case "KeyS":
            console.log("The 'S' key is pressed.");
            audio = new Audio("S.mp3");
            audio.play();
            break;
        case "KeyD":
            console.log("The 'D' key is pressed.");
            audio = new Audio("D.mp3");
            audio.play();
            break;
        case "KeyF":
            console.log("The 'F' key is pressed.");
            audio = new Audio("F.mp3");
            audio.play();
            break;
        case "KeyG":
            console.log("The 'G' key is pressed.");
            audio = new Audio("G.mp3");
            audio.play();
            break;
        case "KeyH":
            console.log("The 'H' key is pressed.");
            audio = new Audio("H.mp3");
            audio.play();
            break;
        case "KeyJ":
            console.log("The 'J' key is pressed.");
            audio = new Audio("J.mp3");
            audio.play();
            break;
        case "KeyW":
            console.log("The 'W' key is pressed.");
            audio = new Audio("W.mp3");
            audio.play();
            break;
        case "KeyE":
            console.log("The 'E' key is pressed.");
            audio = new Audio("E.mp3");
            audio.play();
            break;
        case "KeyT":
            console.log("The 'T' key is pressed.");
            audio = new Audio("T.mp3");
            audio.play();
            break;
        case "KeyY":
            console.log("The 'Y' key is pressed.");
            audio = new Audio("Y.mp3");
            audio.play();
            break;
        case "KeyU":
            console.log("The 'U' key is pressed.");
            audio = new Audio("U.mp3");
            audio.play();
            break;
        default:
            console.log("Wrong key");
            break;
    }
});