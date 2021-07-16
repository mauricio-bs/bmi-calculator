const calculate = document.getElementById("calculate")

calculate.addEventListener("click", () => {
	let weight = document.querySelector("#weight").value
	let height = document.querySelector("#height").value

	if (!weight | !height){

	}else{
		const result = weight / (height * height)
		document.querySelector("#result").value = result.toFixed(1)

		result <= 18.5 ?  
		document.querySelector('#status').innerHTML = '<span color="blue">Abaixo do peso</span>' :
		result >= 18.6 && result <= 24.9 ? 
		document.querySelector('#status').innerHTML = '<span color="blue">Peso normal</span>' :
		result >= 25 && result <= 29.9 ?
		document.querySelector('#status').innerHTML = '<span color="blue">Sobrepeso</span>' :
		document.querySelector('#status').innerHTML = '<span color="blue">Obesidade</span>'
	}
})