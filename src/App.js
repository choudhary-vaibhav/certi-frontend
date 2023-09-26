import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/HomePage/HomePage';
import ViewCerti from './pages/ViewCerti/ViewCerti';
import InstituteReg from './pages/LoginForm/InstituteReg';
import DenseAppBar from './pages/Navbar/Navbar';

function App() {
  return (
    <div>
      <DenseAppBar/>
      <Routes>
        <Route path='/' element = { <Home/> } exact />
        <Route path='/view' element = { <ViewCerti/> } exact/>
        <Route path='/institute' element = { <InstituteReg/> } exact />
      </Routes>
    </div>
  );
}

export default App;
