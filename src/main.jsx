import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AnimatedCursor from 'react-animated-cursor'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimatedCursor
      innerSize={12}
      outerSize={32}
      color='255, 168, 0'
      outerAlpha={0.3}
      innerScale={1}
      outerScale={2.5}
      clickables={['a', 'button', '.link', 'input', 'textarea']}
      showSystemCursor={false}
      zIndex={9999}
    />
    <App />
  </React.StrictMode>,
)