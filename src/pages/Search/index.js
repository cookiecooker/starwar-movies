import React, { useState, useEffect, useRef } from 'react';
import Grid from "../../components/Grid"


const Search = () => {

    const [keyWord, setKeyWord] = useState("");
    const [films, setFilms] = useState([]);


    useEffect(() => {
    
        fetch(`https://swapi.dev/api/films`).then((res) => {
            res.json().then(({ results }) => {
                setFilms(results);
            })
        });

    }, [])

    const onkeyWordChange = (event) => {
        setKeyWord(event.target.value)
    }

    const searchFilms = async () => {
        if (keyWord) {
            const res = await fetch(`https://swapi.dev/api/films/?search=${keyWord}`);
            const { results } = await res.json();
            setFilms(results);
        }
        
    }

    return (
        <>
          
           <input value={keyWord} onChange={onkeyWordChange} />
           <button onClick={searchFilms}>Search</button>
           <Grid films={films}/>
        </>
    )
}

export default Search;