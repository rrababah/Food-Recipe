import React, {useCallback, useMemo} from 'react';
import './SearchBar.scss'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate ,useParams} from "react-router-dom";
import {enteredRecipeActions} from "../../store/recipe-state/enteredRecipe";
import {loadingActions} from "../../store/Spinner/Spinner";
import {GetSearchResults} from "../../services/SearchApiService";

const SearchBar = () => {
    const history = useNavigate(),
        dispatch = useDispatch(),
        enteredRecipe = useSelector(state => state.enteredRecipeSlice.enteredRecipe);
    // let { enteredRecipe } = useParams();
    // console.log(enteredRecipe);

    const onChangeHandler = e => {
        dispatch(enteredRecipeActions.changeEnteredRecipe(e.target.value));
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        dispatch(loadingActions.changeLoadingState());
        GetSearchResults(dispatch,history,enteredRecipe);
    };

    return (
        <form onSubmit={onSubmitHandler} >
            <fieldset className="frm-group">
                <label htmlFor="site-search">Find A Recipe: </label>
                <input placeholder="Enter search term" type="search" id="site-search" name="searchRecipe"
                       onChange={onChangeHandler}/>
            </fieldset>
            <fieldset className="frm-group">
                <button type="submit">Search</button>
            </fieldset>
        </form>
    )
}
export {SearchBar}
