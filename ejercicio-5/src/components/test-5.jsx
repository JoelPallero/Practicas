import react, {useState} from 'react'


const Test5 = () => {

    const [suma, setSuma] = useState(0);
    const [a, setA] = useState(5);
    const [b, setB] = useState(3);

    
    const result = (a, b) => {
        return a * b;
    }

    const handleClick = () => {
        const resultado = result(a, b);
        setSuma(resultado);
    }
    
    console.log(a, b)

    return(
        <>
            <h1>{suma}</h1>
            <button onClick={handleClick}>Sumar</button>       
        </>
    );
}

export default Test5;