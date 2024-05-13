import React from 'react';
import './create-button-download.css'


const CreateButtonDownload = ({text, href, dnldName, buttonClass, booleanImg, src, alt, dnldClass}) => {

    return (        
        <a href={href} download={dnldName} className={buttonClass}>
            {text}
            {booleanImg && <img loading="lazy" src={src} alt={alt} title={alt} className={dnldClass}/>}
        </a>
    );
}


export default CreateButtonDownload;