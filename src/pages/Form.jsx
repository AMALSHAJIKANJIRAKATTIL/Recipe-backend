import React from 'react'
import Header from '../components/header/header';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Form() {

  const navigate=useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
 
  const [image, setImage] = useState('');
  const [ingredients, setIngrients] = useState('');

const [directions, setDirection] = useState('');



  const url=process.env.REACT_APP_API;
  const handleSubmit = (event) => {
      console.log("Sending...");
      event.preventDefault();
   

      axios.post(`${url}/recipe`,  {title,author,image,ingredients,directions})
      .then((response) => {
        navigate(`/recipes`);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

   
     
  }
  

 

  return (
    <>
    <Header></Header>
    <div className="h-[450px] flex justify-center items-center flex-col w-full	">

    <h3 className='text-center font-bold text-3xl mt-2'>Create a recipe</h3>

      <form onSubmit={handleSubmit} className='flex justify-center items-center flex-col w-[40%] h-[70%] bg-white drop-shadow-md gap-3	rounded-md	mt-5'>
          <input className="bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"  type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
          <input className="bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"  type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
          <input className="bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" placeholder="Image Link" value={image} onChange={(e) => setImage(e.target.value)} required/>
          <input className="bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" placeholder="Ingredients ( comma seperated )" value={ingredients} onChange={(e) => setIngrients(e.target.value)} required/>
          <input className="bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" placeholder="Directions" value={directions} onChange={(e) => setDirection(e.target.value)} required/>

          <button type="submit" className='w-[60%] text-white bg-black rounded hover:text-black hover:bg-white hover:ring-black ring-2 ring-white'>Submit</button>
      </form>
</div>
      </>
  );
}

export default Form