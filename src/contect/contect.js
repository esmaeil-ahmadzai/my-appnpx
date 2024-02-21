import React from "react";
import './Contect.css'
class Contect extends React.Component{
    render() {
        return(
            <div>
               

<section class=" container-fluid contact py-5 overflow-hidden">
  <div class="row text-center mb-4"  data-aos="fade-up" data-aos-delay="500`">
  <h2  className="tit">Contect me</h2>  </div>
  <div class="row gy-3"  data-aos="fade-up" data-aos-delay="500`">
    <div class="col-lg-6">
      <div class="row gy-3">
        <div class="col-md-6">
          <div class="info-box">
            <i class="bi bi-geo-alt"></i>
            <h5 class="fw-bold abi">address</h5>
            <p>afghanistan <br/>
            Herat City</p>
          </div>
        </div>
        <div class="col-md-6"  data-aos="fade-up" data-aos-delay="500`"> 
          <div class="info-box">
            <i class="bi bi-telephone"></i>
            <h5 class="fw-bold abi"> contect Numbers</h5>
            <p class="cellphone">+93 784235670 <br/>+93 728485594 </p>
          </div>
        </div>
        <div class="col-md-6"  data-aos="fade-up" data-aos-delay="500`">
          <div class="info-box">
            <i class="bi bi-envelope"></i>
            <h5 class="fw-bold abi"> Email</h5>
            <p >amirahmadzai0728485594@gmail.com<br/>esmaeilahmadzai01@gmail.com </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6"  data-aos="fade-up" data-aos-delay="500`">
      <form  action="#"class=" contact-form">
        <div class="row gy-4"  data-aos="fade-up" data-aos-delay="500`">

          <div class="col-md-6">
            <label class="form-labal">Name</label>
            <input type="text" class="form-control"/>
          </div>

          
          <div class="col-md-6">
            <label class="form-labal">Email</label>
            <input type="email" class="form-control"/>
          </div>

          <div class="col-md-12">
            <label class="form-labal">Subject</label>
            <input type="text" class="form-control"/>
          </div>
          <div class="col-md-12">
            <label class="form-labal">Subject</label>
            <textarea rows="2" class="form-control" > </textarea>
          </div>

          <div class="col-md-12 text-center">
            <button class="btn btn-primary">send messege</button>
          </div>


        </div>
      </form>
    </div>
  </div>


</section>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}

export default Contect