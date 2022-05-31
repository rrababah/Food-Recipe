import {createSlice} from '@reduxjs/toolkit';

const initialState = {recipeInformation: {}};
const recipeInformationSlice = createSlice({
    name: 'LoadingState',
    initialState,
    reducers: {
        changeRecipeInformation(state, action) {
            state.recipeInformation =  action.payload;
        }
    }
});

export const recipeInformationActions = recipeInformationSlice.actions;
export default recipeInformationSlice;

