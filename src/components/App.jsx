import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Welcome from './Welcome';
import AboutUs from './AboutUs';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/about' component={AboutUs} />
        <Route component={Error404} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
