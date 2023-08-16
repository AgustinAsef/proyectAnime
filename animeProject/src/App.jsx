import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomeLogic from './logic/home/HomeLogic'
import HomeDePrueba from './views/home/HomeDePrueba'
import LogInForm from './views/forms/SinginForm'

function App() {

  return (
    <>
    <Routes>
      <Route path='/login' element={<LogInForm/>}/>
      <Route path='/home' element={<HomeLogic/>}/>
      <Route path='/homePrueba' element={<HomeDePrueba/>}/>
      <Route path="/*" element={<HomeLogic />} />
    </Routes>
    </>
  )
}

export default App
