//your JS code here. If required.
const inputElem = document.getElementById('text');
const delayElem = document.getElementById('delay');
const outputDiv = document.getElementById('output');
const button = document.getElementById('btn');

button.addEventListener('click', (e)=>{
	console.log(inputElem.value);
	e.preventDefault();
	setTimeout(async () => {
		outputDiv.innerText = await inputElem.value;
         console.log(outputDiv);
	}, delayElem.innerText);
})