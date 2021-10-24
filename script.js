// //1
// const text =
// 	'JavaScript is the programming language of the Web. The overwhelming majority of modern websites use JavaScript, and all modern web browsers — on desktops, game consoles, tablets, and smart phones —  include JavaScript interpreters, making JavaScript the most ubiquitous programming language in history. JavaScript is part of the triad of technologies that all Web  developers must learn: HTML to specify the content of web pages, CSS to specify the presentation of web pages, and JavaScript to specify the behavior of web pages.';
// // let sum = 0;
// // for (let i = 0; i < text.length; i++) {
// // 	if (text[i] === ' ') {
// // 		sum += 1;
// // 	}
// // }
// alert(text.split(' ').length - 1);
// //2
// let array = [];
// for (let arrayNum = 0; arrayNum <= 30; arrayNum++) {
// 	array.push(arrayNum);
// }
// console.log(array);
// let primes = [];

// for (index = 0; index < array.length; index++) {
// 	if (array[index] === 2) {
// 		primes.push(array[index]);
// 	}
// 	for (divider = 2; divider < array[index]; divider++) {
// 		if (array[index] % divider === 0) {
// 			break;
// 		}
// 		if (divider === array[index] - 1) {
// 			primes.push(array[index]);
// 		}
// 	}
// }
// alert(primes);
//3
let tab = function () {
	let tabs = document.querySelectorAll('.tabs-nav_item');
	let content = document.querySelectorAll('.tab');

	tabs.forEach((item) => item.addEventListener('click', tabClick));

	function tabClick(event) {
		let tabId = event.target.getAttribute('id');
		tabs.forEach((item, index) => {
			item.classList.remove('is-active');
			content[index].classList.remove('is-active');
		});
		tabs[tabId - 1].classList.add('is-active');
		content[tabId - 1].classList.add('is-active');
	}
};
tab();
