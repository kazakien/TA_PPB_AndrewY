import React from "react"
import { CreatorCard } from "./CreatorCard"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

export const Creator = () => {
  const [url,setUrl]=useState("https://gateway.marvel.com/v1/public/creators?ts=1&apikey=80dfed77f24f958fd4470b46a09a8b9e&hash=193b6884626d38741587cced90b83d35")
  const [itemCreator,setItem]=useState();
  const [search,setSearch]=useState("");
  useEffect(()=>{
    const fetch=async()=>{
      const res=await axios.get(url)
      setItem(res.data.data.results);
    }
    fetch();
  },[url])
  
  const searchCreator=()=>{
    setUrl(`https://gateway.marvel.com:443/v1/public/creators?nameStartsWith=${search}&ts=1&apikey=80dfed77f24f958fd4470b46a09a8b9e&hash=193b6884626d38741587cced90b83d35`)
  }

  return (
    <>
        <div className="header">
            <div className="bg">
                <img src="./Images/bg.png" alt="" />
            </div>
            <div className="search-bar">
                <img src="./Images/logo.jpg" alt="logo" />
                <input type="search" placeholder='Search Here'
                 className='search'
                 onChange={e=>setSearch(e.target.value)}
                 onKeyPress={searchCreator}/>
            </div>
        </div>
       <div className="content">
         
        {
          (!itemCreator)?<p>Not Found</p>:<CreatorCard data={itemCreator}/>
        }
       </div>
    </>
  )
}