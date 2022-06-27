// import { Helmet, HelmetProvider } from "react-helmet-async";
import React from 'react';
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import './App.scss';
import {Home} from "./pages/Home";
import {SearchResults} from "./components/SearchResults/SearchResults";
import {RecipeInformationPage} from "./pages/RecipeInformationPage";
import {Header} from "./components/Header/Header";
import {PATHS} from './constants/AppConstants'

function App() {

    return (
        <div className="App">
            <Header/>
            <Router>
                <Routes>
                    {/*<link to="/recipes/searchResults/recipe=:enteredRecipe"></link>*/}
                    <Route path='/' element={<Home/>}/>
                    <Route path= {PATHS.SEARCH_RESULTS_PATH + ':enteredRecipe'} element={<SearchResults/>}/>
                    <Route path={PATHS.RECIPE_INFORMATION_PATH + ':id'} element={<RecipeInformationPage/>}/>

                </Routes>
            </Router>
        </div>
    );
}

export default App;
