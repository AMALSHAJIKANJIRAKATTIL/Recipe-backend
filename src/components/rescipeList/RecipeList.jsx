import {React,useEffect} from 'react'
import RecipeCard from '../recipeCard/RecipeCard';
import { Link } from 'react-router-dom';

function RecipeList(props) {
  const recipes=props.recipes;
  return (
    <div>
        <div className='flex mt-10 p-3 m-5 pt-3 flex-col  justify-center'>
          <h3 className='text-3xl text-center italic'>Recipes</h3>
          <div className=' flex flex-row flex-wrap mt-3 min-h-[300px] justify-center items-center'>
    {
      recipes.map((recipe)=>{
        return(
          <Link to={`/recipe/${recipe._id}`}>
          <RecipeCard recipe={recipe}/>
          </Link>
        )
      })
      
      }
          </div>
        </div>
    </div>
  )
}

export default RecipeList;