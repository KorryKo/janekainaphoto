import React from 'react';
import './card.css';

class Card extends React.Component {
    render() {
        return (
        <div className="card">
            <div className="img-des ">

            </div>
            <div className="content">


                <h1>Описание</h1>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <small className="time-stamp">15.06.2020</small>
            </div>
            <div className="buttons">
                <button className="btn"><i className="material-icons">clear</i></button>
                <button className="btn"><i className="material-icons">check</i></button>
                <button className="btn"><i className="material-icons">create</i></button>
            </div>

        </div>
        )
    }
}

export default Card;