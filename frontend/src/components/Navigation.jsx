import React from 'react'

const Navigation = () => {
  return (
    <div>
        <nav className="top-nav">
            <ul className="nav">
                <div className="nav-left">
                <li>Image</li>
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