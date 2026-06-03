import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import UE2 from './UE2.jsx'

createRoot(document.getElementById('root')).render( <StrictMode >
    <UE2/>
    </StrictMode>,
)