import { useEffect } from "react"

 export default function LoadMoreData () {
    const[loading,setLoading] = useState(false)
    const[products,setProducts] = useState([])
    const[count,setCount] = useState(0)

async function fetchProducts () {
try {
    setLoading(true)
const response = await fetch ()
const data = await response.json()

if(data && data.products && data.products.length)
setProducts(data.products)
setLoading(false)



}catch (e){
setLoading(false)
console.log(e)
}
}

useEffect(()=>{
    fetchProducts()
},[])

return
}