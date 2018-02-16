import React from 'react';

class Typewriter extends React.Component {
  constructor(props) {
    super(props);
    this.typewriter = this.typewriter.bind(this);
    // If you don’t use something in render, it shouldn’t be in the state.
    this.delay = 200;
    this.words = ['HELLO,', 'SALUT,', 'OLA,', 'HEY,', 'CIAO,', 'YIASSOO,'];
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


      this.writeWord(word)
        .then(() => repeat(nextWord))
        .catch(err => console.log(err));
    };

    repeat(0);
  }

  writeWord2(word) {
    return new Promise((resolve) => {
      const charsToAdd = word.map((char, i) => this.writeChar(char, i));

      Promise.all(charsToAdd)
        .then(() => {
          const charsToDelete = word.slice().reverse().map((char, i) => this.deleteChar(char, i));
          Promise.all(charsToDelete)
            .then(() => resolve());
        })
        .catch(err => console.log(err));
    });
  }

  writeWord(word) {
    const charsToAdd = word.map((char, i) => this.writeChar(char, i));

    return Promise.all(charsToAdd)
      .then(() => {
        const charsToDelete = word.slice().reverse().map((char, i) => this.deleteChar(char, i));
        return Promise.all(charsToDelete);
      })
      .catch(err => console.log(err));
  }

  writeChar(char, i) {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(this.setState(state => ({ text: state.text + char }))),
        this.delay * (i + 1),
      );
    });
  }

  deleteChar(char, i) {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(this.setState(state => (
          { text: state.text.slice(0, (state.text.length - 1)) }
        ))),
        (this.delay / 2) * (i + 1),
      );
    });
  }

  render() {
    return (
      <span className="greeting__wrap">{this.state.text}</span>
    );
  }
}

export default Typewriter;
