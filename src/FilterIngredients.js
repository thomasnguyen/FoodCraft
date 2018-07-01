import React, { Component } from 'react';

class FilterIngredients extends Component {
    render(){
        let searchResults = this.props.data_ingredient.map((ingredient) => 
                <div onClick = {() => this.props.addIngredient(ingredient.name)} key = {ingredient.name}> <i className="fas fa-lemon FilteredIngredients_icon"></i>{ingredient.name} </div>
        );

        return (
            <div className = "FilteredIngredients_Box" >
                {searchResults}
           </div>
        );
    }
}

export default FilterIngredients;