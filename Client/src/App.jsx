import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/Home';
import Login from './components/authentication/Login';

const App=()=>{
  return(
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </>
  )
}

export default App