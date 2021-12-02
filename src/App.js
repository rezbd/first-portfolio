import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import AntiqueCars from './components/Details/AntiqueCars/AntiqueCars';
import TravelSylhet from './components/Details/TravelSylhet/TravelSylhet';
import EasternAyurveda from './components/Details/EasternAyurveda/EasternAyurveda';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/antique">
            <AntiqueCars></AntiqueCars>
          </Route>
          <Route path="/travel">
            <TravelSylhet></TravelSylhet>
          </Route>
          <Route path="/ayurveda">
            <EasternAyurveda></EasternAyurveda>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
