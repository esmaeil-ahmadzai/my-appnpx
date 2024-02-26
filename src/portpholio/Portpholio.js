import React from "react";
import Progressbar from "./Language";
import "./Portphoilo.css";
class Skills extends React.Component{
    render() {
         return(

		<div className="App">
			<h3 className="heading titl">Languages</h3>
            <div className="row">
                <div className="col-lg-6">
                <h5 className="titl">persian</h5>

                <Progressbar
				bgcolor="orange"
				progress="100"
				height={30}
			/>
                </div>
                <div className="col-lg-6">
                <h5 className="titl">pashto</h5>
                <Progressbar 
				bgcolor="blue"
				progress="90"
				height={30}
			/>
                </div>
              
                <div className="col-lg-6">
                <h5 className="titl">English</h5>

                <Progressbar
				bgcolor="#ff00ff"
				progress="85"
				height={30}
			/>
                </div>
                
            </div>
			
			
			
			
			
</div>


            
         )
    }
}


export default Skills