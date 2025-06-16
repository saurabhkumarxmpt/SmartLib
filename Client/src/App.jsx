import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/Home';

const App=()=>{
  return(
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </>
  )
}

export default App