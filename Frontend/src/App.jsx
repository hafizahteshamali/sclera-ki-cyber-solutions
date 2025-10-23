import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Routes/AppRoutes'

const App = () => {
  return (
    <>
     <BrowserRouter basename="/predictive-maintainance">
      <AppRoutes />
     </BrowserRouter> 
    </>
  )
}

export default App