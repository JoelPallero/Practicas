import React from 'react'
import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

const App = () => {

    const {fact, refreshFact} = useCatFact()
    const {imgUrl} = useCatImage({fact})

    const handleClick = async () => {        
        refreshFact()
    }

    return (
        <main className="main">
            <h1>Cats Image Fact</h1>

            {fact && <p>{fact}</p>}
            {imgUrl && <img src={imgUrl} alt={`Image with the first word for ${fact}`}/>}

            <button onClick={handleClick}>Get new fact</button>

        </main>
    );
}

export default App;