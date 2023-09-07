import LogInForm from './components/userDetail/logInForm/LogInForm'
import SingInForm from './components/singInForm/SingInForm'
import Message from './components/message/Message'
import GeneralHome from './components/generalHome/GeneralHome'

import { Routes, Route } from 'react-router-dom' //majeno de rutas con react Router
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/message' element={<Message/>}/>
      <Route path='/login' element={<LogInForm/>}/>
      <Route path='/singin' element={<SingInForm/>}/>
      <Route path='/home' element={<GeneralHome/>}/>
      <Route path="/*" element={<LogInForm />} />
    </Routes>
    </>
  )
}

export default App
