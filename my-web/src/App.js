import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from "./components/navbar.jsx";
import Contact from "./components/contact.jsx";
import About from "./components/about.jsx";
import DestineContainer from "./components/destineContainer.jsx";
import Home from "./components/home.jsx";
import Footer from "./components/footer";






function App() {
  return (
  	<Router>
    <div>
    <Route path = "/" component = {NavBar}/>
    <Route exact path = "/" component = {Home} />
    <Route path = "/contact" component = {Contact} />
    <Route path = "/about" component = {About} />
    <div className = "ContenedorDiv">
    <Route path = "/destines" component = {DestineContainer} />
    </div>
    <Route path = "/destines" component = {Footer}/>
    </div>
    </Router>
  );
}

export default App;
