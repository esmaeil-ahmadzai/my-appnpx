import React from "react";

class Navbar extends React.Component{
    render(){
        return(
        <div>
<nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Portpholio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " >
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">about</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link" href="#">Skills</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link " aria-disabled="true">my best project</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-disabled="true">contect me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-disabled="true">my best Portpholio</a>
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