// MODULE IMPORT EXAMPLES
//import str from './models/Search';
//import {add as a, multiply, ID} from './views/searchView';
//console.log(`Using imported functions... ${a(ID, 2)} and ${multiply(ID, 2)} and ${str}`);
//import * as searchView from './views/searchView';
//console.log(`Using imported functions... ${searchView.add(ID, 2)} and ${searchView.multiply(ID, 2)} and ${str}`);

import Search from './models/Search';
import Recipe from './models/Recipes';
import * as searchView from './views/searchView';
import {elements, renderLoader, clearLoader} from './views/base';


//console.log(elements);

// *** Global state
// Search Obj
// Current Recipe Obj
// Shopping List Obj
// Liked Recipes
const state = {};


// SEARCH CONTROLLER

const controlSearch = async () => {
  const query = searchView.getInput();
  if(query){
    state.search = new Search(query);
    // prepare ui for getResults
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes); 
    try {
        await state.search.getResults();
        clearLoader();
        // render results on ui
        searchView.renderResults(state.search.result);    
    } catch (err){
        alert('Something went wrong');
        clearLoader();
    }


  }
}

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});
//console.log(elements.searchResPages);
elements.searchResPages.addEventListener('click', e => {
const btn = e.target.closest('.btn-inline');
  if(btn){
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});



// RECIPE CONTROLLER

//const r = new Recipe(47746);
//r.getRecipe();
//console.log(r);

const controlRecipe = async () => {
    const id = window.location.hash.replace('#', '');
    //console.log(id);
    
    if(id) {
        state.recipe = new Recipe(id);
        try {
            //console.log(state.recipe);
            await state.recipe.getRecipe();       /// HERE THIS NEVER FIRES RETURNS >> SOMETHING
            console.log('step 3');
            state.recipe.calcTime();
            console.log('step 4');
            state.recipe.calcServings();
            console.log('step 5');
            console.log(state.recipe);
        } catch (err){
            console.log(error);
            alert('Error processing recipe');
        }

    }
};

//window.addEventListener('hashchange', controlRecipe);
//window.addEventListener('load', controlRecipe);    equivalent below

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));





