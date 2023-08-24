import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomeDePrueba from './views/home/HomeDePrueba'
import LogInForm from './views/forms/LogInForm'
import SingInForm from './views/forms/SinginForm'

function App() {

  return (
    <>
    <Routes>
      <Route path='/login' element={<LogInForm/>}/>
      <Route path='/singin' element={<SingInForm/>}/>
      <Route path='/home' element={<LogInForm/>}/>
      <Route path='/homePrueba' element={<HomeDePrueba/>}/>
      <Route path="/*" element={<LogInForm />} />
    </Routes>
    </>
  )
}

export default App
