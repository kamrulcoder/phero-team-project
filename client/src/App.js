import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomMenu from './components/CustomMenu/Menu';
import Header from './components/home/header-hasan/Header';
import Home from './pages/home/Home';

function App() {
    return (
        <div className="App">
            <Routes>

                <Route path="/" element={<Home />}></Route>
                <Route path="/menu" element={<CustomMenu />}></Route>
            </Routes>
        </div>
    );
}

export default App;
