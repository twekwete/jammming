import React from 'react'

function Playlist(props) {
  const {tracks,removeFromPlaylist,playlistName,setPlaylistName} = props;

  return (
    <div>
      <input value={playlistName} onChange={(e) => {setPlaylistName(e.target.value)}}/>
      {tracks.map((track,index) => {
        return <div key={index}>
          {track.name}
          <button onClick={() =>{
            removeFromPlaylist(track);
          }}>-</button>
        </div>
      })}
    </div>
  )
}

export default Playlist