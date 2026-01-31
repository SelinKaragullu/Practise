useEffect(()=>{
const getData = async()=>{

    try{
const response = await fetch(xxx)
const data = await response.json()

    console.log(data)
    } catch(err){
        console.log(err)
    } finally {
        console.log("loading completed")
    }


}


 getData
},[])