import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/HomePage/HomePage';
import InstituteReg from './pages/LoginForm/InstituteReg';
import DenseAppBar from './pages/Navbar/Navbar';
function App() {
  return (
    <div>
      <DenseAppBar/>
      <Routes>
        <Route path='/' element = { <Home/> } exact />
        <Route path='/institute' element = { <InstituteReg/> } />
      </Routes>
    </div>
  );
}

export default App;
