//your JS code here. If required.
const inputElem = document.getElementById('text');
const delayElem = document.getElementById('delay');
const outputDiv = document.getElementById('output');
const button = document.getElementById('btn');

button.addEventListener('click', (e)=>{
	console.log(inputElem.value);
	e.preventDefault();
	setTimeout(async () => {
		const pTag = document.createElement('p');
		pTag.innerText =  inputElem.value;
		outputDiv.append(pTag);
    console.log(outputDiv);
	}, delayElem.innerText);
})