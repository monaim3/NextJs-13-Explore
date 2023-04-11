"use client"

import { useState } from "react"

function SearchItem({getSearchResult}) {
    const [query,setquery]=useState('')
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const res=await fetch(`api/course/search?query=${query}`)
        const course=await res.json()
        getSearchResult(course)
    }
  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <input 
        type='text'
        className='border-md search-input'
        placeholder='Search Courses...'
        value={query}
        onChange={(e) => setquery(e.target.value)}
      />
      <button className='search-button' type='submit'>
        Search
      </button>
    </form>
  )
}

export default SearchItem