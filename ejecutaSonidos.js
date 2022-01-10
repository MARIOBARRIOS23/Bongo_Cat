
function presionar_tecla() {


    tecla = event.keyCode;

    if (tecla == 65) {
        document.getElementById("bongo0").play();
        visBongo();
        visPaws();
        return;
    }
    if (tecla == 68) {
        document.getElementById("bongo1").play();
        visBongo();
        visPaws();
        return;
    }
    if (tecla == 70) {
        document.getElementById("cowbell").play();
        visCowbell();
        visPaws();
        return;
    }
    if (tecla == 67) {
        document.getElementById("cymball").play();
        visCymbal();
        visPaws();
        return;
    }
    if (tecla == 48) {
        document.getElementById("keyboard0").play();
        visKeyboard();
        visPaws();
        return;
    }
    if (tecla == 49) {
        document.getElementById("keyboard1").play();
        visKeyboard();
        visPaws();
        return;
    }
    if (tecla == 50) {
        document.getElementById("keyboard2").play();
        visKeyboard();
        visPaws();
        return;
    }
    if (tecla == 51) {
        document.getElementById("keyboard3").play();
        visKeyboard();
        visPaws();
        return;
    }
    if (tecla == 52) {
        document.getElementById("keyboard4").play();
        visKeyboard();
        visPaws();
        return;
    }
    if (tecla == 53) {
        document.getElementById("keyboard5").play();
        visKeyboard();
        visPaws();
        return;
    }
    if (tecla == 54) {
        document.getElementById("keyboard6").play();
        visKeyboard();
        visPaws();
        return;
    }
    if (tecla == 55) {
        document.getElementById("keyboard7").play();
        visKeyboard();
        visPaws();
        return;
    }
    if (tecla == 56) {
        document.getElementById("keyboard8").play();
        visKeyboard();
        visPaws();
        return;
    }
    if (tecla == 57) {
        document.getElementById("keyboard9").play();
        visKeyboard();
        visPaws();
        return;
    }
    if (tecla == 81) {
        document.getElementById("marimba0").play();
        visMarimba();
        visPaws();
        return;
    }
    if (tecla == 87) {
        document.getElementById("marimba1").play();
        visMarimba();
        visPaws();
        return;
    }
    if (tecla == 69) {
        document.getElementById("marimba2").play();
        visMarimba();
        visPaws();
        return;
    }
    if (tecla == 82) {
        document.getElementById("marimba3").play();
        visMarimba();
        visPaws();
        return;
    }
    if (tecla == 84) {
        document.getElementById("marimba4").play();
        visMarimba();
        visPaws();
        return;
    }
    if (tecla == 89) {
        document.getElementById("marimba5").play();
        visMarimba();
        visPaws();
        return;
    }
    if (tecla == 85) {
        document.getElementById("marimba6").play();
        visMarimba();
        visPaws();
        return;
    }
    if (tecla == 73) {
        document.getElementById("marimba7").play();
        visMarimba();
        visPaws();
        return;
    }
    if (tecla == 79) {
        document.getElementById("marimba8").play();
        visMarimba();
        visPaws();
        return;
    }
    if (tecla == 80) {
        document.getElementById("marimba9").play();
        visMarimba();
        visPaws();
        return;
    }
    if (tecla == 66) {
        document.getElementById("tambourine").play();
        visTambourine();
        visPaws();
        return;
    }
    if (tecla == 32) {
        document.getElementById("meow").play();
        document.getElementById("mouth").style.display = "block";
        return;
    }

function visBongo() {
    document.getElementById("pawRightUp").style.display = "none";
    document.getElementById("pawRightDown").style.display = "block";
    document.getElementById("imgBongo").style.display = "block";
    document.getElementById("imgCowbell").style.display = "none";
    document.getElementById("imgCymbal").style.display = "none";
    document.getElementById("imgKeyboard").style.display = "none";
    document.getElementById("imgMarimba").style.display = "none";
    document.getElementById("imgTambourine").style.display = "none";
    
}
function visCowbell() {
    document.getElementById("imgBongo").style.display = "none";
    document.getElementById("imgCowbell").style.display = "block";
    document.getElementById("imgCymbal").style.display = "none";
    document.getElementById("imgKeyboard").style.display = "none";
    document.getElementById("imgMarimba").style.display = "none";
    document.getElementById("imgTambourine").style.display = "none";
}
function visCymbal() {
    document.getElementById("imgBongo").style.display = "none";
    document.getElementById("imgCowbell").style.display = "none";
    document.getElementById("imgCymbal").style.display = "block";
    document.getElementById("imgKeyboard").style.display = "none";
    document.getElementById("imgMarimba").style.display = "none";
    document.getElementById("imgTambourine").style.display = "none";
}
function visKeyboard() {
    document.getElementById("imgBongo").style.display = "none";
    document.getElementById("imgCowbell").style.display = "none";
    document.getElementById("imgCymbal").style.display = "none";
    document.getElementById("imgKeyboard").style.display = "block";
    document.getElementById("imgMarimba").style.display = "none";
    document.getElementById("imgTambourine").style.display = "none";
}
function visMarimba() {
    document.getElementById("imgBongo").style.display = "none";
    document.getElementById("imgCowbell").style.display = "none";
    document.getElementById("imgCymbal").style.display = "none";
    document.getElementById("imgKeyboard").style.display = "none";
    document.getElementById("imgMarimba").style.display = "block";
    document.getElementById("imgTambourine").style.display = "none";
}
function visTambourine() {
    document.getElementById("imgBongo").style.display = "none";
    document.getElementById("imgCowbell").style.display = "none";
    document.getElementById("imgCymbal").style.display = "none";
    document.getElementById("imgKeyboard").style.display = "none";
    document.getElementById("imgMarimba").style.display = "none";
    document.getElementById("imgTambourine").style.display = "block";
}

function visPaws() {
    document.getElementById("pawRightUp").style.display = "none";
    document.getElementById("pawRightDown").style.display = "block";
    document.getElementById("pawLeftUp").style.display = "none";
    document.getElementById("pawLeftDown").style.display = "block";
}





}

window.onkeydown = presionar_tecla;
