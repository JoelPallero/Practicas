import React from 'react'
import './main.css'
import { createRoot } from 'react-dom/client'
import App from './src/App'

const root = createRoot(document.getElementById('app'))

root.render(
  <App/>
)