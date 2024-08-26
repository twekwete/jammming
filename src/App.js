import './App.css';
import React,{useState} from 'react';
import Results from './Results';
import Playlist from './Playlist';

function App() {
  const results = [
    {id: 1,name:"testsong",artist:"testartist",album:"testalbum"},
    {id: 2,name:"testsong2",artist:"testartist2",album:"testalbum2"},
    {id: 3,name:"testsong3",artist:"testartist3",album:"testalbum3"},
    {id: 4,name:"testsong4",artist:"testartist4",album:"testalbum4"},
  ]

  const [playlistName, setPlaylistName] = useState('')
  const [playlistTracks, setPlaylistTracks] = useState([])

  const addToPlaylist = (song) =>{
    const sondIds = playlistTracks.map(item => item.id)
    setPlaylistTracks(prev => {
      if(sondIds.includes(song.id)){
        return [...prev]
      }else{
        return [song, ...prev];
      }
    })
  }

  const removeFromPlaylist = (song) => {
    setPlaylistTracks((current) => {
      return current.filter((songItem) =>{
        return songItem.id !== song.id 
      })
    })
  }

  return (
    <div className='App'>
      <div className='App-header'><h1>Ja<span>mmm</span>ing</h1></div>
      <Results results={results} addToPlaylist={addToPlaylist}/>
      <Playlist playlistName={playlistName} setPlaylistName={setPlaylistName} tracks={playlistTracks} removeFromPlaylist={removeFromPlaylist} />

    </div>
  );
}

export default App;
