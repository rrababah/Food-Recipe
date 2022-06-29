import React from 'react';
import {useSelector} from 'react-redux';
import {SearchBar} from "../components/SearchBar/SearchBar";


const Home = () => {

  const
      isLoading = useSelector(state => state.spinner.isLoading);

    if (isLoading) {
        return (
            <section>
                <p>Is Loading ..</p>
            </section>
        )
    }

    return (
        <section className="container">
            <SearchBar/>
        </section>
    )
}

export {Home}
