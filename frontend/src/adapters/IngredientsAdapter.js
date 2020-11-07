class IngredientsAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/ingredients"
  }

  async getIngredients() {
    const response = await fetch(this.baseURL)
    const json = await response.json()
    return (json.data)
  }
}
