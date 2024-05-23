import React, {useState, useEffect} from 'react'

const ENDPOINT_FACT = 'https://catfact.ninja/fact'
const ENDPOINT_GIF = 'https://g.tenor.com/v1/search?q='
const API_KEY = 'LIVDSRZULELA'


const App = () => {

    const [fact, setFact] = useState();
    const [randomGif , setRandomGif] = useState();


    useEffect(()=>{
        fetch(ENDPOINT_FACT)
        .then(res => res.json())
        .then(data => {
            const { fact } = data;
            setFact(fact);
        })
    }, [])

    useEffect(() => {
        if(!fact) return
        
        const threeWords = fact.split(' ', 3).join('-');
        fetch(`${ENDPOINT_GIF}${threeWords}&key=${API_KEY}&media_filter=GIF&limit=1`)
            .then(data => data.json())
            .then(response => {
                const url = response.results[0].url;
                setRandomGif(url)
            })
        
        
    }, [fact])
    

    return(
        <>
            <main className="main">
                <h1>Random Fact with a Gif</h1>
                <article className="article">
                    {randomGif && <img src={randomGif} alt={`RandomGif from the fact: ${fact}`} accept="image/gif"/>}
                    {fact && <p>{fact}</p>}
                </article>
            </main>        
        </>
    );
}

export default App;