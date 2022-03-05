import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import HomePage from './pages/HomePage';
import PokemonDetailPage from './pages/PokemonDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        {/* <Route path="/pokemon/:id" element={<PokemonDetailPage/>}/> */}
        <Route path="*" element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
