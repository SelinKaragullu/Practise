import { useEffect, useState, useContext, createContext } from "react"


const MovieContext = createContext()
export const useMovieContext = () => useContext (MovieContext)

export default function MovieProvider ({children}) {
const [favorites,setFavorites] = useState([])

useEffect(()=>{
    const storedFavs = localStorage.getItem("favorites")

    if(storedFavs) setFavorites(JSON.parse(storedFavs))
},[])

useEffect(()=>{
    localStorage.setItem("favorites", JSON.stringify(favorites))
},[favorites])

const addToFavorites = (movie)=>{
setFavorites(prev=>[...prev, movie])
}

const removeFromFavorites = (movieId)=>{
setFavorites(prev=>prev.filter((movie)=>movieId !== movie.id))
}

const isFavorite = (movieId)=>{
favorites.some(movie=>movie.id===movieId

)
}

const value = {
isFavorite,removeFromFavorites,addToFavorites,favorites

}


    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}