import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Products from './pages/Products';
// import Home from './pages/Home';
// import Search from './pages/Search';
// import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
      <Route path="/" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;