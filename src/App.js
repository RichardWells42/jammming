import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import Spotify from "./util/Spotify.js";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Create a Spotify Playlist</h1>
        <SearchBar />
        
      </header>
    </div>
  );
}

export default App;
