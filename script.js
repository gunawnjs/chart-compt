const bars = document.querySelector('.bars');
console.log(bars);

fetch('./data.json').then((res)=>{
	return res.json();
}).then((jsonData) => {
	for(const data of jsonData){
		const days = data.day;
		const amount = data.amount;
		const list = document.createElement('li');
		const bar = document.createElement('div');
		const span = document.createElement('span');
		
		span.innerText = days

		bar.classList.add('bar')
		bar.style.height = amount * 2 + '%'

		list.append(bar, span);
		bars.append(list);

		console.log(list);
	}
});


