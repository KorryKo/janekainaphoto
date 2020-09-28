import React from 'react';
import CardList from '../src/Components/CardList/cardList';
import Card from './Components/Card/card';
import Menu from './Components/menu/menu';
import Gallery from "./Components/Gallery/gallery";

const cards = [
  Card, Card, Card, Card, Card
]

class App extends React.Component {
  render() { 
    return (
    // <Gallery />
        <Menu />,
        <CardList />
  );
  }
}

export default App;
