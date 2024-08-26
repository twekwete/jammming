import React from 'react'

function Results(props) {
  const {results,addToPlaylist} = props;
  return (
    <div>
      {results.map((result, index) => {
        return <div key={index}>{result.name}
        <button onClick={() => {
          addToPlaylist(result);
        }}>+</button>
        </div>
      })}
    </div>
  )
}

export default Results