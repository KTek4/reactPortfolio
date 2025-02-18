// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import NavTabs from './components/Navigation'

// import { Outlet } from 'react-router-dom';

// function App() {
//   return (
//     <>
//       <Nav />
//       <Outlet />
//     </>
//   );
// }

// export default App
import React from 'react'
import Contact from './components/Contact/ContactPage'

const App = () => {
  return (
    <div>
      <NavTabs />
     
    </div>
  )
}

export default App