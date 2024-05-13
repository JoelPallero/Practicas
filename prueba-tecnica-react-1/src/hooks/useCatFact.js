/* Tenemos un metodo lo que hace es recuperar datos y actualizar datos internos y asi cuando se haga un click, es pedir bajo demanda, que se actualice el estado interno el custom hook. Siempre evitemos exportar la actualizacion del estado porque  */

import { useEffect, useState } from "react"
import { getRandomFact } from "../services/facts";

export function useCatFact (){

    const [fact, setFact] = useState();

    const refreshFact = () => {        
        getRandomFact().then(newFact => setFact(newFact))
    }
    useEffect(refreshFact, [])

    return {fact, refreshFact}
}