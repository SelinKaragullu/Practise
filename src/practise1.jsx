


useEffect(()=>{
const storedFavs = localStorage.getItem("favorites")

if(storedFavs) setFavorites(JSON.parse(storedFavs))

},[])


useEffect(()=>{
localStorage.setItem('favorites', JSON.stringify(favorites))
},[favorites])