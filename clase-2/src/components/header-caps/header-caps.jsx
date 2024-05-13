import React, { useState } from 'react';
import './header-caps.css';
import './header-caps.js'
import CreateButtonLink from '../create-button-link/create-button-link';
import CreateButtonDownload from '../create-button-download/create-button-download';
import linkedin from '../../assets/icons/linkedin.svg';
import gh from '../../assets/icons/gh.svg';
import download from '../../assets/icons/download.svg';
import resume from '../../assets/documents/resume.pdf';

const HeaderCaps = ({resumeText}) => {
    const [linkClasses, setLinkClasses] = useState("sphere-link profile-links");
    return (
        <div className="caps">
            {/* creating media profile buttons */}
            <CreateButtonLink
                text=""
                href="https://www.linkedin.com/in/joel-pallero/"
                buttonClass={linkClasses + " linkedin"}
                target="_blank"
                imgBoolean={true}
                src={linkedin}
                alt="linkedin"
                imgClass = ""
            />
            <CreateButtonLink
                text=""
                href="https://github.com/JoelPallero"
                buttonClass={linkClasses + " github"}
                target="_blank"
                imgBoolean={true}
                src={gh}
                alt="GitHub"
                imgClass = ""
            />

            {/* Creating resume button */}
            <CreateButtonDownload
                text={resumeText}
                href={resume}
                dnld="resume-joel-pallero.pdf"
                buttonClass="resume"
                booleanImg={true}
                src={download}
                alt="Download Resume"
                dnldClass="download-icon"
            />
        </div>
    );
};

export default HeaderCaps;
