import React, { useEffect, useState } from "react";
import axios from 'axios';
// import {useParams, Link} from 'react-router-dom';
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  
const [query, setQuery] = useState("");
const [char, setChar] = useState([]);

  useEffect(() => {
    
    
      axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
           .then(response => {
            setChar(response.data.results.filter(character => character.name.toLowerCase().includes(query.toLowerCase())));
           })
           .catch(error => {
            console.error('Server Error', error);
          });
    

    
  }, [query]);

  const changeHandler = event => {
    setQuery(event.target.value);
  };

  return (
    <section className="character-list">
      <form>
        <input type='text' 
        placeholder="Search"
        onChange={changeHandler}
        value={query}
        />
      </form>
      {
        char.map(ch =>(
          <CharacterCard key={ch.id} ch={ch}/>

        ))
      }
    </section>
  );
}
