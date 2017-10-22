import '../css/main.scss';


const greetings = () => {
 const greetingsList = ['Hello','Salut','Ola','Hey','Ciao'];

 let span = document.getElementById('greetings');

 greetingsList.forEach((word, i) => {
  setTimeout(() => {
      span.innerHTML = '';
      word.split('').forEach((letter, j) => {
        setTimeout(() => span.innerHTML += letter, 200*j);
      });
    }, 2000*i);
 });
}

greetings();
