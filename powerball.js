function whiteSelect() {
    let computerHand = Math.floor(Math.random() * 69 + 1);
    return computerHand;
}

function goldSelect() {
    let computerHand = Math.floor(Math.random() * 26 + 1)
    return computerHand;
}
let whiteBalls = [];
function pickEm() {
    for (i = 0; i < 6; i++) {
        whiteBall = whiteSelect();
        whiteBalls.push(whiteBall);
    };
}



document.querySelector("button").addEventListener("click", myFunction);
function myFunction() {
    pickEm();
    let output = "White Balls: " + whiteBalls + "  Gold Ball:" + goldSelect();
    document.getElementById("numbers").innerHTML = "";
    document.getElementById("numbers").innerHTML = output;
    whiteBalls=[];
};
