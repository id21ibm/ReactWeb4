import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Video from "./pages/Video";
import Credit from "./pages/Credit";

import Header from "./components/Header";
import Footer from "./components/Footer";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/video' element={<Video/>} />
          <Route path='/credit' element={<Credit/>} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
