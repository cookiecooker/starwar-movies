import React from 'react';
import { useLocation } from "react-router-dom";


const Details = () => {

    const location = useLocation();
    const { title = "", director = "", release_date = ""} = location?.state?.film;

    return (
        <>
            <section>
                <p>{title}</p>
                <p>{director}</p>
                <p>{release_date}</p>
            </section>
           
        </>
    )
}

export default Details;