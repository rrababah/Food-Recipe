import {configureStore} from '@reduxjs/toolkit';
import loadingSlice from './Spinner/Spinner'
import loadedRecipesSlice from "./recipe-state/loadedRecipes";
import enteredRecipeSlice from "./recipe-state/enteredRecipe";
import recipeInformationSlice from "./recipe-state/recipeInformation";


const store = configureStore({
    reducer: {
        spinner: loadingSlice.reducer,
        loadedRecipesSlice: loadedRecipesSlice.reducer,
        enteredRecipeSlice: enteredRecipeSlice.reducer,
        recipeInformationSlice: recipeInformationSlice.reducer
    }
});

export default store;


