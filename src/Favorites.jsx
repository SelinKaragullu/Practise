import React from 'react'
import {useContext} from 'react'
import RecipeItem from './components/RecipeItem.jsx'
import { GlobalContext } from './context/index.jsx'


export default function Favorites () {

    const {favoritesList} = useContext(GlobalContext)
    return (
<div>{favoritesList && favoritesList.length>0
   ? favoritesList.map((favorite)=>(
        <RecipeItem favorite={favorite} key={item.id} />
    )) : <div>
        "Favorites list is empty"
    </div>
    }</div>

    )
}