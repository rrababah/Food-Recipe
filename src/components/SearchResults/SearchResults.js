import React from 'react';
import {Card} from "../../containers/Card/Card";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Pagination} from "../Pagination/Pagination";
import {SearchBar} from "../SearchBar/SearchBar"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {PATHS} from "../../constants/AppConstants";

const SearchResults = () => {

    const isLoading = useSelector(state => state.spinner.isLoading),
        loadedRecipes = useSelector(state => state.loadedRecipesSlice.loadedRecipes),
        enteredRecipe = useSelector(state => state.enteredRecipeSlice.enteredRecipe);

    return (
        <section className="container" id="container">
            <SearchBar/>
            {!loadedRecipes.totalResults && <h2> No Results Found !</h2>}
            {loadedRecipes.totalResults &&
            <h2> "{loadedRecipes.totalResults}" Results are matching recipe "{enteredRecipe}"</h2>}
            {!isLoading && loadedRecipes.results && loadedRecipes.results.map((recipe) => {

                return <Card className="flexbox-inline" key={recipe.id}>
                    <figure className="spacing-top50">
                        <Link to={PATHS.RECIPE_INFORMATION_PATH + `${recipe.id}`}>
                            {/*<img loading="lazy" className="responsive-img" id={recipe.id} src={recipe.image} alt={recipe.title}/>*/}
                            <LazyLoadImage className="responsive-img" id={recipe.id} src={recipe.image} alt={recipe.title}/>
                        </Link>
                        <figcaption className="spacing-top10">
                            {recipe.title}
                        </figcaption>
                    </figure>
                </Card>

            })}
            {/*<Pagination itemsPerPage={6}/>*/}

        </section>
    )
}

export {SearchResults}
