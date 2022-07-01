
import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const{coktails,loading}=useGlobalContext();
  if(loading){
    return<Loading/>
  }
  if(coktails.length<1){
    return(<h2 className='section-title'>no coktails matched your search</h2>)
  }
  return (
    <div>
      <h2>cocktail list component</h2>
    </div>
  )
}

export default CocktailList