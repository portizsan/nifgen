require("./json2.js");
var letras = 'TRWAGMYFPDXBNJZSQVHLCKE';

function aleatorio(inferior,superior){ 
   	numPosibilidades = superior - inferior 
   	aleat = Math.random() * numPosibilidades 
   	aleat = Math.round(aleat) 
   	return parseInt(inferior) + aleat 
} 
function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
function gen(){
	var num = aleatorio(0,99999999); 
	var numero = num%23;
	letra= letras.substring(numero,numero+1);
	ale = pad(num, 8);
	return ale+letra;
}
function gens(amount){
	result = new Array();
	for (var i = 0; i < amount; i++){
		result.push(gen());
	}
	return JSON.stringify(result);
}

exports.gen = gen;
exports.gens = gens;