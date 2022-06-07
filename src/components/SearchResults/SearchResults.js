import {Card} from "../../containers/Card/Card";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Pagination} from "../Pagination/Pagination";
import {SearchBar} from "../SearchBar/SearchBar"

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
                        <Link to={`/recipes/recipeInformation/id=${recipe.id}`}>
                            <img className="responsive-img" id={recipe.id} src={recipe.image} alt={recipe.title}/>
                        </Link>
                        <figcaption className="spacing-top10">
                            {recipe.title}
                        </figcaption>
                    </figure>
                </Card>

            })}
            {/*<Pagination/>*/}

        </section>
    )
}

export {SearchResults}
