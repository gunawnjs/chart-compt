const bars = document.querySelector('.bars');
// console.log(bars);

const arr = [];
const numbers = [];

fetch('./data.json').then((res)=>{
	return res.json();
}).then((jsonData) => {
	for(const data of jsonData){
	
		const days = data.day;
		const amount = data.amount;
		const list = document.createElement('li');
		const bar = document.createElement('div');
		const dd = document.createElement('span');
		const stats = document.createElement('span');
		
		dd.innerText = days
		stats.innerText = amount

		bar.classList.add('bar')
		dd.classList.add('days')
		stats.classList.add('stats')

		const barHeight = amount * 2;
		bar.style.height = barHeight + '%';
		bar.setAttribute('data-amount', '$' + amount);

		list.append(bar, dd);
		bars.append(list);

		arr.push(bar);

		const dataAttr = bar.dataset.amount;
		const number = dataAttr.substring(1);

		numbers.push(number)
		console.log(bars)

	}
	const max = '$' + Math.max(...numbers);
	const charWithHighestAmount = arr.find(el => el.dataset.amount === max)

	charWithHighestAmount.classList.add('max')

});