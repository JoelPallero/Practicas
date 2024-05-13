import React from 'react';

/* Styles */
import './create-new-job.css'

/* Components */
import CreateNewToolPack from '../create-new-tool/create-new-tool';
import CreateButtonLink from '../create-button-link/create-button-link';


/* Images */


const CreateNewJob = ({ job, tools }) => {
    const { name, job: jobTitle, url, description, webImg, tools: jobTools } = job;

    return (
        <article className="dev-job">
            <div className="jgeneral-title">
                <h3 className="job-title">{jobTitle} | {name}</h3>
            </div>
            <div className="job-info">
                <div className="client-web">
                    <CreateButtonLink
                        text=""
                        href={url}
                        buttonClass="link-img"
                        target="_blank"
                        imgBoolean={true}
                        src={webImg}
                        alt={name}
                        imgClass="client-web-img"
                    />
                </div>
                <div className="client-info">
                    <p className="paragraph c-info">
                        {description}
                    </p>
                    <div className="c-technology">
                        {/* Iterar sobre las herramientas y mostrar los detalles utilizando el JSON de herramientas */}
                        <CreateNewToolPack tools={jobTools.map(toolName => tools[toolName])} />
                    </div>
                    <CreateButtonLink
                        text="Go to"
                        href={url}
                        buttonClass="c-button"
                        target="_blank"
                        imgBoolean={true}
                        src="../src/assets/icons/link.svg"
                        alt={name}
                        imgClass="svg-link"
                    />
                </div>
            </div>
        </article>
    );
};

export default CreateNewJob;