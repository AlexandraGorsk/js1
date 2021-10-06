const text =
	'JavaScript is the programming language of the Web. The overwhelming majority of modern websites use JavaScript, and all modern web browsers — on desktops, game consoles, tablets, and smart phones —  include JavaScript interpreters, making JavaScript the most ubiquitous programming language in history. JavaScript is part of the triad of technologies that all Web  developers must learn: HTML to specify the content of web pages, CSS to specify the presentation of web pages, and JavaScript to specify the behavior of web pages.';
let sum = 0;
for (let i = 0; i < text.length; i++) {
	if (text[i] === ' ') {
		sum += 1;
	}
}
alert(sum);

let arg = [];
for (let i = 0; i <= 30; i++) {
	arg.push(i);
}
let arg2 = [];

for (j = 0; j < arg.length; j++) {
	if (arg[j] === 2) {
		arg2.push(arg[j]);
	}
	for (g = 2; g < arg[j]; g++) {
		if (arg[j] % g === 0) {
			break;
		}
		if (g === arg[j] - 1) {
			arg2.push(arg[j]);
		}
	}
}
alert(arg2);
