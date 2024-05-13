import React from 'react';
import './profile-photo.css';

const ProfilePhoto = ({aClass, src, photoClass}) => {
    return(
        <a href="/" className={aClass}>
            <img loading="lazy" src={src} alt="Profile Photo" className={photoClass}/>
        </a>
    );
};

export default ProfilePhoto;