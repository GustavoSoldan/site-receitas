import {Link} from 'react-router-dom';
import Style from '../../assets/style.css';
import React, { useEffect, useState } from 'react';
import Api from '../../services/api';
import Header from '../../Components/Header/'

function Home(){
    return(
        <>
            <Header/>
            
            <Api/>
        </>



    );

}

export default Home;