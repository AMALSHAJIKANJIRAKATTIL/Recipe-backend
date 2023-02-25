import {React,useEffect} from 'react';
import Header from '../components/header/header';
import axios from 'axios';
import RecipeList from '../components/rescipeList/RecipeList';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    useEffect(()=>{
        fetchRecipes();
    },[]);
    const url=process.env.REACT_APP_API;
    const [recipes,setRecipes]=useState([]);
    const fetchRecipes=async ()=>{
    const response=await axios.get(`${url}/recipes`).catch(e=>console.log(e));
    setRecipes(response.data);
    }
  return (
    <div>
    <Header/>
    <div className='flex items-center justify-center'>
    <Link to={`/create`}>
      <button className='bg-[black] text-white rounded mt-5 w-[200px] h-[50px] drop-shadow-md hover:bg-white hover:text-black hover:ring-4 ring-black hover:font-bold'>
Create new recipe  </button> </Link>
    </div>



<RecipeList recipes={recipes}></RecipeList>
    </div>
  )
}

export default LandingPage