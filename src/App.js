import React from 'react'
import Nav from './components/navbar/nav.jsx'
import './css/bootstrap.min.css'
import './custom.css'
import Links from './components/links/links.jsx'
import Body from './components/body/content.jsx'


function App() {
  return (
    <div className="App">
      <section className="main-home">
        <Nav/>
        <Links/>
        <Body/>
      </section>
      <section className="main-home" style={{backgroundColor:'white'}}>
       <span >LOADING</span>
      </section>
      
    </div>
  );
}

export default App;
