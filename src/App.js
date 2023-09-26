import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/HomePage/HomePage';
import ViewCerti from './pages/ViewCerti/ViewCerti';
import InstituteReg from './pages/InstituteReg/InstituteReg';
import DenseAppBar from './pages/Navbar/Navbar';

import DisplayCerti from './pages/DisplayCerti/DisplayCerti';
import Generatecerti from './pages/Generatecerti/Generatecerti';


function App() {
  return (
    <div>
      <DenseAppBar/>
      <Routes>
        <Route path='/' element = { <Home/> } exact />
        <Route path='/view' element = { <ViewCerti/> } exact/>
        <Route path='/institute' element = { <InstituteReg/> } exact />
        <Route path='/display' element = { <DisplayCerti/> } exact />
        <Route path='/generatecerti' element = { <Generatecerti/> } exact />
      </Routes>
    </div>
  );
}

export default App;