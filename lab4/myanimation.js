"use strict";

window.onload = function () {
    document.getElementById("stop").disabled = true;
    document.getElementById("start").onclick = beginAnimation;
    document.getElementById("fontsize").onchange = reSize;
}

let timer;
let index = 0;
let animModel;
let arrModel;

function beginAnimation() {
    const animField = document.getElementById("animation");
    const optionSelected = animField.options[animField.selectedIndex].value;
    document.getElementById("text-area").value = ANIMATIONS[optionSelected];
    // animModel= ANIMATIONS[optionSelected];
    // arrModel = animModel.split("=====\n");
    // timer = setInterval(repeatAnimation,500);
    document.getElementById("start").disabled = ture;
    document.getElementById("stop").disabled = false;
}


function reSize() {
    const sizeField = document.getElementById("fontsize");
    const sizeSelected = sizeField.options[sizeField.selectedIndex].value;
    document.getElementById("text-area").style.fontSize = sizeSelected;
}

function repeatAnimation() {
    index = index % arrModel.length
    document.getElementById("text-area").value = arrModel[index];
    index++;
}
