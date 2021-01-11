# Recipe Book

## Introduction

> A simple single page web app to list a collection of recipes manually entered from any website. Features a way to randomly select a recipe based on ingredient.

## Usage

> Add new recipes first. Click on "Click here to add a recipe". In the form, add the title, image link, recipe link, and the ingregients. Ingredients should be in a comma separated list. Any recipe from any website should work.

Once a few recipes have been added, you can click on "Get a random recipe by ingredient" to bring a drop-down menu of all the ingredients from all the entered recipes. Pick one and a random recipe based on that ingredient will load.

## Installation

> 1. From the ```recipe-api``` directory, run ```rails db:migrate``` and then start the server via ```rails s```.
2. From the ```frontend``` directory, run ```open index.html``` at the command prompt.