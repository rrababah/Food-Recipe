import React from 'react';
// import './scss/SearchResults.scss'
import {RecipeInformation} from "../components/RecipeInformation/RecipeInformation";
import {GetRecipeInformation} from "../services/SearchApiService";

const RecipeInformationPage = () =>{
    GetRecipeInformation();
    return (
        <section className="container">
            <RecipeInformation/>
        </section>
    )
}

export {RecipeInformationPage}
