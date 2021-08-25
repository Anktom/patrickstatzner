import React, { Component } from "react";
import './nav.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


export default class Nav extends Component {
  constructor(){
    super();
     this.state={
        show:true,

     }
   } 
  render() {
    return (
      
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand text-info" href="#">patrick.statzner( )</a>
        <button className="navbar-toggler border border-info text-info" onClick={ ()=>{this.setState({show: !this.state.show}) } }>
            {this.state.show ? <MenuIcon/> : <CloseIcon/>}
        </button>
        
        <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-light" href="#">.Hello</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">.About me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">.Contact me</a>
            </li>
            
          </ul>
        </div>
      </nav>
    
    )


  }



}
