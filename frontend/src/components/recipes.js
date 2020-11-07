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

  fetchAndLoadRecipes() {
    this.adapter.getRecipes().then(recipes => this.createRecipes(recipes)).then(() => this.addRecipesToDom())
  }

  bindEventListeners() {
    this.formSubmit.addEventListener("click", function() {
      event.preventDefault();
      this.addRecipe();
    }.bind(this))
    this.addRecipeButton.addEventListener("click", function() {
      this.toggleForm();
      this.toggleButtons();
    }.bind(this))
    this.dropDownButton.addEventListener("click", function() {
      this.toggleDropDown();
      this.toggleButtons();
    }.bind(this))
    this.ingredientDropDown.addEventListener("change", function() {
      this.getAndLoadRandomRecipeByIngredient();
    }.bind(this))
  }

