import React from "react";
import  ReactDOM  from "react-dom";
import Navbar from "./Navbar/Navbar";
import About from "./about/About";
import Home from "./home/Home";
import Skills from "./Skills/Skills";
import Project from "./projects/project";
import Portpholio from "./portpholio/Portpholio";
import Contect from "./contect/contect";
ReactDOM.render(<Navbar/> , document.getElementById('root'))
ReactDOM.render(<About/>, document.getElementById('about'))
ReactDOM.render(<Home/>, document.getElementById('Home'))
ReactDOM.render(<Skills/>, document.getElementById('Skills'))
ReactDOM.render(<Project/>, document.getElementById('Project'))
ReactDOM.render(<Portpholio/>, document.getElementById('Portpholio'))
ReactDOM.render(<Contect/>, document.getElementById('Contect'))