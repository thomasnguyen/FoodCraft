import React, { Component } from 'react';


class FilterBar extends Component {
    render(){
        return (
            <div className = "FilterBar">
                <div className ="Search">
                    <a href="#"><img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" /></a>
                    <input  className = "SearchBar" type="text" />
                </div>
            </div>
        );
    }
}

export default FilterBar;