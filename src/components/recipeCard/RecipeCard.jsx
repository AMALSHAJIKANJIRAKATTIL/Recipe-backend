import React from 'react'

function RecipeCard(props) {
  console.log(props.recipe);
  const {image,title,author}=props.recipe;
  return (
    <div className='max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-[black] group
     flex flex-col justify-center items-center w-[250px] h-[300px] m-5 ml-5'>
        <img className=' h-[150px]' src={image}></img>
        <p className='pt-3 text-2xl text-center text-[#535353] font-bold group-hover:text-white'>{title}</p>
        
        <p className='text-[black] font-light group-hover:text-white'>{author}</p>
       
        
    </div>
  )
}

export default RecipeCard