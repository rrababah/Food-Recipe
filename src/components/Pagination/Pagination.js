import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import {SearchResults} from "../SearchResults/SearchResults";
import {useDispatch, useSelector} from "react-redux";
import {GetSearchResults} from "../../services/SearchApiService";
import {useNavigate} from "react-router-dom";
// import './Pagination.scss';

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

//console.log(items);

function Items({ currentItems }) {
   // const loadedRecipes   = useSelector(state => state.loadedRecipesSlice.loadedRecipes);
   // items = loadedRecipes.results;
   // console.log(items);

    return (
        <>
            {currentItems &&
            currentItems.map((item) => (
                <div key={Math.random()+1}>
                    <h3>Item #{item}</h3>
                </div>
              // <div key={Math.random()+1}>hhhhhhhh</div>
            ))}
        </>
    );
}

function Pagination({ itemsPerPage }) {
    const
        history = useNavigate(),
        dispatch = useDispatch(),
        enteredRecipe = useSelector(state => state.enteredRecipeSlice.enteredRecipe);

    // console.log(itemsPerPage);


    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    //console.log(currentItems);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);


    useEffect(() => {
        // Fetch items from another resources.
       // console.log('herererreer');
      //  GetSearchResults(dispatch,history,enteredRecipe );

//itemOffset is offeset
// itemsPerPage is number
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    );
}
export {Pagination}
