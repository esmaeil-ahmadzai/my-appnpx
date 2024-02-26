import React from "react";
import './Navbar.css'
class Navbar extends React.Component{
    render(){
        return(
        <div className="">
<nav class="navbar navbar-expand-lg bg-body-tertiary  ">
  <div class="container nav">
    <a class="navbar-brand" href="#"><h2 className="title">Portpholio</h2></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " >
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">  
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#"> <h5>about</h5></a>
        </li>
        <li class="nav-item ">
          <a class="nav-link " href="#"> <h5>Skills</h5></a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link " href="#" aria-disabled="true"> <h5>my best project</h5></a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" aria-disabled="true"><h5>contect me</h5></a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" aria-disabled="true"><h5>my best Portpholio</h5></a>
        </li>
      </ul>
      <form class="d-flex" role="search">
      </form>
    </div>
  </div>
</nav>
        </div>
        )
    }
}



export default Navbar