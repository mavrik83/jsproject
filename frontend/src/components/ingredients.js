class Ingredients {
  constructor() {
    this.adapter = new IngredientsAdapter();
    this.ingredientDropDown = document.getElementById("filter-dropdown");
    this.fetchAndPopulateDropDown();
  }

