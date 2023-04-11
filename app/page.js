"use client"
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import LoadingPage from './LoadingPage'
import Course from './component/Course'
import SearchItem from './component/SearchItem'

const inter = Inter({ subsets: ['latin'] })

 function Home() {
  const [course,setCourse]=useState([])
  const [isLoading, setisLoading]=useState(true)
 
  useEffect(()=>{
       const fetchData=async()=>{
        const res=await fetch('/api/course');
        const data=await res.json();
         setCourse(data)
         setisLoading(false)
       }
       fetchData()
  },[])
  if(isLoading){
     return <LoadingPage/>
  }
  return (
    <>
     <div> 
       <div className='w-32 mx-auto mt-6'>
       <SearchItem getSearchResult={(result)=>setCourse(result)}></SearchItem>
       </div>
       <Course courses={course}></Course>
     </div>
    </>
  )
}
export default Home;