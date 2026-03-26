import { useContext } from "react"
import {Link} from "react-router-dom"
import { GlobalContext } from "../context"


export default function Navbar () {
const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext)

return (<nav>
<Link to="/">Food Recipe</Link>
<form onSubmit={handleSubmit} action="">
    <input
    type="text"
    placeholder="search recipe..."
    value={searchParam}
    onChange={(event)=>setSearchParam(event.target.value)}
    /> 
    
</form>
   <ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/favorites">Favorites</Link></li>
    </ul>
</nav>
)
}