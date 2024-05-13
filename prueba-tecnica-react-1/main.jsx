import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './src/App.jsx'
import './main.css'

const root = createRoot(document.getElementById('app'))
root.render(
    <App/>
)

/* En vite los archivos .js no estan preparados para funcionar como .jsx, entonces tenemmos que cambiar la extension de nuestro archivo de .js a .jsx al igual que cambiar el src del script del index.html*/