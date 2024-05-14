import {createRoot} from 'react-dom/client'
import './main.css'
import App from './src/App'

const root = createRoot(document.getElementById('app'))

root.render(
  <App/>
)