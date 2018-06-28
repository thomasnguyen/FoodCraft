import React, { Component } from 'react';
import images from './images/logo.png';

class Header extends Component {
    render(){
        return(
            <div className = "Header">
                <div className = "Header__title">
                    <div className="Header__log">
                        <img  className = "logo_image" src={images} alt="logo"/> <span className="logo_text"> <b>Food</b>Craft </span>
                    </div>
                    <div className = "Header__search">
                        <input  className = "SearchBar global" type="text" placeholder = "Global search...." />
                    </div>
                </div>
                <div className = "Header__profile">
                </div>
                
            </div>
        );
    }
}

export default Header;