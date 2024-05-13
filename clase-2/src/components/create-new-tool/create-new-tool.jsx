/* Desde aca tengo que hacer una funcion que reciba como parametro un array con el nombre de cada lenguaje o herramienta utilizada para crear el sitio y acorde a eso, haga todos los ButtonImg necesarios */


import React from 'react';

/* Styles */
import './create-new-tool.css';

/* Components */
import CreateButtonImg from '../create-button-img/create-button-img';

/* Images */

const CreateNewToolPack = ({ tools }) => {
    if (!tools || tools.length === 0) {
        return "No hay herramientas registradas.";
    }

    return (
        tools.map((tool, index) => (
            <CreateButtonImg
                key={index}
                src={tool.icon}
                alt={tool.name}
                btImgClass={tool.class + " tech-icons"}
            />
        ))
    );
};

export default CreateNewToolPack;