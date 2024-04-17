import React from 'react'
import SearchBar from './components/SearchBar'
import searchImages from './api';

export default function App() {

  const handleSubmit = async(term) => {
    const result = await  searchImages(term);
    console.log(result);
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit}/>
    </div>
  )
}
