import {useSelector} from "react-redux";


const GetSearchResults = async () => {
    const
        enteredRecipe = useSelector(state => state.enteredRecipeSlice.enteredRecipe);
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7b2e03b0ee4b496eb98cd157dd51f32c&query=${enteredRecipe}&number=30`);
        return  await response.json();

    // return(<div></div>);
}
export {GetSearchResults}
