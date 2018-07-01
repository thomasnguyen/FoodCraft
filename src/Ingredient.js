import React, { Component } from 'react';

class Ingredient extends Component {
    render(){
        return (
           <div className = {`ingredient__tag ${this.props.color}`}>
                <div className = "ingredient__tag__title"> {this.props.name} </div>
                <div className = "ingredient__tag__title"> <i className="fas fa-times"></i>
                </div>
           </div>
        );
    }
}

export default Ingredient;