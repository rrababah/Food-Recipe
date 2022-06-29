import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {recipeInformationActions} from "../store/recipe-state/recipeInformation";
import axios from 'axios';
import {loadedRecipesActions} from "../store/recipe-state/loadedRecipes";
import {loadingActions} from "../store/Spinner/Spinner";
import {PATHS, URL} from '../constants/AppConstants'
import {useNavigate} from "react-router-dom";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


const GetRecipeInformation = () => {
    const
        dispatch = useDispatch(),
        pathName = window.location.pathname,
        recId = pathName.split('id=')[1];

    useEffect((e) => {
        axios.get(`${URL.HOST}/${URL.RECIPE_INFORMATION}/${recId}/information?apiKey=${API_KEY}`)
            .then(response => {
                // Redux recipeInformation
                console.log(response.data);
                dispatch(recipeInformationActions.changeRecipeInformation(response.data))

            });

    }, []);

}



const GetSearchResults =  (dispatch, history, enteredRecipe) => {

    axios.get(`${URL.HOST}/${URL.SEARCH_RESULTS}?apiKey=${API_KEY}&query=${enteredRecipe}&number=${URL.MAX_RESULTS}`
    ).then(response => {
        console.log(response.data);
        console.log('data');
        dispatch(loadedRecipesActions.changeloadedRecipesData(response.data));
        dispatch(loadingActions.changeLoadingState());

    }).then(() => {
        history(`${PATHS.SEARCH_RESULTS_PATH}${enteredRecipe}`, {replace: false});
    });
}


export { GetRecipeInformation, GetSearchResults }
