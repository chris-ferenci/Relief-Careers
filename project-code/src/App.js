import React from 'react';
import Home from './pages/Home';
import "./App.css";
import Landing from './pages/Landing';

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return(

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}>
          </Route>
          <Route path="/browsejobs" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
     

   )

}

function hitAPI () {
  fetch('https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=jobs').then(res => res.json().then((json_res) => {
  }))
}

export default App;
