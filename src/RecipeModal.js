import React from "react";

import RecipeStats from "./RecipeStats.js";
import RecipeIngredients from "./RecipeIngredients";

class RecipeModal extends React.Component {
	render() {
    let imageBackground = {
      backgroundImage:`url(${this.props.recipes.image})`
    }


		const showHideClassName = this.props.show
			? "modal display-block"
			: "modal display-none";

		return (
			<div>
        <div className={`${showHideClassName} fadeInUp animated`}>
        
          <div className = "modal_exit" onClick={this.props.handleClose} > 
            <i className="fas fa-times"></i>
          </div>
          <div className="black_screen" onClick={this.props.handleClose} />
          
          
          <section className="modal-main fadeInUp animated">
          

            <div className="modal_container" style={imageBackground}>

							<div className="modal_cover">
								<h4>{this.props.recipes.name} </h4>

								<RecipeStats
									ingredients={this.props.recipes.ingredients}
									cookTime={this.props.recipes.cookTime}
									prepTime={this.props.recipes.prepTime}
								/>

								<div>
									<RecipeIngredients
										ingredients={this.props.recipes.ingredients}
                  />
                  
                  <a href={this.props.recipes.url}>
									<button className="full-details">
										{" "}
										Go to see full details{" "}
										<i className="fas fa-external-link-alt" />
									</button>{" "}
								</a>
								</div>
							
              </div>
              
             
						</div>
					</section>
				</div>
			</div>
		);
	}
}
export default RecipeModal;