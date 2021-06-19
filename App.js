import React from 'react';
import './App.css';
import Home from './Home/Home';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import SearchPage from './SearchPage/SearchPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
     return (
          <div className="App">
               <Router>
                    <Header />
                    <Switch>
                         <Route path='/search'>
                              <SearchPage />
                         </Route>
                         <Route path='/'>  
                              <Home />
                         </Route>
                    </Switch>
                    <Footer />
               </Router>
          </div>

     );
}

export default App;
