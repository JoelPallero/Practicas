import React, { useState } from 'react';
/* Components */
import './header.css';
import HeaderCaps from '../header-caps/header-caps.jsx';
import CreateButtonDarkMode from '../create-button-img/create-button-img.jsx';
import ProfilePhoto from '../profile-photo/profile-photo';
/* Images */
import Photo from '../../assets/profile-photo.png';
import Moon from '../../assets/icons/moon.svg';
import Sun from '../../assets/icons/sun.svg';

const Header = () => {
  const [darkClasses, setDarkClasses] = useState("dark-mode-icon");
  return (
    <header className="header container">
        <section className="skin">
            <div className="logo" id="logo">
                <ProfilePhoto
                  aClass="logo-img-container"
                  src={Photo}
                  photoClass="logo-img"
                />
                <HeaderCaps
                  resume=""
                />
            </div>
            <div className="bg-mode" id="bg-mode">
              <CreateButtonDarkMode
                src={Moon}
                alt="dark mode"
                btImgClass={darkClasses + " moon"}
              />
              <CreateButtonDarkMode
                src={Sun}
                alt="light mode"
                btImgClass={darkClasses + " sun"}
              />
            </div>
        </section>
    </header>
  );
}

export default Header;