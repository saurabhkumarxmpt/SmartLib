import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/Home';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
const App=()=>{
  return(
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </>
  )
}

export default App