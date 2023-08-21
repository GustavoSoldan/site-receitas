import {Link} from 'react-router-dom';

import React from "react";
import './style.css';
const Recipe = ({title,image}) =>{
    return(
        <div className={'recipe'}>
            <h1>{title}</h1>
  
            <img className={'image'} src={image} alt=""/>
  
        </div>
    );
  
}
export default Recipe;