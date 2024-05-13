import React from 'react';
import './create-button-img.css';


const createButtonImg = ({src, alt, btImgClass}) => {
    return (        
        <img loading="lazy" src={src} alt={alt} className={btImgClass} title={alt}/>
    );
};

export default createButtonImg;