let helpers = {
	formatTime: function(input) {
		if (input === '') {
			return '???';
		}
		var reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
		var hours = 0,
			minutes = 0,
			seconds = 0,
			totalseconds;

		if (reptms.test(input)) {
			var matches = reptms.exec(input);
			if (matches[1]) hours = Number(matches[1]);
			if (matches[2]) minutes = Number(matches[2]);
			if (matches[3]) seconds = Number(matches[3]);
			totalseconds = hours * 3600 + minutes * 60 + seconds;
		}
		return totalseconds / 60 + ' mins';
	},

	calcIngredient(ingredients) {
		if (ingredients !== undefined) {
			return ingredients.split('\n').length;
		}
	},

	splitIngredient(ingredients) {
		if (ingredients !== undefined) return ingredients.split('\n');
	},

	randomizer() {
		return Math.floor(Math.random() * 100 + 1) + '%';
	},
	sortArray(recipes, ingredientQuery) {
		let newArray = [];

		recipes.forEach((recipe) => {
			let temp = { ...recipe };
			console.log(ingredientQuery);
			temp['percent'] = this.percentageCalc(recipe, ingredientQuery);
			newArray.push(temp);
		});

		newArray.sort((a, b) => {
			if (a.percent < b.percent) return 1;
			if (a.percent > b.percent) return -1;
			return 0;
		});
		return newArray;
	},
	percentageCalc(recipe, ingreidentsList) {
		let matchingIngredients = 0;
		let totalIngredients = this.calcIngredient(recipe.ingredients);

		let recipeIngredientsList = recipe.ingredients;
		ingreidentsList.forEach((ingredient) => {
			console.log(ingredient.name);
			if (recipeIngredientsList.includes(ingredient.name)) {
				matchingIngredients = matchingIngredients + 1;
			}
		});
		return Math.floor(matchingIngredients / totalIngredients * 100);
	},

	percentageCalcDisplay(recipe, ingreidentsList) {
		return this.percentageCalc(recipe, ingreidentsList) + '%';
	},

    filterByIngredientCount(count, ingreidentsList){
        return ingreidentsList.filter(ingredient => this.calcIngredient(ingredient) < count );
    },
	sluggify(title) {
		return title.trim().toLowerCase().split(' ').join('-');
	}
};

export default helpers;
