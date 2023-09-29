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

return (
  <div>
      <h2>SearchResults</h2>
      <table>
<tr>
  <th>Name</th>
  <th>Artist</th>
  <th>Album</th>
</tr>
{props.results.map((val,key) => {
  return (
      <tr key={val}>
  <td>{val.name}</td>
  <td>Friank</td>
  <td>Exodus</td>
</tr>
  )
})}


</table>
  </div>
)
}







