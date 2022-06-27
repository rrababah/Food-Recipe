import React from 'react';
import {SearchResults} from "../components/SearchResults/SearchResults";
import {useDispatch, useSelector} from 'react-redux';
import {SearchBar} from "../components/SearchBar/SearchBar";
import {loadingActions} from "../store/Spinner/Spinner";
import {loadedRecipesActions} from "../store/recipe-state/loadedRecipes";
import {enteredRecipeActions} from "../store/recipe-state/enteredRecipe";
import {useNavigate} from "react-router-dom";
import {GetSearchResults} from "../services/SearchApiService";
import axios from "axios";


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
        GetSearchResults(dispatch,history,enteredRecipe );
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
            <SearchBar onSubmit= {onSubmitHandler} onChange={onChangeHandler}/>
        </section>
    )
}

export {Home}
