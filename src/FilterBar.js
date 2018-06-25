import React, { Component } from 'react';


class FilterBar extends Component {
    render(){
        return (
            <div className = "FilterBar">
                <input  className = "SearchBar" type="text" />
            </div>
        );
    }
}

export default FilterBar;