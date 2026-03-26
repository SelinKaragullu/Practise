import React from 'react'
import { GlobalContext } from './context'
import {useContext} from 'react'



export default function Home() {
    const { recipeList, loading } = useContext(GlobalContext)


    if (loading) return <div>Yükleniyor... Lütfen bekleyin!</div>

    return (

        <div>
            {recipeList && recipeList.length > 0 ? recipeList.map((item) => (<RecipeItem key={item.id} item={item} />)) : <div> please search for food </div>


            }


        </div>
    )

}