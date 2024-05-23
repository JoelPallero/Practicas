const ENDPOINT_FACT = 'https://catfact.ninja/fact';

export default async function getCatImage(){
    const res = await fetch(ENDPOINT_FACT);
    const data = await res.json();
    const { fact } = data;
    return fact;
}