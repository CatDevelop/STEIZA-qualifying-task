import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TopLine} from "./components/TopLine";
import {NavBar} from "./components/NavBar";
import {Footer} from "./components/Footer";
import {Homepage} from "./pages/Homepage";
import {Notfoundpage} from "./pages/Notfoundpage";
import { Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <TopLine/>
            <NavBar/>
            
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path={"*"} element={<Notfoundpage/>} />
            </Routes>
            
            <Footer/>
        </div>
    );
}

export default App;

