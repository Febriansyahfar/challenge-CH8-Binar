import { Routes, Route,} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//UI
import Navigation from './Components/Navbar';

//Pages
import Create from './Pages/Create';
import Edit from './Pages/Edit';
import Home from './Home';
import Search from './Pages/Search';




function App() {
  return (
    <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/create" element={<Create />}/>
          <Route path="/edit" element={<Edit />}/>
          <Route path="/search" element={<Search />}/>
        </Routes>
    </div>
  );
}

export default App;