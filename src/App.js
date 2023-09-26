import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/HomePage/HomePage';
import ViewCerti from './pages/ViewCerti/ViewCerti';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element = { <Home/> } exact />
        <Route path='/view' element = { <ViewCerti/> } exact/>
      </Routes>
    </div>
  );
}

export default App;
