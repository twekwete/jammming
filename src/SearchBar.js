import React,{useState} from 'react'

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className='App-search'>
    <input value={searchTerm} onChange={e =>
      setSearchTerm(e.target.value)} />
    <button>Search</button>
  </div>
  )
}

export default SearchBar