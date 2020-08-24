import React from 'react';
import CardList from '../src/Components/CardList/cardList'
import Card from './Components/Card/card';
import Menu from './Components/menu/menu'

const cards = [
  Card, Card, Card, Card, Card
]

class App extends React.Component {
  render() { 
    return (
    <div className="App">
      <Menu />
      <CardList cards={cards} /> 


    </div>
  );
  }
}

export default App;
