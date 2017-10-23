const delay = 200;

const write = (el, text, i, next) => {
	if (i <= text.length) {
		el.innerHTML = text.substring(0, i);
		setTimeout(() => { write(el, text, i + 1, next) }, delay);
	} else {
    setTimeout(()=> next(), delay*3);
	}
}

const erase = (el, text, i, next) => {
	if (i > -1) {
		el.innerHTML = text.substring(0, i);
		setTimeout(() => { erase(el, text, i - 1, next) }, delay/2);
	} else {
		next();
	}
}

const typewrite = () => {
	const wordsList =  ['HELLO,','SALUT,','OLA,','HEY,','CIAO,'];
	const span = document.getElementById('greetings');

  const repeat = (i) => {
		const word = wordsList[i]
		const nextWord = (i + 1) % wordsList.length;
		write( span, word, 0, () => erase(span, word, word.length, () => repeat(nextWord) ) );
	}

	repeat(0);
}

typewrite();

module.exports = typewrite;
