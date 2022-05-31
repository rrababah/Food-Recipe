import './SearchBar.scss'

const SearchBar = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <fieldset className="frm-group">
                <label htmlFor="site-search">Find A Recipe: </label>
                <input type="search" id="site-search" name="searchRecipe"
                       onChange={props.onChange}/>
            </fieldset>
            <fieldset className="frm-group">
                <button type="submit">Search</button>
            </fieldset>
        </form>
    )
}
export {SearchBar}
