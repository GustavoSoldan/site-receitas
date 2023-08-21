import axios from 'axios';
import React, { useEffect, useState } from 'react';

import RecipeCard from '../Components/RecipeSpecific/';


const Api = () => {
    const APP_ID = '271405ae';
    const APP_KEY = '49395ae58d0e66a98613295ecc29fafe';
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("beef");
    useEffect(() => {
      getRecipes();
    }, [query])
    const getRecipes = async () => {
      const response = await fetch
            (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
      // console.log(data);
    
    };
    const updateSearch = e => {
      setSearch(e.target.value);
    };
    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch("");
    }

    //Parte de testes 
    
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const handleRecipeClick = (recipe) => {
        setSelectedRecipe(recipe);
    };
    
    return (
      <div className="Home">
        <form className="search-form" onSubmit={getSearch}  >
          <input className="search-bar" type="text" value={search}
               onChange={updateSearch} />
          <button className="search-button" type="submit" >
               Search
          </button>
        </form>
        
        <div className="recipes">
          {recipes.map(recipe => (
            <RecipeCard
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              onClick = {() => handleRecipeClick(recipe)}
            />
    
          ))}
        </div>
    
      </div>
    );
}

export default Api;