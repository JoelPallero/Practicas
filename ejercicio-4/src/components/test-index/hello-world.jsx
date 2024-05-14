import React from "react";

const JelouWorld = ({title, description, urlImage}) => {

    return (
        <>

            <header className="header">
                <h1>{title}</h1>
            </header>
            <div className="description">
                <p>
                    {description}
                </p>
            </div>
            <footer className="footer">
                <img src={urlImage} alt={title}/>
            </footer>


        </>
    );
}

export default JelouWorld;