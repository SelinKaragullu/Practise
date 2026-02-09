import { useState } from "react"

export default function RandomColor() {
const [typeOfColor,setTypeOfColor] = useState('hex')
const [color,setColor] = useState('#000000')
function handleCreateRandomHexColor () {
    const hex = 
}
function handleCreateRandomRgbColor () {}

    return  <div style={{
        width: "100vw",
        height: '100vh',
        background:color
    }}>
<button onClick={()=> setTypeOfColor('hex')}>Create Hex Color</button>
<button onClick={()=> setTypeOfColor('hex')}>Create RGB Color</button>
<button onClick={typeOfColor==="hex" ?handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
    </div>
}