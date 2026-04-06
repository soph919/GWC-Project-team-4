import React from 'react';
import { useEffect, useState } from "react";

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Discover = () => {

    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5173/portfolio/discover")
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
        //value=import earch therm here
        //onChange={(e) => setSearchTerm(e.target.value)}
        />
        
       </form>
       
        {portfolios.length === 0 ? (
            <div>
            <h3>There are no portfolios at the moment. Check that you are connected to the internet</h3>
        
             <div className="discover-users-list">
            <div className="other-user">
                <div className="title">
                    <img src="images/blank_avatar.png" alt="avatar"/>
                    <div>
                        <h3>Name Here</h3>
                        <h4>Description</h4>
                    </div>
                </div>
            <p>Lorem impsum idk anymore anyway hire me</p>
            </div>
             <div className="other-user">
                <div className="title">
                    <img src="images/blank_avatar.png" alt="avatar"/>
                    <div>
                        <h3>Name Here</h3>
                        <h4>Description</h4>
                    </div>
                </div>
            <p>Lorem impsum idk anymore anyway hire me</p>
            </div>
             <div className="other-user">
                <div className="title">
                    <img src="images/blank_avatar.png" alt="avatar"/>
                    <div>
                        <h3>Name Here</h3>
                        <h4>Description</h4>
                    </div>
                </div>
            <p>Lorem impsum idk anymore anyway hire me</p>
            </div>
             <div className="other-user">
                <div className="title">
                    <img src="images/blank_avatar.png" alt="avatar"/>
                    <div>
                        <h3>Name Here</h3>
                        <h4>Description</h4>
                    </div>
                </div>
            <p>Lorem impsum idk anymore anyway hire me</p>
            </div>
             <div className="other-user">
                <div className="title">
                    <img src="images/blank_avatar.png" alt="avatar"/>
                    <div>
                        <h3>Name Here</h3>
                        <h4>Description</h4>
                    </div>
                </div>
            <p>Lorem impsum idk anymore anyway hire me</p>
            </div>

            </div>
            </div>
            
        ) : (
            portfolios.map((portfolio, index) =>
            <div className="other-user" key={index}>
                <div className="title">
                    <img src="images/blank_avatar.png" alt="avatar"/>
                    <div>
                        <h3>{portfolio.portfolio_name}</h3>
                        <h4>{portfolio.template_type}</h4>
                    </div>
                </div>
            <p>Lorem impsum idk anymore anyway hire me</p>
            </div>
            )
        )}
        

        </div>

    
  )
}

export default Discover