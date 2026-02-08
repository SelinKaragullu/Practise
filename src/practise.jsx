import React from 'react'
import ReactDOM from 'react-dom/client'
import data from "./practise1"


function App () {

    const [selected,setSelected] = React.useState(null)

const handleClick = (getCurrentId)=>{
    console.log(getCurrentId)
    setSelected(getCurrentId === selected ? null : getCurrentId)
}

    return <div> 

{data.map(item=>
    <div onClick={()=>handleClick(item.id)}
    key={item.id}>{item.id} 
        <div>
        <h3>+</h3>
    </div>
    {selected === item.id ? <div>{item.text}</div> : null}
    </div>
    )}


    </div>
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)

