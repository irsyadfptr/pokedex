import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import PokemonDetailPage from './pages/PokemonDetailPage';
import NotfoundPage from './pages/NotfoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path="/pokemon/:id" element={<PokemonDetailPage/>}/>
        <Route path="*" element={<NotfoundPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
