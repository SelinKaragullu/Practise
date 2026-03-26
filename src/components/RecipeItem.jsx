


export default function RecipeItem({ item }) {
    
return (
<>
<img src={item.image_url} alt="recipe image" />
<div> {item.publisher} </div>
<div> {item.title} </div>
</>
)

 }