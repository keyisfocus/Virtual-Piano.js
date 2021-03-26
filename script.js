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
        default:
            console.log("Wrong key");
            break;
    }
});