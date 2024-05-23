import React, {useState, useEffect} from 'react'

export default function useCatImage({ fact }) {
    const [imgCat, setImgCat] = useState();
    

    /* useEffect al momento en el que el useEffect anterior actualiza el estado de fact, y asi traer la imagen que requerimos en este segundo useEffect */
    useEffect(() => {
        if(!fact) return 

        const firstWord = fact.split(' ', 1)
        const ENDPOINT_IMAGE = `https://cataas.com/cat/says/${firstWord}`

        fetch(ENDPOINT_IMAGE)
            .then(data => {
                const { url } = data;
                setImgCat(url);
            });
    }, [fact]);

    return { imgCat }
} //Devuelve la imagen del gato pasandole el hecho