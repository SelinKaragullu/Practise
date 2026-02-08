import React from 'react'
import ReactDOM from 'react-dom/client'
import data from "./practise1"


function App () {

    const [selected,setSelected] = React.useState(null)
    const [enableMultiSelection,setEnableMultiSelection] = useState(false)

const handleClick = (getCurrentId)=>{
    console.log(getCurrentId)
    setSelected(selected === getCurrentId ? null : getCurrentId)
}


const handleMultipleSelection = (getCurrentId)=> {
cpyMultiple = [...multiple]
if(cpyMultiple.includes(getCurrentId)){
   cpyMultiple = cpyMultiple.filter((id)=>id!==getCurrentId)
} else {
    cpyMultiple.push(getCurrentId)
}
setMultiple(cpyMultiple)
}

    return <div> 
<button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
{data.map(item=>
    <div onClick={enableMultiSelection ? 
        ()=>handleMultipleSelection(item.id) : 
        ()=>handleClick(item.id)}
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

