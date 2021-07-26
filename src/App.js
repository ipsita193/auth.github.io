import React from 'react';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Biography from './Pages/Biography';
import Interiors from './Pages/Interiors';
import Events from './Pages/Events';
import Contact from './Pages/Contact';
import Inspirations from './Pages/Inspirations';
import Default from './Pages/Default';
import Navbar from './components/Navbar';

import Profile from './components/Profile';
import TodoList from './components/TodoList';
import { useAuth0 } from '@auth0/auth0-react';
import Footer from './components/Footer';
import {Switch, Route} from 'react-router-dom';



import './App.css';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>
  return (
    
    <div className="App">
 
    
    {/* common navbar for all pages */}
      <Navbar />
    {/*end of common navbar for all pages */}
    
        
 <Profile />
     <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/biography" component={Biography} />
        <Route exact path="/interiors" component={Interiors} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/inspirations" component={Inspirations} />
        <Route path='/todolist' exact component={TodoList} />
        <Route  component={Default} />
     </Switch>
  

    {/* common footer for all pages */}
        <Footer />
    {/*end of common footer for all pages */}
     
    </div>
   
  );
}

export default App;
