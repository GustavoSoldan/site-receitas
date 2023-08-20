import {Link} from 'react-router-dom';

function Home(){
    return(
        <div>
            <h1>Master Chef!</h1>

            <Link to="/recipes">Recipes</Link>
            <Link to="/addnewrecipe">Add a New Recipe</Link>
        </div>

    );

}

export default Home;