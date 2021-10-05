import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Header from './Component/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Courses from './Component/Courses/Courses';
import Instuctors from './Component/Instucters/Instuctors';
import AboutUs from './Component/AboutUs/AboutUs';
import NotFound from './Component/NotFound/NotFound';
import HomePageCourse from './Component/HomePageCourse/HomePageCourse';
import Footer from './Component/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <Route path="/home" >
            <Home></Home>
          </Route>
          <Route path="/courses" >
            <Courses></Courses>
          </Route>
          <Route path="/instucters" >
            <Instuctors></Instuctors>
          </Route>
          <Route path="/aboutus" >
            <AboutUs></AboutUs>
          </Route>
          <Route path="*" >
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>


    </div>
  );
}

export default App;
