const hasla = ["MAX","VERSTAPPEN"]
const haslo = hasla[Math.floor(Math.random() * hasla.length)]
const uzyteLitery = []
let altBool, scriptOFF = false
//document.getElementById("kategoria").innerText = kategoria
document.getElementById("dialogHaslo").innerText = haslo

let hp = 12
usunHP()

{
    let licznik = 0
    for(x of haslo){
        let div = document.createElement("div")
        div.id = `haslo${licznik}`
        div.classList += "hasloLetter"
        document.getElementById("haslo").appendChild(div)
        licznik++;
    }
}

{
    document.getElementById('alt').addEventListener("click",alt)
    let keys = document.querySelectorAll('.key')
    for(x of keys){
        x.addEventListener("click", (element) => {
            if(scriptOFF) return
            element = element.srcElement
            let litera = element.innerText
            if(uzyteLitery.includes(litera)) return
            uzyteLitery.push(litera)
            sprawdzLitere(litera, element)
        })
    }
    let keysHidden = document.querySelectorAll('.hidden')
    for(x of keysHidden){
        x.addEventListener("click", (element) => {
            if(scriptOFF) return
            element = element.srcElement
            let litera = element.innerText
            if(uzyteLitery.includes(litera)) return
            uzyteLitery.push(litera)
            sprawdzLitere(litera, element)
        })
    }
    let keysUnhidden = document.querySelectorAll('.unhidden')
    for(x of keysUnhidden){
        x.addEventListener("click", (element) => {
            if(scriptOFF) return
            element = element.srcElement
            let litera = element.innerText
            if(uzyteLitery.includes(litera)) return
            uzyteLitery.push(litera)
            sprawdzLitere(litera, element)
        })
    }
}

window.addEventListener("keydown", keyboardListener)

function keyboardListener(event) {
    if(scriptOFF) return
    if(event.keyCode == 18) return alt()
    if(event.keyCode == 17) return
    let key = event.code
    let litera = (altBool) ?  (altKey(event) !== null) ? altKey(event) : false : event.key.toUpperCase()
    if(!litera) return alt()
    if(!/^Key/.test(key)) return
    if(uzyteLitery.includes(litera)) return
    uzyteLitery.push(litera)
    sprawdzLitere(litera, document.getElementById("Key"+litera))
}

function altKey(a){
    switch(a.code){
        case "KeyA": return "Ą"
        case "KeyC": return "Ć"
        case "KeyE": return "Ę"
        case "KeyL": return "Ł"
        case "KeyO": return "Ó"
        case "KeyN": return "Ń"
        case "KeyS": return "Ś"
        case "KeyX": return "Ź"
        case "KeyZ": return "Ż"
        default: return null
    }
}

function sprawdzLitere(litera, klawisz){
    let trafione = false
    for(j = 0; j < haslo.length; j++){
        if(litera == haslo[j]){
            document.getElementById(`haslo${j}`).innerText = litera
            trafione = true
        }
    }
    if(!trafione){
        klawisz.style = "background:red; border-color: black; color: darkred;"
        usunHP()
    }else klawisz.style = "background:green; border-color: black; color: darkgreen;"
    sprawdzWin()
}


function sprawdzWin(){
    for(j = 0; j < haslo.length; j++){
        if(document.getElementById(`haslo${j}`).innerText == "") return
    }
    window.removeEventListener("keydown", keyboardListener)
    document.getElementById('wygrana').innerText = "Wygrałeś!!!"
    document.getElementById('dialogWygrana').open = true
}

function usunHP(){
    if(scriptOFF) return
    hp--
    document.getElementById("obraz").src = `obraz${hp+1}.png`
    if(hp == 0){
        window.removeEventListener("keydown", keyboardListener)
        document.getElementById('wygrana').innerText = "Przegrałeś!!!"
        document.getElementById('dialogWygrana').open = true
        scriptOFF = true;
    }
}

function alt(){
    if(scriptOFF) return
    altBool = !altBool
    const literyAltTrue = (altBool) ? ["KeyA","KeyC","KeyE","KeyL","KeyO","KeyN","KeyS","KeyX","KeyZ"] : ["KeyĄ","KeyĆ","KeyĘ","KeyŁ","KeyÓ","KeyŃ","KeyŚ","KeyŹ","KeyŻ"]
    const literyAltFalse = (altBool) ? ["KeyĄ","KeyĆ","KeyĘ","KeyŁ","KeyÓ","KeyŃ","KeyŚ","KeyŹ","KeyŻ"] : ["KeyA","KeyC","KeyE","KeyL","KeyO","KeyN","KeyS","KeyX","KeyZ"]
    for(elem of literyAltFalse){
        document.getElementById(elem).classList = "unhidden";
    }
    for(elem of literyAltTrue){
        document.getElementById(elem).classList = "hidden";
    }
    let keys = document.querySelectorAll('.key')
    for(x of keys){
        x.disabled = altBool
    }
    document.getElementById("alt").classList = (altBool) ? "alt active" : "alt";
}