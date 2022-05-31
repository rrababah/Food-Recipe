import {createSlice} from '@reduxjs/toolkit';

const initialState = {loadedRecipes: []};
const loadedRecipesSlice = createSlice({
    name: 'LoadingState',
    initialState,
    reducers: {
        changeloadedRecipesData(state, action) {
            state.loadedRecipes =  action.payload;
        }
    }
});

export const loadedRecipesActions = loadedRecipesSlice.actions;
export default loadedRecipesSlice;

