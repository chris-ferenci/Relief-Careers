import React from 'react';
import Home from './pages/Home';
import "./App.css";
import Landing from './pages/Landing';

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return(

    <div id="grid-container">
    <Home />
  </div>
     

   )

}

function hitAPI () {
  fetch('https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=jobs').then(res => res.json().then((json_res) => {
  }))
}

export default App;
