import React from "react";
import './Home.css'
class Home extends React.Component{
    render() { 
        return ( 
                <div className="container mt-5  ">
                    <div className="row text-center">
                        <h1 className="fs-3 fw-bold title">About me                  
                        </h1>
                        <div className="heading-line">
                        <img  width="200px" className=" my-5 img " src="./esmaeil.jpg"/>
                        </div>
                    </div>
                    <div className="row"> 
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                     <div class="accordion-item">
                       <h2 class="accordion-header">
                         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        My works
                         </button>
                       </h2>
                       <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                       <div class="accordion-body">hello i am esmaeil ahmadzai a web dewloper i live in herat city i want and i will be a good web dewloper in the feature </div>
                       </div>
                         </div>
                         <div class="accordion-item">
                           <h2 class="accordion-header">
                             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                My huby
                             </button>
                           </h2>
                           <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">i am a lover of football  and study   travel     learning code </div>
                          </div>
                         </div>
                         <div class="accordion-item">
                           <h2 class="accordion-header">
                             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            my certificate
                             </button>
                           </h2>
                       <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                     <div class="accordion-body">i dont have any web dewlope certificate but i will have it </div>
                   </div>
                 </div>
               </div>
                </div>
                </div>
        )
    }
}

export default Home