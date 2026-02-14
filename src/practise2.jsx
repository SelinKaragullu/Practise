import { useEffect } from "react"

 export default function LoadMoreData () {
    const[loading,setLoading] = useState(false)
    const[products,setProducts] = useState([])
    const[count,setCount] = useState(0)
    const[disableButton,setDisableButton] = useState(false)

async function fetchProducts () {
try {
    setLoading(true)
const response = await fetch ()
const data = await response.json()

if(data && data.products && data.products.length)
setProducts((prevData)=>[...prevData, ...data.products])
setLoading(false)
}catch (e){
setLoading(false)
console.log(e)
}
}

useEffect(()=>{
    fetchProducts()
},[count])


useEffect(()=>{
    if(products && products.length === 100) setDisableButton(true)
})

if(loading) {
   return <div>Loading data!</div>
}

return (<div>
<div>
{ products && products.length ? products.map((item)=>{
<div key={item.id}>
    <img src="{item.thumbnail" alt="item.title" />
</div>
}) :null
}
</div> 
<div>
    <button onClick= {setCount(count+1)}>Load more Products</button>
</div>
</div>)
}