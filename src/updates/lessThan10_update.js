let open_data = [{
    "name": "Big Sur Bakery Hide Bread Recipe",
    "ingredients": "5 cups all-purpose flour, plus extra flour for dusting\n1/2 cup flax seeds\n1/2 cup sesame seeds\n2 cups oat bran\n1/4 cup sunflower seeds\n1/2 cup amaranth, quinoa, millet, or poppy seeds (or any combo of these)\n2 tablespoons dulse flakes, or 1 teaspoon kosher salt\n1 teaspoon baking soda\n1/4 cup plus 2 tablespoons beer\n2 1/2 cups buttermilk, half-and-half, milk, or water\nunsalted butter, softened for serving",
    "url": "https://www.101cookbooks.com/archives/big-sur-bakery-hide-bread-recipe.html",
    "image": "https://www.101cookbooks.com/mt-static/images/food/big_sur_bakery_hide_bread.jpg",
    "cookTime": "",
    "recipeYield": "",
    "datePublished": "2009-07-06",
    "prepTime": "",
    "description": "From the Big Sur Bakery cookbook, a seed-packed pocket bread recipe contributed by a good friend of the bakery. Sesame, sunflower, flax and poppy seeds, millet, oat bran, and a bit of beer impressively cram themselves into these delicious, hearty rolls."
},
{
    "name": "Old-Fashioned Blueberry Cake Recipe",
    "ingredients": "1 cup plus 2 tablespoons unbleached all-purpose flour\n1 teaspoon baking powder\n1/2 teaspoon baking soda\n3/4 teaspoon fine grain sea salt\n1/2 teaspoon cider vinegar\n5 tablespoons milk (divided)\n1/2 cup unsulphered molasses\n2 large eggs, lightly beaten\n3 tablespoons unsalted butter, barely melted\n1 1/2 cups blueberries, frozen (I freeze fresh berries)\n1 teaspoon flour\nServe with a sprinkling of powdered sugar (optional), or a big dollop of sweetened freshly whipped cream",
    "url": "https://www.101cookbooks.com/archives/oldfashioned-blueberry-cake-recipe.html",
    "image": "https://www.101cookbooks.com/mt-static/images/food/blueberry_cake_recipe.jpg",
    "cookTime": "PT30M",
    "recipeYield": "Serves  8 - 10.",
    "datePublished": "2009-08-27",
    "prepTime": "PT10M",
    "description": "An old-fashioned blueberry cake sweetened with molasses adapted from a reader submitted recipe to the July 1974 issue of Gourmet Magazine - rustic, dark as chocolate, tender, and punctuated with lots of tiny pockets of oozy, magenta berry flesh."
} ];

const update = (data) => {

    const newData = [...data];


    function calcIngredient(ingredients){
        return ingredients.split('\n').length;
    }

    newData.forEach(element => {
        if (calcIngredient(element.ingredients) < 10) {
            element['lessThan10'] = true;
        }
        else{
            element['lessThan10'] = false;
        }
    });

    return newData;

}

console.log((update(open_data)));
