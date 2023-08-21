import {Link} from 'react-router-dom';
import './style.css';
function Header(){
    return(
        <div>
            <header>
                <h1>DSWM - II</h1>

                <div className="">
                    <Link to="/">Home</Link>
                    <Link to="/recipes">Recipes</Link>
                    <Link to="/addnewrecipe">Add a New Recipe</Link>
                </div>
            </header>
            
        </div>
    );
}

export default Header;