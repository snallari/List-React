import React from 'react';
import './App.css';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import JokeList from './components/actuals/jokes/jokelist';

function App() {
  return (
    <div>
      <Header />
      <JokeList />
      <Footer />
    </div>
  );
}

export default App;
