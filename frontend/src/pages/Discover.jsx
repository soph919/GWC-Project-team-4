import React from 'react';
import { useEffect, useState } from "react";


import DiscoverUser from '../components/DiscoverUser';

const Discover = () => {

    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {

        const fetchUsers = async () => {
            try {
                const res = await fetch("http://localhost:5001/portfolio/discover")
                
                const response = await res.json();

                console.log("DISCOVER RESPONSE:", response);
setPortfolios(response);
                

                setPortfolios(response)
            } catch (error) {
                console.log("Error fetching data :( ")
            }
        }

        fetchUsers();
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
                <DiscoverUser portfolio={portfolio}/>
            </div>
            )
        )}
        

        </div>

    
  )
}

export default Discover