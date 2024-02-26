import React from "react";
import './Navbar.css'
class Navbar extends React.Component{
    render(){
        return(
        <div className="">
<nav class="navbar navbar-expand-lg bg-body-tertiary container   ">
  <div class="container nav me-auto">
   
    <div class="collapse navbar-collapse " >
      <ul class="navbar-nav  me-auto mb-2 mb-lg-0  ">  
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="../about/About.js"> <h5>About</h5></a>
        </li>
        <li class="nav-item  ">
          <a class="nav-link " href="./about/About.js/section"> <h5>Skills</h5></a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link " href="#" aria-disabled="true"> <h5>My  projects</h5></a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" aria-disabled="true"><h5>Contect me</h5></a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" aria-disabled="true"><h5>My  Portpholio</h5></a>
        </li>
        <li>
          
        </li>
      </ul>
      <form class="d-flex" role="search">
      </form>
      <h2 className="tile">Portpholio</h2>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </div>
  </div>
</nav>
        </div>
        )
    }
}



export default Navbar