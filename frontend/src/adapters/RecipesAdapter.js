class RecipesAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/recipes"
  }

  async getRecipes() {
    const response = await fetch(this.baseURL)
    const json = await response.json()
    return json.data
  }

  async postRecipeToApi(configurationObject) {
    try {
      const response = await fetch(this.baseURL, configurationObject)
      return await response.json()
    } catch (error) {
      return console.log("Error: " + error)
    }
  }

  async getRecipeByIngredient(ingredient) {
    const response = await fetch(this.baseURL + `/${ingredient}`)
    return await response.json()
  }
}
