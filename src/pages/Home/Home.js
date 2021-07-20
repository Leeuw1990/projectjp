import React from 'react';
import jpImage from '../../assets/jpmuziekmaken.jpg';
import './home.css'

function Home() {
    return(
        <div className='home'>
            <img className='picture' alt='foto van jp' src={jpImage}/>
        </div>
    );
}

export default Home;