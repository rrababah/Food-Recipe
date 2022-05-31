import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {recipeInformationActions} from "../store/recipe-state/recipeInformation";

const GetRecipeInformation = () =>{
    const dispatch =useDispatch(),
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
export {GetRecipeInformation}
