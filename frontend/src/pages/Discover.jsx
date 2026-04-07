import React from 'react';
import { useEffect, useState } from "react";


import DiscoverUser from '../components/DiscoverUser';

const Discover = () => {

    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/portfolio/user/69b99ca38960d8a32678a2bf")
        .then(res => res.json())
        .then(data => setPortfolios(data))
        .catch(err => console.error(err));
    }, []);


  return (
    <div>
    
       <form className='search-bar'>
        <input
        type='text'
        placeholder='Find A Programmer'
        className='search-input'
        //value=import eaach item here
        //onChange={(e) => setSearchTerm(e.target.value)}
        />
        
       </form>
       
        {portfolios.length === 0 ? (
            <div>
            <h3>There are no portfolios at the moment. Check that you are connected to the internet</h3>
        
             <div className="discover-users-list">
            
            <DiscoverUser />
            <DiscoverUser />
            <DiscoverUser />
            <DiscoverUser />
            <DiscoverUser />
            <DiscoverUser />
            <DiscoverUser />
            <DiscoverUser />
            <DiscoverUser />

            </div>
            </div>
            
        ) : (
            portfolios.map((portfolio, index) =>
            <div key={index}>
                <DiscoverUser />
            </div>
            )
        )}
        

        </div>

    
  )
}

export default Discover