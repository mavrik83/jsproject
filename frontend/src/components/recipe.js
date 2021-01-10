class Recipe {
  constructor(title, imageLink, recipeLink, ingredients, id) {
      this.id = id;
      this.title = title;
      this.imageLink = imageLink;
      this.recipeLink = recipeLink;
      this.ingredients = ingredients;
  }

  createRecipeCard() {
    const card = document.createElement('div')
    card.className = "card"
    card.id = this.id
    const img = document.createElement('img')
    img.src = this.imageLink
    card.appendChild(img)
    const cardInfo = document.createElement('div')
    cardInfo.className = "card-info"
    const title = document.createElement('h1')
    title.innerHTML = this.title
    cardInfo.appendChild(title)
    const ingHeader = document.createElement('h3')
    ingHeader.innerHTML = "Ingredients:"
    cardInfo.appendChild(ingHeader)
    const ul = document.createElement('ul')
    for (let ingredient of this.ingredients) {
      let li = document.createElement('li')
      li.innerHTML = ingredient
      ul.appendChild(li)
    }
    cardInfo.appendChild(ul)
    const footer = document.createElement('div')
    footer.className = "card-footer"
    // const linkDel = document.createElement('div')
    // linkDel.className = "link-del"
    // const delButton = document.createElement('button')
    // delButton.innerText = "Delete"
    const link = document.createElement('a')
    link.target = "_blank"
    link.href = this.recipeLink
    link.innerHTML = "View Recipe Here"
    footer.appendChild(link)
    // linkDel.appendChild(delButton)
    // delButton.addEventListener('click', () => this.deleteRecipe(this.id))
    card.appendChild(cardInfo)
    // footer.appendChild(delButton)
    card.appendChild(footer)
    document.getElementById('recipe-card-container').appendChild(card)
  }

  // deleteRecipe(e) {
  //   try {
  //     const response = fetch(`http://localhost:3000/recipes/${e}`, {
  //       method: "DELETE"
  //     })
  //     window.location.reload
  //     // return response.json()
  //   } catch (error) {
  //     return console.log("Error: " + error)
  //   }
  // }
}
