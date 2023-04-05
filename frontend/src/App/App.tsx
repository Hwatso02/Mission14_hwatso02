import React from 'react';
import './App.css';
import Header from '../Header';
import MovieList from '../movies/MovieList';

function App() {
  return (
    //call functions
    <div className="App">
      <Header slogan="Sit back and enjoy!" />
      <MovieList />
    </div>
  );
}

export default App;
