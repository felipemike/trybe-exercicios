import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    loading: true,
    imageUrl: '',
  };

  componentDidMount() {
    const localStorageDog = localStorage.getItem('imageUrl');
    if (localStorageDog) {
      this.setState({
        imageUrl: localStorageDog,
        loading: false,
      });
    } else {
      this.fetchDog();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Essa expressão retorna `true` se a string não contiver `terrier`, e `false`, se contiver.
    return !nextState.imageUrl.includes('terrier');
  }

  componentDidUpdate() {
    const { imageUrl } = this.state;
    localStorage.setItem('imageUrl', imageUrl);

    const bread = imageUrl.split('/')[4];
    alert(bread);
  }

  fetchDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => this.setState({
        imageUrl: data.message,
        loading: false,
      }));
  };

  render() {
    const { loading, imageUrl } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h1>Doguinhos</h1>
        <button
          type="button"
          onClick={ this.fetchDog }
        >
          Novo doguinho!
        </button>
        <div>
          <img src={ imageUrl } alt="Dog" />
        </div>
      </div>

    );
  }
}
export default App;
