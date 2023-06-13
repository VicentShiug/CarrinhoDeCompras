import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

import './SearchBar.css'

const SearchBar = () => {

  const [searchValue, setSearchValue] = useState()

  return (

    <form className='search-bar'>
      <input
        type="search"
        value={searchValue}
        placeholder='Buscar produtos'
        className='search__input'
        onChange={(e) => { setSearchValue(e.target.value) }}
        required
      />
      <button type='submit' className='search__button' >
        <BsSearch />
      </button>
    </form>
  )
}

export default SearchBar