class CreateIngredientRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :ingredients_recipes do |t|
      t.references :ingredient, foreign_key: true
      t.references :recipe, foreign_key: true

      t.timestamps
    end
  end
end
