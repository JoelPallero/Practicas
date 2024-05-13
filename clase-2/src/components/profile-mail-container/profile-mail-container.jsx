import React from 'react';
/* Styles */
import './profile-mail-container.css';

/* Components */
import CreateButtonImg from '../create-button-img/create-button-img';

/* Images */
import Copy from '../../assets/icons/copy.svg';
import Checked from '../../assets/icons/checked.svg';



const MailContainer = () => {
    return (
        <button className="email-container" id="copy-mail">
            esteban.pallero@gmail.com
            <div className="icons-container">
                <CreateButtonImg
                    src={Copy}
                    alt="copy icon"
                    btImgClass="ck-symbol copy-icon"
                />
                <CreateButtonImg
                    src={Checked}
                    alt="copied icon"
                    btImgClass="ck-symbol check-icon"
                />
            </div>
        </button>
    );
};

export default MailContainer;