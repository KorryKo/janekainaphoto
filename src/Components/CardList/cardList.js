import React from 'react';
import Card from '../Card/card';

class CardList extends React.Component {
    render() {
        return (
<div className="CardList">
    {
    this.props.cards.map((Card) => {
        return <Card />;
    })  
  }


  
</div>
        )
    }
}

export default CardList;