// import './scss/SearchResults.scss'
import {Card} from "../../containers/Card/Card";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Pagination} from "../Pagination/Pagination";

const SearchResults = () => {

    const isLoading = useSelector(state => state.isLoading.isLoading),
        loadedRecipes = useSelector(state => state.loadedRecipesSlice.loadedRecipes),
        enteredRecipe = useSelector(state => state.enteredRecipeSlice.enteredRecipe);

    return (
        <section className="container" id="container">

            <h2> "{loadedRecipes.totalResults}" Results are matching recipe "{enteredRecipe}"</h2>
            {!isLoading && loadedRecipes.results.map((recipe) => {

                return <Card className="flexbox-inline" key={recipe.id}>
                    <figure className="spacing-top50">
                        <Link to={`/recipes/recipeInformation/id=${recipe.id}`}>
                            <img className="responsive-img" id={recipe.id} src={recipe.image} alt="here Image Alt"/>
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
