/*
PascalCase
camelCase
snake_case
kebab-case

Cada componente tiene que estar escrito en pascal case.
Asi puede diferenciar entre componentes o elementos html.*/

import React from 'react';
import './create-button-link.css';

const CreateButtonLink = ({text, href, buttonClass, target, imgBoolean, src, alt, imgClass}) => {

    return (
        <a target={target} href={href} className={buttonClass}>
            {text}
            {imgBoolean && <img src={src} alt={alt} title={alt} className={imgClass}/>}
        </a>
    );
};

export default CreateButtonLink;
