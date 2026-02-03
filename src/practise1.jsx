import { useEffect, useState, useContext, createContext } from "react"


const MovieContext = createContext()
export const useMovieContext = () => useContext (MovieContext)

export default function MovieProvider ({children}) {
const [favorites,setFavorites] = useState([])


    return <MovieContext.Provider>
        {children}
    </MovieContext.Provider>
}