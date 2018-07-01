import React, { Component } from 'react';
import images from './images/logo.png';

class Header extends Component {
    handleSearch = () => {
        console.log(this.globalSearch.value);
        this.props.handleGlobalSearch(this.globalSearch.value.toLowerCase());
    }
    render(){
        return(
            <div className = "Header">
                <div className = "Header__title">
                    <div className="Header__log">
                        <img  className = "logo_image" src={images} alt="logo"/> <span className="logo_text"> <b>Food</b>Craft </span>
                    </div>
                    <div className = "Header__search">
                        <input  ref = {input => this.globalSearch = input}
                                onChange = {this.handleSearch}
                                className = "SearchBar global" 
                                type="text" 
                                laceholder = "Global search...." />
                    </div>
                </div>
                <div className = "Header__profile">
                </div>
                
            </div>
        );
    }
}

export default Header;