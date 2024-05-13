Este codigo es para entender el punto de entrada de nuestra app, sin crear un entorno todo armado y preparado para codificar


npm create vite@latest
nombre-project
vanilla
javascript
npm i @vitejs/plugin-react -E
npm install react react-dom -E

crear archivo vite.config.js en raiz de proyecto con esto: 

import {defineConfig} from "vite"
/* importar el plugin que acabamos de instalar */
import react from '@vitejs/plugin-react'

/* exportamos el define con el plugin instalado: react */
export default defineConfig({
    plugin: [react()]
});

el main.js elimitarle todo y poner una prueba de renderizado y cambiar de .js a .jsx:
import React from 'react'
import {createRoot} from 'react-dom/client'

const root = createRoot(document.getElementById('app'))
root.render(<h1>Hello, World!</h1>)

npm run dev

No deberia haber problemas ahora.

una vez mostramos un helloworld hay que instalar lintrc para el testing:
En el package.json:

"eslintConfig": {
    "extends": "./node_modules/standard/esLintrc.json"
}

/* Prueba tecnica */

APIs: 

- Facts Random: https://catfact.ninja/fact
- Image random: https://cataas.com/cat/says/hello

Recupera un hecho aleatorio de gatos de la primera API y muestra una imagen de un gato con la primera palabra del hecho recuperado usando la segunda API.



Primero separar la prueba en secciones pequeñas de codigo. Compartimentacion:

1- Recupera un hecho aleatorio de gatos de la primera API
2- Recuperar primera palabra del hecho
3- muestra una imagen de un gato con la primera palabra


Antes de codificar, es necesario acceder a los enlaces, para saber si esta todo ok.
Tambien poruqe puede que nos den una documentacion y de ahi lograr crear un enlace que funcione como api para sacar los datos que nos soliciten.


