
import React from 'react';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {isLoading: false};
const loadingSlice = createSlice({
    name: 'LoadingState',
    initialState,
    reducers: {
        changeLoadingState(state) {
            state.isLoading = !state.isLoading
        }
    }
});

export const loadingActions = loadingSlice.actions;
export default loadingSlice;

