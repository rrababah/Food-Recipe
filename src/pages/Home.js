import {SearchResults} from "../components/SearchResults/SearchResults";
import {useDispatch, useSelector} from 'react-redux';
import {SearchBar} from "../components/SearchBar/SearchBar";
import {loadingActions} from "../store/Spinner/Spinner";
import {loadedRecipesActions} from "../store/recipe-state/loadedRecipes";
import {enteredRecipeActions} from "../store/recipe-state/enteredRecipe";
import {useNavigate} from "react-router-dom";
import {GetSearchResults} from "../services/searchApiService";


const Home = () => {

    const history = useNavigate(),
        dispatch = useDispatch(),
        isLoading = useSelector(state => state.spinner.isLoading),
        enteredRecipe = useSelector(state => state.enteredRecipeSlice.enteredRecipe);

    const onChangeHandler = (e) => {
        dispatch(enteredRecipeActions.changeEnteredRecipe(e.target.value));
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(loadingActions.changeLoadingState());
     //const xxx=  GetSearchResults();
     //console.log(xxx);

        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7b2e03b0ee4b496eb98cd157dd51f32c&query=${enteredRecipe}&number=30`
        ).then(response =>
            response.json()
        ).then(data => {
            console.log(data);
            console.log('data');
            dispatch(loadedRecipesActions.changeloadedRecipesData(data)); //back
            dispatch(loadingActions.changeLoadingState());

        }).then(() => {
            history(`/recipes/searchResults/recipe=${enteredRecipe}`, {replace: false});
        });
    }

    if (isLoading) {
        return (
            <section>
                <p>Is Loading ..</p>
            </section>
        )
    }

    return (
        <section className="container">
            <SearchBar onSubmit={onSubmitHandler} onChange={onChangeHandler}/>
        </section>
    )
}

export {Home}
