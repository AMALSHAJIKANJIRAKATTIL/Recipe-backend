import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../components/header/header';

function RecipePage() {

    let [showIng,setIng]=useState(false)
    let [showDisc,setDisc]=useState(false)
    let [loaded,setLoaded]=useState(false)
    let [recipe,setRecipe]=useState([]);
    const {image,title,directions,author,ingredients}=recipe;
    const url=process.env.REACT_APP_API;
    const id=useParams().id;

    
    const fetchRecipe=async ()=>{
    const response=await axios.get(`${url}/recipe/${id}`).catch(e=>console.log(e));
       setRecipe(response.data);
       setLoaded(true)
    }


    useEffect(()=>{
        fetchRecipe();
    },[]);


    const handleIng=()=>{
        setIng(!showIng);
        if(showDisc){
        setDisc(!showDisc);
        }
    }

    const handleDisc=()=>{
        setDisc(!showDisc);
        if(showIng){
        setIng(!showIng);
        }
    }

  return (
    <div>
        <Header/>
        <div className='w-full h-[83vh]  flex flex-row justify-center items-center'>
            <div className='  h-[80%] w-[40%] flex items-center justify-center border mx-auto rounded-lg  bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 ml-10'>
                <img src={image} className='h-[300px] '></img>
            </div>
            <div className='ml-5 p-5 h-full w-[100%] mr-5 flex flex-col justify-center items-center'>
            <div className='  w-[100%]  flex flex-row justify-left items-center '>
               <h3 className='font-bold text-black text-4xl w-full text-left'>{title}</h3>
            </div>
            <div className='w-[100%]  flex flex-row justify-left items-center mt-3'>
                <p>By:</p><p className='font-bold ml-3 mr-2'>{author}</p><p>(Author)</p>
            </div>
            <div className='w-[100%] mt-3 border-t'>
            <p className=' text-center  text-sm p-3 bg-black text-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-white hover:text-black' onClick={handleIng}>Ingredients</p><ol className='font-light text-md text-left pt-3 mr-6'>
                {loaded  && showIng && ingredients.split(',').map(
                    
                        (item)=>{
                            return(
                            <li className='list-disc pl-4'>{item}</li>);
                        }
                    
                )}
                </ol>
            </div>

            <div className='w-[100%] mt-3 border-t '>
            <p className=' text-center  text-sm p-3 bg-black text-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-white hover:text-black' onClick={handleDisc}>Description</p>
            <p className='pt-3 text-md font-light'>{showDisc &&directions}</p>
            </div>
            
            </div>
            
        </div>

    </div>
  )
}

export default RecipePage