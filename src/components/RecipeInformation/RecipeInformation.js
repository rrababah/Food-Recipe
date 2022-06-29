import React from 'react';
import {Card} from "../../containers/Card/Card";
import {Markup} from 'interweave';
import {useSelector} from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Link} from "react-router-dom";
import {PATHS} from "../../constants/AppConstants";

const RecipeInformation = () => {

    const recipeInformation = useSelector(state => state.recipeInformationSlice.recipeInformation),
         isLoading = useSelector(state => state.spinner.isLoading),
        enteredRecipe = useSelector(state => state.enteredRecipeSlice.enteredRecipe),
        recipeSummary = recipeInformation.summary;

    if (isLoading) {
        return (
            <section>
                <p>Is Loading ..</p>
            </section>
        )
    }

    return <Card className="flexbox flexbox-col">
            <Link to={PATHS.SEARCH_RESULTS_PATH + enteredRecipe}>  Back to all "{enteredRecipe}" recipes </Link>


        {!isLoading &&  <figure>
            <LazyLoadImage className="responsive-img" id={recipeInformation.id} src={recipeInformation.image}
                 alt={recipeInformation.title}/>
            <figcaption className="spacing-top10">
                <h3>{recipeInformation.title}</h3>
                <p><Markup content={recipeSummary}/></p>
            </figcaption>
        </figure>}
    </Card>
}

export {RecipeInformation}
