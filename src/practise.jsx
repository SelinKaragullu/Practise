React.useEffect (()=>{
const loadData = async()=>{
    try{
    const loadedMovies = await getMoviesData()
    setMovies(loadedMovies)
    
    } catch (err) {
setError("failed")
console.log(err)
    }finally {
console.log("completed")
setLoading(false)
    }
}


loadData()
},[])