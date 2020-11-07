class Recipes {
  constructor() {
    this.recipes = [];
    this.adapter = new RecipesAdapter();
    this.formSubmit = document.getElementById("form-submit");
    this.formButtons = document.getElementById("form-show-buttons");
    this.addRecipeButton = document.getElementById("add-recipe");
    this.dropDownButton = document.getElementById("filter-button");
    this.ingredientDropDown = document.getElementById("filter-dropdown");
    this.cardContainer = document.getElementById('recipe-card-container');
    this.bindEventListeners();
    this.fetchAndLoadRecipes();
  }

