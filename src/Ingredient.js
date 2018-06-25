import React, { Component } from 'react';


class Ingredient extends Component {
    render(){
        return (
           <div className = "ingredient__tag ${this.props.color}">
                <div className = "ingredient__tag__title"> Chicken </div>
                <div className = "ingredient__tag__title"> x </div>
           </div>
        );
    }
}

export default Ingredient;