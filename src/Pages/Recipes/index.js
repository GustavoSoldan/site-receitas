import {Link} from 'react-router-dom';

function Recipes(){
    return(
        <div>
            <h1>View All Recipes Pages</h1>

            <Link to='/'>Home</Link>
            <Link to="/addnewrecipe">Add a New Recipe</Link>
        </div>
    );
}
export default Recipes;