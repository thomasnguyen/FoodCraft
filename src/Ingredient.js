import React, { Component } from 'react';

class Ingredient extends Component {
    render(){
        return (
           <div className = {`ingredient__tag ${this.props.color}`}>
                <div className = "ingredient__tag__title"> {this.props.name} </div>
                <div className = "ingredient__tag__title"> <i onClick = {() => this.props.deleteIngredient(this.props.key)}  className="fas fa-times"></i>
                </div>
           </div>
        );
    }
}

export default Ingredient;