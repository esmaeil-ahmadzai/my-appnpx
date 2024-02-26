import React from "react";
import Progressbar from "./Progress_bar";
import "./Skills.css";
class Skills extends React.Component{
    render() {
         return(
            <div className="App">
			<h3 className="heading titl">Skills</h3>
            <div className="row">
                <div className="col-lg-6">
                <h5 className="titl">HTML</h5>

                <Progressbar
				bgcolor="orange"
				progress="95"
				height={30}
			/>
                </div>
                <div className="col-lg-6">
                <h5 className="titl">CSS</h5>
                <Progressbar 
				bgcolor="blue"
				progress="90"
				height={30}
			/>
                </div>
                <div className="col-lg-6">
                <h5 className="titl">Java Script</h5>

                <Progressbar
				bgcolor="#99ff66"
				progress="80"
				height={30}
			/>
                </div>
                <div className="col-lg-6">
                <h5 className="titl">React</h5>

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