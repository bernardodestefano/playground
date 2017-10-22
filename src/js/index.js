import '../css/main.scss';

const delay = 200;

const scrivi = (el, text, i, next) => {
  if (i <= text.length) {
    el.innerHTML = text.substring(0, i);
    setTimeout(() => { scrivi(el, text, i + 1, next) }, delay);
  } else {
    next();
  }
}

const cancella = (el, text, i, next) => {
  if (i > -1) {
    el.innerHTML = text.substring(0, i);
    setTimeout(() => { cancella(el, text, i - 1, next) }, delay/2);
  } else {
    next();
  }
}

const saluta = () => {
  const listWord =  ['Hello','Salut','Ola','Hey','Ciao'];
  const span = document.getElementById('greetings');
  const repeat = (i) => {
    const word = listWord[i]
    const nextWord = (i + 1) % listWord.length;
    scrivi(
      span,
      word,
      0,
      () => cancella(span, word, word.length, () => repeat(nextWord))
    );
  }

  repeat(0);
}

saluta();

