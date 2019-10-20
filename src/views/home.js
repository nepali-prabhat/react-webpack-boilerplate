import React,{ useEffect, useState } from 'react';
import {useGsap} from 'hooks/useGsap';
import 'scss/_home.scss';

const Home = (props)=>{

    const tl = useGsap();

    return (
        <div className="home container">
            {tl}
        </div>
    );
}

export default Home;