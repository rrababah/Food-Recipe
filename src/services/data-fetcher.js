// import {useSelector} from "react-redux";
//
// class DataFetcher {
//     apiKey = "7b2e03b0ee4b496eb98cd157dd51f32c";
//     maxResults = 30;
//
//     get searchResultURL() {
//         return `${this.host}/recipes/complexSearch`
//     }
//
//     get recipeInfoURL() {
//         const recId = window.location.pathname.split("id=")[1];
//         return `${this.host}/recipes/${recId}/information`
//     }
//
//     constructor(host) {
//         this.host = host;
//     }
//
//     async fetchSearchResult () {
//         const query = useSelector(state => state.enteredRecipeSlice.enteredRecipe);
//         const url = updateURLParams(this.searchResultURL, {query, number:this.number});
//         return await (await fetch(url)).json();
//     }
//
//     async fetchRecipeInfo() {
//
//     }
//
//     updateURLParams(targetURI, params) {
//         const data = {...params, apiKey:this.apiKey};
//         const searchParams = new URLSearchParams(data);
//         return `${targetURI}?${searchParams.toString()}`
//     }
//
// }
//
// export default DataFetcher;
//
// /// call data
// const fetcher = new DataFetcher("https://api.spoonacular.com");
// await fetcher.fetchSearchResult();
//
// //data  should be inside a try catch block
