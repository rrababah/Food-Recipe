import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';
import {Home} from "./pages/Home";
import {SearchResults} from "./components/SearchResults/SearchResults";
import {RecipeInformationPage} from "./pages/RecipeInformationPage";
import {Header} from "./components/Header/Header";

function App() {

    return (
        <div className="App">
            <Header/>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/recipes/searchResults/recipe=:enteredRecipe' element={<SearchResults/>}/>
                    <Route path='/recipes/recipeInformation/id=:id' element={<RecipeInformationPage/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
