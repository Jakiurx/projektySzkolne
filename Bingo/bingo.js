//GLOBAL VARIABLES
let arr = [];                                                                                   //array of numbers
let bitmap = [[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0]]; //bitmap
let auto = 0;
var autos = false;
var dis = true;
var speakerBool = true;

//TEXT TO SPEECH
let speech = new SpeechSynthesisUtterance();
speech.lang = "pl";

function win(){
    document.getElementById("end").innerHTML = "Wygrałeś";
    document.getElementById("image").style.display = "block";
    document.getElementById("table").style.display = "none";
}

function check(i, j) {
    if (!bitmap[i].includes(0)) win();         //rows
    else if (bitmap[0][j] == 1 && bitmap[1][j] == 1 && bitmap[2][j] == 1 && bitmap[3][j] == 1 && bitmap[4][j] == 1) win();         //cols
    //cross
    if (bitmap[2][2]){
        if (bitmap[0][0] == 1 && bitmap[1][1] == 1 && bitmap[3][3] == 1 && bitmap[4][4] == 1) win();
        else if (bitmap[0][4] == 1 && bitmap[1][3] == 1 && bitmap[3][1] == 1 && bitmap[4][0] == 1) win();
     }
    }

function mark(nr) {
    let num = parseInt(document.getElementById("cell" + nr).innerHTML)
    if (arr.includes(num)) {
        let x = Math.floor(nr / 5);
        let y = nr % 5;
           if (bitmap[x][y] != 1) {
            bitmap[x][y] = 1;
            document.getElementById("cell" + nr).style.backgroundColor = "#fe6039";
        }
        else {
            bitmap[x][y] = 0;
            document.getElementById("cell" + nr).style.backgroundColor = "#f1c936";
        }
        check(x, y);
    }
}

function start() {
    clr();
    for (let i = 0; i <= 24; i++) document.getElementById("cell" + i).innerHTML = random_number();
    arr = [];
    document.getElementById("drawButton").disabled = false;
    document.getElementById("autodrawButton").disabled = false;
}

function draw() {
    let randomNumber = random_number();
    document.getElementById("ball1").innerHTML = randomNumber;
    speaking(randomNumber);
    if (arr.length > 1) document.getElementById("results").innerHTML = "<div class=sball>" + arr[arr.length - 2] + "</div>" + document.getElementById("results").innerHTML
}

function random_number() {
    let a = Math.floor(Math.random() * 75 + 1)
    if (!arr.includes(a)) {
        arr.push(a);
        return a;
    }
    else return random_number();
}
    
function clr() {
    arr = [];
    for (let i = 0; i <= 24; i++) document.getElementById("cell" + i).style.backgroundColor = "#f1c936"
    document.getElementById("ball1").innerHTML = "";
    document.getElementById("results").innerHTML = "";
    document.getElementById("table").style.display = "block";
    document.getElementById("image").style.display = "none";
    bitmap = [[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0]]; //bitmap
    document.getElementById("end").innerHTML = "Twoje liczby";
}

function autoDraw(){
    dis = !dis;
    if(dis) document.getElementById("drawButton").disabled = false;
    else document.getElementById("drawButton").disabled = true;
    auto = !auto;
    if(auto) autos = window.setInterval(draw,2000);
    else clearInterval(autos);
}

function speaking(x){
    if(speakerBool){
    speech.text = x;
    window.speechSynthesis.speak(speech)
    }
}

function changeSpeaking(){
    if(speakerBool) document.getElementById("speaker").src = "speaker_off.png";
    else document.getElementById("speaker").src = "speaker_on.png";
    speakerBool = !speakerBool
}


