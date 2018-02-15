import React from 'react';

class Typewriter extends React.Component {
  constructor(props) {
    super(props);
    this.typewriter = this.typewriter.bind(this);
    // If you don’t use something in render, it shouldn’t be in the state.
    this.delay = 400;
    this.words = ['HELLO,', 'SALUT,', 'OLA,', 'HEY,', 'CIAO,'];
    this.state = {
      text: '',
    };
  }

  componentDidMount() {
    this.typewriter();
  }

  typewriter() {
    const repeat = (i) => {
      const word = this.words[i].split('');
      const nextWord = (i + 1) % this.words.length;
      
      // this.writeWord(word, () => repeat(nextWord));
      this.writeWord(word)
        .then(() => console.log('fulfilled!'))
        .catch(err => console.log(err));
    };

    repeat(0);
  }

  writeWord(word) {
    return new Promise((resolve) => {
      resolve(word.map((char, i) => setTimeout(() => this.writeChar(char), this.delay * (i + 1))));
    });
  }

  writeChar(char) {
    this.setState(state => ({ text: state.text + char }));
  }

  deleteChar(char) {
    this.setState(state => ({ text: state.text - char }));
  }

  render() {
    return (
      <span className="greeting__wrap">{this.state.text}</span>
    );
  }
}

export default Typewriter;
