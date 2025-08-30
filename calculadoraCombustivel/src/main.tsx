import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CalculadoraCombustivel from './CalculadoraCombustivel'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CalculadoraCombustivel />
  </StrictMode>,
)
