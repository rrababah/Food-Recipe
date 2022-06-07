import {useDispatch} from "react-redux";
import {useEffect, useSelector} from "react";
import {recipeInformationActions} from "../store/recipe-state/recipeInformation";
import axios from 'axios';

const GetRecipeInformation = () => {
    const dispatch = useDispatch(),
        pathName = window.location.pathname,
        recId = pathName.split('id=')[1];

    useEffect((e) => {
        fetch(`https://api.spoonacular.com/recipes/${recId}/information?apiKey=7b2e03b0ee4b496eb98cd157dd51f32c`
        ).then(response =>
            response.json()
        ).then(data => {
            // Redux recipeInformation
            dispatch(recipeInformationActions.changeRecipeInformation(data))

        });

    }, []);

}

const GetSearchResults = async () => {
    const
        enteredRecipe = useSelector(state => state.enteredRecipeSlice.enteredRecipe);
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7b2e03b0ee4b496eb98cd157dd51f32c&query=${enteredRecipe}&number=30`);
    return await response.json();

    // return(<div></div>);
}
export {GetRecipeInformation, GetSearchResults}
