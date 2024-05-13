import React from 'react';
import './profile-introduction.css'
import HeaderCaps from '../header-caps/header-caps.jsx';

const Introduction = () => {
    return (
        <div class="introduction">
            <a href="/" class="site-title">
                <h2 class="title-section">Joel Pallero</h2>
            </a>
            <p class="paragraph">I am a FrontEnd Web developer.</p>
            <HeaderCaps
                resumeText="Resume"
            />
        </div>
    );
};

export default Introduction