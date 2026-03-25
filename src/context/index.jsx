import { createContext } from "react";
import {useState} from "react"


   export const GlobalContext = createContext(null)

   export default function GlobalState ({children}) {
const [searchParam,setSearchParam] = useState("")
const [recipeList,setRecipeList] = useState([])
const [loading,setLoading] = useState(false)

return(
    <GlobalContext.Provider value={{
        searchParam,setSearchParam,recipeList,setRecipeList,loading,setLoading
    }}>
{children}

    </GlobalContext.Provider>
)

   }

   