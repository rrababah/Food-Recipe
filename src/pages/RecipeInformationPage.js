import React from 'react';
// import './scss/SearchResults.scss'
import {RecipeInformation} from "../components/RecipeInformation/RecipeInformation";
import {GetRecipeInformation} from "../services/SearchApiService";
import {useParams} from "react-router-dom";

const RecipeInformationPage = () =>{
    let { id } = useParams();
    console.log(id);

    GetRecipeInformation();
    return (
        <section className="container">
            <RecipeInformation/>
        </section>
    )
}

export {RecipeInformationPage}
