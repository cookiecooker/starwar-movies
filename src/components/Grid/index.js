import React from 'react';
import { Link } from "react-router-dom";

//dstone@grubmarket.com




const Grid = ({ films = [] }) => {

    const renderFilms = (item, index) => {

        const { title, director, release_date} = item;
        return (
            <Link key={index.toString()} to="/details" state={{ film: item }}>
                <p>{title}</p>
                <p>{director}</p>
                <p>{release_date}</p>
            </Link>
        )
    }

    return (
        <>
            {films.map(renderFilms)}
        </>
    )
}

export default Grid;