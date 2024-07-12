import React from 'react'
import ReactDOM from 'react-dom/client'
import SidebarContextProvider from './context/SidebarContext.jsx';
import App from './App.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SidebarContextProvider>
      <App />
    </SidebarContextProvider>
  </React.StrictMode>,
)
