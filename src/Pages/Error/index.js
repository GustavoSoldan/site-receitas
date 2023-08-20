import {Link} from 'react-router-dom';

function Error(){
    return(
        <div>
            <h1>Ops! Looks like this page doesn't exists!!!</h1>
            <span>We found those pages here:</span>

            <Link to="/">Home</Link>
            <Link to="/recipes">Recipes</Link>
            <Link to="/addnewrecipe">Add a New Recipe</Link>

        </div>
    );
}
export default Error;