function operacao() {
	if (document.getElementById("operacoes").value == "") {
		alert("Por favor selecione uma opeção");
	} else if (document.getElementById("operacoes").value == "+") {
		somar();
	} else if (document.getElementById("operacoes").value == "-") {
		subtrair();
	} else if (document.getElementById("operacoes").value == "/") {
		dividir();
	} else if (document.getElementById("operacoes").value == "*") {
		multiplicar();
	} else if (document.getElementById("operacoes").value == "**") {
		potencia();
	} else {
		resto();
	}
}

function somar() {
	let value1 = document.getElementById("x").value;
	let value2 = document.getElementById("y").value;
	let result = parseFloat(value1) + parseFloat(value2);
	document.getElementById("result").value = result;
}

function subtrair() {
	let value1 = document.getElementById("x").value;
	let value2 = document.getElementById("y").value;
	let result = parseFloat(value1) - parseFloat(value2);
	document.getElementById("result").value = result;
}

function dividir() {
	let value1 = document.getElementById("x").value;
	let value2 = document.getElementById("y").value;
	let result = parseFloat(value1) / parseFloat(value2);
	document.getElementById("result").value = result;
}

function multiplicar() {
	let value1 = document.getElementById("x").value;
	let value2 = document.getElementById("y").value;
	let result = parseFloat(value1) * parseFloat(value2);
	document.getElementById("result").value = result;
}

function potencia() {
	let value1 = document.getElementById("x").value;
	let value2 = document.getElementById("y").value;
	let result = parseFloat(value1) ** parseFloat(value2);
	document.getElementById("result").value = result;
}

function resto() {
	let value1 = document.getElementById("x").value;
	let value2 = document.getElementById("y").value;
	let result = parseFloat(value1) % parseFloat(value2);
	document.getElementById("result").value = result;
}