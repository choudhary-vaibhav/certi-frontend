import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/HomePage/HomePage';
import InstituteReg from './pages/LoginForm/InstituteReg';
import DenseAppBar from './pages/Navbar/Navbar';
import ViewCertificate from './pages/ViewCertificate/ViewCertificate';
function App() {
  return (
    <div>
      <DenseAppBar/>
      <Routes>
        <Route path='/' element = { <Home/> } exact />
        <Route path='/institute' element = { <InstituteReg/> } />
        <Route path='/viewcertificate' element = { <ViewCertificate/> } />
      </Routes>
    </div>
  );
}

export default App;
