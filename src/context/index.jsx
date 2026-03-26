import { createContext } from "react";
import {useState} from "react"


   export const GlobalContext = createContext(null)

   export default function GlobalState ({children}) {
const [searchParam,setSearchParam] = useState("")
const [recipeList,setRecipeList] = useState([])
const [loading,setLoading] = useState(false)
async function handleSubmit(event) {
    event.preventDefault()
try {
    setLoading(true)
const response = await fetch (`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
const data = await response.json()
if(data?.data?.recipes)setRecipeList(data.data.recipes)
setSearchParam("")
setLoading(false)

}catch(err){
setSearchParam("")
setLoading(false)
}

}

return(
    <GlobalContext.Provider value={{
        searchParam,setSearchParam,recipeList,setRecipeList,loading,setLoading,handleSubmit
    }}>
{children}

    </GlobalContext.Provider>
)

   }

   