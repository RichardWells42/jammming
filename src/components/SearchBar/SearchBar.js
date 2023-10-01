import React from 'react';
import { useState, useEffect } from "react";
import Spotify from '../../util/Spotify';
import './SearchBar.css';
import { getSongs } from "../../services/getSongs";
import SearchResults from '../SearchResults/SearchResults.js';

export default function SearchBar() {
     // creat a state
     const [searchResults, setSearchResults] = useState([]);
     const [inputText, setInputText] = useState("");
     function handleClick() {
         // grab the search query text
         console.log('inputText', inputText)
         // set a variable called data  for its return data
         let basicArrays = [ {
            name: "person1",
            artist: "thing",
            album: "red"
        },
        {
            name: "person2",
            artist: "thing",
            album: "blue"
        }]

        let redAlbum = [basicArrays[0]]
        let blueAlbum = [basicArrays[1]]
        let finalAlbum = [];
        // return a red or blue almbum depending on what we write in the input box
        if(inputText == "red") {
            finalAlbum = redAlbum
        } else if(inputText == "blue") {
            finalAlbum = blueAlbum
        }
         
         setSearchResults(finalAlbum)
     }
     const handleChange = (e) => {
        // 👇 Store the input value to local state
        setInputText(e.target.value);
      };

      useEffect(() => {
        fetch('https://theaudiodb.p.rapidapi.com/searchalbum.php?s=daft_punk', {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "c61699b34fmsh5cf7e2a384ec8cap188f4bjsn0309e6f30868",
            "X-RapidAPI-Host": "theaudiodb.p.rapidapi.com",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            //setJoke(data[0].joke);
            console.log('data: ', data);
          })
          .catch((error) => console.log(error));
      }, []);
  return (
    <div>
        Search a Song
        <input type="text" onChange={handleChange} value={inputText}></input>
        <button onClick={handleClick}>Search</button>
        <SearchResults results={searchResults}/>
    </div>
  )
}
