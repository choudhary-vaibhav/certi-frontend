import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/HomePage/HomePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element = { <Home/> } exact />
      </Routes>
    </div>
  );
}

export default App;
