import React from 'react';

/* Styles */
import './job-experience.css';

/* Components */
import CreateNewJob from '../create-new-job/create-new-job';
import CreateButtonImg from '../create-button-img/create-button-img';

/* Json */
import JobsAndTools from './jobs.json'

/* Images */
import Case from '../../assets/icons/case.svg';

const JobExperience = () => {
    return (
        <div className="experience">
            <div className="header-main">
                <h2 className="title-section">
                    Experience
                </h2>
                <CreateButtonImg
                    src={Case}
                    alt="Briefcase"
                    btImgClass="experience-icon"
                />
            </div>

            {/* Iterar sobre cada trabajo y pasar los datos como propiedades a CreateNewJob */}
            {JobsAndTools.Jobs.map((job, index) => (
                <CreateNewJob key={index} job={job} tools={JobsAndTools.tools} />
            ))}
        </div>
    );
};

export default JobExperience;
