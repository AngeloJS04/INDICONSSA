
import Contact from './components/Contact';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        

        <Route path="/" exact component={Inicio} />
        <Route path="/contact" component={Contact} />
        <Route path="/nosotros" component={Nosotros}/>



      </Router>
     


<Footer/>
     </div>
 
  
  );
}

export default App;
