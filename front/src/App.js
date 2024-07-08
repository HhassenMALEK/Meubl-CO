import React from 'react';

//import des fichiers Js et jsx pour toutes les pages 
import Header from "./components/Header";
import Footer from './components/Footer';
import Home from './pages/Home';
import Produit from './pages/Produit';
import Panier from './pages/Panier';
import Connexion from './pages/Connexion';
import Canap from './pages/Canapes';
import Tables from './pages/Tables';
import Chaises from './pages/Chaises';
import Ranges from './pages/Rangements';
import Lumis from './pages/Luminaires';
import Decos from './pages/Decos';
import Divers from './pages/Divers';


//import router de react pour pouvoir créerles liens entre les pages 
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        {/* la façon de créer les rooters */}
        <Route path='/' element = {<Home/>}/> 
        <Route path='/canapes' element = {<Canap/>}/>
        <Route path='/tables' element = {<Tables/>}/>
        <Route path='/chaises' element = {<Chaises/>}/> 
        <Route path='/luminaires' element = {<Lumis/>}/>
        <Route path='/rangements' element = {<Ranges/>}/> 
        <Route path='/decoration' element = {<Decos/>}/> 
        <Route path='/divers' element = {<Divers/>}/> 
        <Route path='/connexion' element = {<Connexion/>}/>
        <Route path='/panier' element = {<Panier/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;