import {Link} from "react-router-dom"


export default function Navbar () {
return (<nav>
<Link to="/">Food Recipe</Link>
<form action="">
    <input
    type="text"
    placeholder="search recipe..."/> 
    
</form>
   <ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/favorites">Favorites</Link></li>
    </ul>
</nav>
)
}