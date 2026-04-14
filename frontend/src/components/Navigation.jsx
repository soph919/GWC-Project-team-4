import React from 'react'
import blankAvatar from "../images/blank_avatar.png";

const Navigation = () => {
  return (
    <div>
        <nav className="top-nav">
            <ul className="nav">
                <div className="nav-left">
                <li><img id="nav-profile" src={blankAvatar} alt='Profile Picture' /></li>
                <li><a href="/">Home</a></li>
                <li><a href="/discover">Discover</a></li>
                <li><a href="/user">Portfolio</a></li>
                </div>
                <div className="nav-right">
                <li><a href="/templates">Templates</a></li>
                <li>Settings</li>
                </div>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation