import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './pages/categories';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/categories'} element={<Categories />} />
        </Routes>
    </div>
  );

}

export default App;
