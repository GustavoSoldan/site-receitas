import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './Pages/Home';
import Recipes from './Components/RecipeSpecific';
import AddNewRecipes from './Pages/AddNewRecipes';
import Error from './Pages/Error';

{/*import Header from './components/Header';*/}

function RoutesApp(){
    return(
        <BrowserRouter>
            {/*<Header/>*/}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/recipes" element={<Recipes/>}/>
                <Route path="/addnewrecipe" element={<AddNewRecipes/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;