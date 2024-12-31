import { useParams } from "react-router-dom";

export default function RecipePage(){
    const {id} = useParams();
    
    return(
        <div>
            {<h1>{recipe.name}</h1>}
        </div>
    );
}