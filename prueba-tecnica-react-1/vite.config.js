import {defineConfig} from "vite"
/* importar el plugin que acabamos de instalar */
import react from '@vitejs/plugin-react'

/* exportamos el define con el plugin instalado: react */
export default defineConfig({
    plugin: [react()]
});

