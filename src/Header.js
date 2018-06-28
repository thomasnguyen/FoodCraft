import React, { Component } from 'react';
import images from './images/logo.png';

class Header extends Component {
    render(){
        return(
            <div className = "Header">
                <div className = "Header__title">
                    <img  className = "logo_image" src={images} alt="logo"/> <span className="logo_text"> FoodCraft </span>
                </div>
                <div className = "Header__profile">
                </div>
                
            </div>
        );
    }
}

export default Header;