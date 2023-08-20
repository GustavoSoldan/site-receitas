import {Link} from 'react-router-dom';

function AddNewRecipes(){
    return(
        <div>
            <h1>Master Chef!</h1>

            <Link to="/">Home</Link>
            <Link to="/recipes">Recipes</Link>
        </div>

    );

}

export default AddNewRecipes;