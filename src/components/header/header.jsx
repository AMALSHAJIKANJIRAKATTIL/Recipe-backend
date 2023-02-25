import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"


function Header() {
  const [query,setQuery]=useState('')
  const searchInput=(e)=>{
    setQuery(e.target.value)
  }

  const navigate = useNavigate();


  const logout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate(`/`);
  }


  return (
    <header className='flex border-b  border-[black] w-full flex-row h-64 h-[100px] justify-around items-center'>
        <div className='w-[50%] pl-5'>
        <Link to={`/recipes`}>
<img className='w-[150px]' src='https://seeklogo.com/images/R/recipe-logo-EC4BDCE687-seeklogo.com.png'></img></Link>
</div>

<div className='flex flex-row border-solid border-2 border-[black]'>
<form className='flex items-center justify-center' onSubmit={(e)=>{ e.preventDefault();  navigate(`/search?q=${query}`);}}><input type={'text'} placeholder={'Search by Title, Author, Publisher'} 
className='w-[400px] pl-5 focus:outline-0' onChange={searchInput}></input></form>
<Link to={`/search?q=${query}`}>
<img className='bg-[black] h-[50px] w-[50px]' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png'}></img>
</Link>
</div>

<div className='h-[50px] text-2xl w-[50px] relative ml-4 mr-5 flex flex-col items-center justify-center font-bold'>
{localStorage.getItem('user').split('@')[0]}
<button onClick={logout} className='font-light text-xs underline text-[blue]'>logout</button>
</div>
    </header>
  )
}

export default Header