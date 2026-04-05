import React, { useEffect, useState } from 'react'
/*
const [User, setUser] = useState(null);

useEffect(() => {
    fetch("")
})
    */
const UserProfileTempTwo = () => {
  return (
    <div>
        <div className='user-title'>
            <h1><b>Jane Doe</b></h1>
            <h2>Programmer - Digital Artist</h2>
            <h3>Digital Media Degree — University of Central Florida</h3>
        </div>
        <div className="about">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img src=",,," />
        </div>

        <div className='past-experience'>
            <div className="info-block">
            <h1 className="info-title">Title</h1>
            <h2 className="info-company">Company Name</h2>
            <h3 className="info-date">Date</h3>
            <div className="info-des">
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.</p>
            </div>
            </div>
            <div className="info-block">
            <h1 className="info-title">Title</h1>
            <h2 className="info-company">Company Name</h2>
            <h3 className="info-date">Date</h3>
            <div className="info-des">
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.</p>
            </div>
            </div>
        </div>

        <div className='technical-skills'>
             <div class="info-block">
            <h1 class="info-title">Title</h1>
            <ul class="info-list">
                <li>List</li>
                <li>of</li>
                <li>items</li>
            </ul>
        </div>
          <div class="info-block">
            <h1 class="info-title">Title</h1>
            <ul class="info-list">
                <li>List</li>
                <li>of</li>
                <li>items</li>
            </ul>
        </div>

        <div className='project-list'>
            
            <div class="preview-project">
            <img src="images/blank_avatar.png" />
            <div class="project-info">
                <h3>Title</h3>
                <p class="project-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div class="materials">
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </div>
        </div>
        <div class="preview-project">
            <img src="images/blank_avatar.png" />
            <div class="project-info">
                <h3>Title</h3>
                <p class="project-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div class="materials">
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </div>
        </div>
        <div class="preview-project">
            <img src="images/blank_avatar.png" />
            <div class="project-info">
                <h3>Title</h3>
                <p class="project-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div class="materials">
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </div>
        </div>
        <div class="preview-project">
            <img src="images/blank_avatar.png" />
            <div class="project-info">
                <h3>Title</h3>
                <p class="project-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div class="materials">
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </div>
        </div>
        </div>

    </div>
  </div>
  )
};

export default UserProfileTempTwo

