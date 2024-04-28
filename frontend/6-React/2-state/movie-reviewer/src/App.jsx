import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import {navLinks} from "./assets/data/navLinks";
import STORE from "./assets/data/STORE";

import './assets/styles/reset.css';
import './assets/styles/global.css';

function App() {
  return (
    <div className="container">
      <Header links = {navLinks} />
      <Main store = {STORE}/>
      <Footer />
    </div>
  );
}

export default App;