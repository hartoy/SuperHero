
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Switch, Route,  } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import NavbarComp from './components/miNavbar';
import HeroeDetails from './components/HeroeDetails';
import SearchResults  from './components/SearchResults';
import Footer from './components/Footer';
import SinPermiso from './components/sinPermiso';

function App() {
  return (
    <BrowserRouter>
    <div className="myPage" >
    
    
    
     
     
    
     
     <Switch>
     <Route exact path="/" component={Login} />
     <Route exact path="/sinPermiso" component={SinPermiso} /> 


     <div> 
     <NavbarComp/>
     <Route exact path="/" component={Login} />
     <Route path="/home/:id?" component={Home} />
     <Route path="/search-results" component={SearchResults}/>
     <Route path="/heroe-details/:id" component={HeroeDetails} />
     <Footer/>
     </div>
     
    </Switch>
    
    
   
    </div>
   
    
   
   
   </BrowserRouter>
  );
}

export default App;
