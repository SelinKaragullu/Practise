import {Link} from 'react-router-dom'


export default function RecipeItem({ item }) {
    
return (
<>
<img src={item.image_url} alt="recipe image" />
<div> {item.publisher} </div>
<div> {item.title} </div>
<Link to={`/recipe/${item.id}`}>Go to details</Link>
</>
)

 }