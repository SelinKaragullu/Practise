export default function ImageSlider ({url,limit}) {

    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)
    const [images,setImages] = useState([])


    async function fetching (){

try{
setLoading(true)
        const response = await fetch (`${url}?limit=${limit}`)
        const data = await response.json()

        setLoading(false)
        console.log(data)

} catch(e) {
setError(e.message)
}
finally{
    setLoading(false)
}
    }
useEffect(()=>{
   if (url !== "") fetching()
},[url])

if(loading) {
    return <div>Loading...</div>
}

if(error) {
    return <div>error: {error}</div>
}

return (
    {
        images.map((img)=>(
            <img key={img.id} />
        ))
    }
)



}


function handlePrevious () {
setCurrentSlide(
   currentSlide===0 ? images.length-1 : currentSlide-1
)
}

function handleNext () {
setCurrentSlide(
   currentSlide===images.length-1 ? 0 : currentSlide+1
)
}