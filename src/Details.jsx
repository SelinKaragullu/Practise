import React, { useContext, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { GlobalContext } from './context'

export default function Details () {
    const {id} =useParams ()
const {setRecipeDetailsData, recipeDetailsData} = useContext(GlobalContext)

useEffect (()=>{
async function fetchingData() {
const res = await fetch (`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
const data = await res.json()
setRecipeDetailsData(data.data)
}

fetchingData()
},[id])


    return (<>
<img src={recipeDetailsData?.recipe?.image_url}></img>
<div>{recipeDetailsData?.recipe?.publisher}</div>
<div>{recipeDetailsData?.recipe?.title}</div>
<div>{
    recipeDetailsData?.recipe?.ingredients?.map((ingredient,index)=>(
        <div key={index}>
            <ul>
    <li>{ingredient.description}</li>
    <li>{ingredient.quantity}</li>
    </ul>
  </div>
    ))
    }

</div>
</>

    )
}