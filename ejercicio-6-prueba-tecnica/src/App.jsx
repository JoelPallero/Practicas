import React, {useEffect, useState} from "react";
import './App.css'

/* Components */
import getCatImage from "./services/facts.js";
import useCatImage from "./hooks/useCatImage.js";

const App = () => {
    const [fact, setFact] = useState();
    const { imgCat } = useCatImage({fact})

    /* UseEffect al momento de renderizar la pagina */
    useEffect(()=>{
        getCatImage().then(newFact => setFact(newFact));
    },[]);


    const handleClick = async () => {
        const newFact = await getCatImage();
        setFact(newFact);
    }

    return(
        <>
         <main className="main">
            <article className="cat-facts">
                <h2 className="title">Fact</h2>
                {fact && <p className="fact">{fact}</p>}
                {imgCat && <img className="cat-img" src={imgCat} alt={`Cat image from a random cat fact using the first word of the fact: ${fact}`}/>}
                <button className="fact-button" onClick={handleClick}>New Fact</button>
            </article>
         </main>
        </>
    )
}

export default App