import {createSlice} from '@reduxjs/toolkit';

const initialState = {enteredRecipe: ''};
const enteredRecipeSlice = createSlice({
    name: 'LoadingState',
    initialState,
    reducers: {
        changeEnteredRecipe(state, action) {
            state.enteredRecipe =  action.payload;
        }
    }
});

export const enteredRecipeActions = enteredRecipeSlice.actions;
export default enteredRecipeSlice;

