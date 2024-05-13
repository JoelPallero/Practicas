/* Custom Hook para devolver la imagen dado un parametro que en este caso es la primera palabra del hecho de la primera api 
Al ser un Hook:
    Tiene que comenzar con use.
    No puede estar dentro de un if.
    No puede estar dentro de un while.
    Tiene que ser llamado dentro del cuerpo del componente.
    No pueden ser nombrados de forma que se sepa lo que hace por dentro

    En una funcion no se puede llamar un hook react, pero desde un hook si se puede llamar cualquier hook de react.



Normalmente los useEffect tienen carga de logica, por lo que generalmente va a ser mejor tener un hook que maneje cada useEffect. Es para compartimentar, limpiar codigo y que no sea logica visible. Esto nos sirve tambien para poder reutilizarlo desde otra componente.

    */

import { useEffect, useState } from "react";

const ENDPOINT_IMG_URL = 'https://cataas.com/cat/says/'

export function useCatImage ({fact}) {
    const [imgUrl, setImgUrl] = useState();
    useEffect(() => {
        if (!fact) return;

        const firstWord = fact.split(' ', 1);
        
        fetch(`${ENDPOINT_IMG_URL}${firstWord}`)
            .then(res => {
                const {url}  = res;
                setImgUrl(url);
            }
        )
    },[fact]);

    return {imgUrl}
}