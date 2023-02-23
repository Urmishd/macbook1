import React from 'react'
import Sidebar from './components/Sidebar'
import './App.css'
import Profile from './components/Profile'
import Info from './components/Info'
const App = () => {
  return (
    <>
      <div className='container border'>
        <div className='row'>
          <div className="col-1">
            <Sidebar />
            
          </div>

          <div className="col-3">
          <Profile />
          </div>
          <div className="col-8">
            <Info />
          </div>
        </div>
      </div>
    </>
  )
}

export default App