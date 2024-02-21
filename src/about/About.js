import React from "react";
import './About.css'

class About extends React.Component{
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">  
                        <div className="col-6 mt-5">
                            <h1 className="title">Portpholio <br/> i <br/> 
                            am <br/> 
                            Esmaeil Ahmadzai</h1>

                            <p>i am a web devolaper i start learning code in 2022 in the vass institution i enjoy from learning code i live in afghanistan in herat city 
                               i want be a great web dewloper in the feature </p>
                               <div className="bottom ">
                               <button type="button" class="btn btn-outline-primary">downlode file</button>
                               <button type="button" class="btn btn-outline-primary">contect me</button>
                               </div>
                        </div>
                        <div className="col-6  img">
                            <img className="wight-120   border-raduos" src="./esmaeil.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default About