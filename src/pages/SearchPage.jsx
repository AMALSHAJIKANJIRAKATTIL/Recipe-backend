import React, { useEffect, useState } from 'react'
import Header from '../components/header/header'
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import SearchCard from '../components/search/SearchCard';


function SearchPage() {
  
  const [searchResults,setSearchResults]=useState([]);
  const [loaded,setLoaded]=useState(false)
  const url=process.env.REACT_APP_API;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');
  const fetchSearchResults=async ()=>{
    const response=await axios.get(`${url}/recipes/search?q=${query}`).catch(e=>console.log(e));
    setSearchResults(response.data);
    setLoaded(true)
    //console.log(response);
}
  useEffect(()=>{
    fetchSearchResults();
  }
  ,[query]);
  return (<>
    <Header/>
    <div className='flex flex-col items-center w-full min-h-[520px]'>
    <p className='mt-3 text-3xl font-bold text-[grey]'>Search results for : '{query}'</p>
    {searchResults.length!=0  ?
     ( searchResults.map((recipe)=>{
        return(
          <Link to={`/recipe/${recipe._id}`}>
        <SearchCard recipe={recipe}></SearchCard>
        </Link>
        );
      }))
      :
(setLoaded && <img className='w-[50%] p-5' src='https://cdn.dribbble.com/users/1883357/screenshots/6016190/search_no_result.png'></img>)
    }
    </div>
    
    </>
  )
}

export default SearchPage;