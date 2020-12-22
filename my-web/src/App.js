import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar.jsx";
import Contact from "./components/contact.jsx"
import About from "./components/about.jsx"
import DestineContainer from "./components/destineContainer.jsx"
import Home from "./components/home.jsx"
import { BrowserRouter as Router, Route} from 'react-router-dom';



function App() {
  return (
  	<Router>
    <div>
    <img src = "http://imgfz.com/i/wzDp4dx.jpeg" className = "images"/>
    <Route path = "/" component = {NavBar} />
    <Route exact path = "/" component = {Home} />
    <Route path = "/contact" component = {Contact} />
    <Route path = "/about" component = {About} />

    <div className = "ContenedorDiv">
    <Route path = "/destines" render = {()=> <DestineContainer/>} />
    </div>


    </div>
    </Router>
  );
}

export default App;
