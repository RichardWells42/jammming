import React from 'react';
import { useState } from "react";
import Spotify from '../../util/Spotify';
import './SearchBar.css';
import { getSongs } from "../../services/getSongs";
import SearchResults from '../SearchResults/SearchResults.js';

export default function SearchBar() {
     // creat a state
     const [searchResults, setSearchResults] = useState([]);

     function handleClick() {
         //api call
        
         let data = Spotify;
         let my_tolken = 'my_token <- get_spotify_api_token(client_id = "***", client_secret = "***")'
         function get_spotify_api_tolken(client_id = "ea189656ff184969bd234dc44e6baa20", client_secret = "79bf118e133b4a60af66318afb8e072f") {

         }
         // set a variable called data  for its return data
         setSearchResults([ {
            name: "person",
            artist: "thing",
            album: "stuff"

        },])
     }
     let testArray2= [
        {
            name: "clark",
            artist: "hzkjg",
            album: "dfkja"

        },
        {
            name: "Richard",
            artist: "hzsfgskjg",
            album: "sdf"

        }
    ]
  return (
    <div>
        Search a Song
        <input></input>
        <button onClick={handleClick}>Search</button>
        <SearchResults results={searchResults}/>
    </div>
  )
}
