import React from 'react';
import './menu.css';

class Menu extends React.Component {

    change() { 
        document.querySelector(".button-burger").classList.toggle("change")
        document.querySelector(".menu").classList.toggle("show-menu")  
    }

    render() {
        return (

           <div>

            <div className="button-burger" onClick={this.change}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>

            <header className="menu">
       
            <nav>
                <ul>
                    <li><a href="#">Домашняя страница</a></li>
                    <li><a href="#">Добавить фото</a></li>
                    <li><a href="#">Изменить прайс</a></li>
                    <li><a href="#">Добавить акции</a></li>
                </ul>
            </nav>
    
        </header>
           </div>
        )
    }
}



export default Menu;