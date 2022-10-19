<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="game">
        <header><h1>Wisielec</h1></header>
        <div id="middle">
            <div class="obraz"><img src="" alt="" id="obraz"></div>
            <h2>Kategoria: <span id="kategoria"></span></h2>
            <div id="haslo" class="haslo"></div>
        </div>

        <dialog id="dialogWygrana">
            <div>
                <h1 id="wygrana"></h1>
                <div><h2>Hasło: <span id="dialogHaslo"></span></h2></div>
                <a href="./">Losuj nowe hasło</a>
            </div>
        </dialog>

        <div class="keyboard">
            <div class="keyboardRow">
                <button class="key" id="KeyQ">Q</button>
                <button class="key" id="KeyW">W</button>
                <button class="unhidden" id="KeyE">E</button>
                <button class="hidden" id="KeyĘ">Ę</button>
                <button class="key" id="KeyR">R</button>
                <button class="key" id="KeyT">T</button>
                <button class="key" id="KeyY">Y</button>
                <button class="key" id="KeyU">U</button>
                <button class="key" id="KeyI">I</button>
                <button class="unhidden" id="KeyO">O</button>
                <button class="hidden" id="KeyÓ">Ó</button>
                <button class="key" id="KeyP">P</button>
            </div> 
            <div class="keyboardRow">
                <button class="unhidden" id="KeyA">A</button>
                <button class="hidden" id="KeyĄ">Ą</button>
                <button class="unhidden" id="KeyS">S</button>
                <button class="hidden" id="KeyŚ">Ś</button>
                <button class="key" id="KeyD">D</button>
                <button class="key" id="KeyF">F</button>
                <button class="key" id="KeyG">G</button>
                <button class="key" id="KeyH">H</button>
                <button class="key" id="KeyJ">J</button>
                <button class="key" id="KeyK">K</button>
                <button class="unhidden" id="KeyL">L</button>
                <button class="hidden" id="KeyŁ">Ł</button>
            </div>
            <div class="keyboardRow">
                <button class="unhidden" id="KeyZ">Z</button>
                <button class="hidden" id="KeyŻ">Ż</button>
                <button class="unhidden" id="KeyX">X</button>
                <button class="hidden" id="KeyŹ">Ź</button>
                <button class="unhidden" id="KeyC">C</button>
                <button class="hidden" id="KeyĆ">Ć</button>
                <button class="key" id="KeyV">V</button>
                <button class="key" id="KeyB">B</button>
                <button class="unhidden" id="KeyN">N</button>
                <button class="hidden" id="KeyŃ">Ń</button>
                <button class="key" id="KeyM">M</button>
                <button class="alt" id="alt">Alt</button>
            </div>
        </div>
    </div>
    <?php 
    $conn = mysqli_connect("localhost", "root", "", "wisielec");
    $result = mysqli_query($conn, "SELECT haslo, kategoria FROM hasla WHERE id=".rand(1,15));
    if($result){
		while($row = mysqli_fetch_array($result)){
			echo "<script> let haslo = '".$row["haslo"]."'; let kategoria = '".$row["kategoria"]."'</script>";
		}
	}
    mysqli_close($conn);
    ?>

    <script src="script.js"></script>
</body>
</html>