import React from 'react';
import './App.css';
import Header from './components/Header.js'

let Vimeo = require('vimeo').Vimeo;
let client = new Vimeo("6a8755f63ed9fbccb479a1e77c8a010cf22e7685", "nczEmbIQFEx/kbJxVQTUilrhz+PVadR4hdcifkeaKeYxZ8mvGBDTsHu4VaMeMatLp+l6Dq1mRmbyAOs5547quakXSWYzCjg9yW7f0RaaurUrQO1uLSOqqt4mSI8R6ABk", "1d7d97b404dd014ed70d7eae1369018f");

client.request({
  method: 'GET',
  path: '/users/92457918/videos'
},
  function (error, body, status_code, headers) {
    if (error) {
      console.log(error);
    }

    console.log(body);
  })


// method: 'GET',
//   path: '/tutorial'

function App() {
  return (
    <div className="App">
      <Header />

    </div>
  );
}

export default App;
