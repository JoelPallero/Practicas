import React from 'react';
/* Styles */
import './profile.css';
/* Components */
import ProfilePhoto from '../profile-photo/profile-photo';
import Introduction from '../profile-introduction/profile-introduction'
import MailContainer from '../profile-mail-container/profile-mail-container'

/* Images */
import Photo from '../../assets/profile-photo.png';

const Profile = () => {
    return(
        <section className="profile">
            <div className="profile-photo">
                <ProfilePhoto
                    aClass=""
                    src={Photo}
                    photoClass="joel-photo"
                />
            </div>
            <Introduction />
            <MailContainer />
        </section>
    );
}

export default Profile;