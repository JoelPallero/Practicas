import React, { useState } from 'react';
import './main.css';
import Profile from '../profile/profile';
import JobExperience from '../job-experience/job-experience'

const Main = () => {
    {/* Aqui va el contenido entero del main:
        Profile Presentacion
        Jobs
        About me
        Game*/}
    return (
        <main className="container" id='main'>
            <Profile/>
            <JobExperience/>
        </main>
    );
}

export default Main;