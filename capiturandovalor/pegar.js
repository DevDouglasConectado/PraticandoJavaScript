var capturando = "";
function capturar () {
    capturando = document.getElementById('valor').value;
    document.getElementById('valorDigitado').innerHTML = capturando;
}
/*

            <input type="text" id=valor>
            <input type="submit" onclick="capturar()" value="escreva algo">
            <p id="valorDigitado"></p>
*/ 