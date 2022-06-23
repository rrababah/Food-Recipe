import {useDispatch} from "react-redux";
import {useEffect, useSelector} from "react";
import {recipeInformationActions} from "../store/recipe-state/recipeInformation";
import axios from 'axios';

const GetRecipeInformation = () => {
    const dispatch = useDispatch(),
        pathName = window.location.pathname,
        recId = pathName.split('id=')[1];

    useEffect((e) => {
        axios.get(`https://api.spoonacular.com/recipes/${recId}/information?apiKey=7b2e03b0ee4b496eb98cd157dd51f32c`)
            .then(response => {
            // Redux recipeInformation
                console.log(response.data);
            dispatch(recipeInformationActions.changeRecipeInformation(response.data))

        });

    }, []);

}

const GetSearchResults = async () => {
    const
        enteredRecipe = useSelector(state => state.enteredRecipeSlice.enteredRecipe);
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7b2e03b0ee4b496eb98cd157dd51f32c&query=${enteredRecipe}&number=30`);
    return await response.data;

    // return(<div></div>);
}
export {GetRecipeInformation, GetSearchResults}
