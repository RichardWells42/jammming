import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar.js";
import Spotify from "../../util/Spotify.js";


export default function SearchResults(props) {
  let testArray= [
      {
          name: "john",
          artist: "hzkjg",
          album: "dfkja"

      },
      {
          name: "tom",
          artist: "hzsfgskjg",
          album: "sdf"

      }
  ]
  //console.log('props: ', props)

return (
  <div>
      <h2>SearchResults</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Artist</th>
            <th>Album</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((val,key) => {
             return (
              <tr key={val.name}>
             <td>{val.name}</td>
             <td>{val.artist}</td>
             <td>{val.album}</td>
         </tr>
                )
             })}

        </tbody>
      </table>
  </div>
)
}







