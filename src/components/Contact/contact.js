import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import "../Contact/contact.css"
const Contact = () => {
  return (
    <div> 
        <div>
        <Header/>

        <section className="contact-sec sec-pad">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="contact-detail">
          <h1 className="section-title">Contact us</h1>
          <ul className="contact-ul">
            <li>
              {/* <i className="fa fa-location-dot" />  */}
              SIPCOT IT Park,Chennai, Tamil Nadu 603103
            </li>
            <li>
              {/* <i className="fa fa-phone" /> */}
              <a href="tel:08510004495">
                <b>0255000XXXX</b>
              </a>
              
              <a href="tel:08510005495">
                <b>0251600XXXX</b>
              </a>
            </li>
            <li>
              {/* <i className="fa-solid fa-envelope" /> */}
              <a href="mailto:ramannem07@gmail.com">
                <b> xxxxx@gmail.com</b>
              </a>
            </li>
          </ul>
          <span>
            {/* <a href="#" className="fb">
              <i className="fa-brands fa-facebook" />
            </a>
            <a href="#" className="insta">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="#" className="twitter">
              <i className="fa-brands fa-twitter" />
            </a> */}
          </span>
        </div>
      </div>
      <div className="col-md-6">
        <form action="#" className="contFrm" method="POST">
          <div className="row">
            <div className="col-sm-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="inptFld"
                required=""
              />
            </div>
            <div className="col-sm-6">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="inptFld"
                required=""
              />
            </div>
            <div className="col-sm-6">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="inptFld"
                required=""
              />
            </div>
            <div className="col-sm-6">
              <input
                type="text"
                name="sub"
                placeholder="Subject"
                className="inptFld"
                required=""
              />
            </div>
            <div className="col-12">
              <textarea
                className="inptFld"
                rows=""
                cols=""
                placeholder="Your Message..."
                required=""
                defaultValue={""}
              />
            </div>
            <div className="col-12">
              <input
                type="submit"
                name="submit"
                defaultValue="SUBMIT"
                className="inptBtn"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <p> Copyright © All rights reserved | rn</p>
    </div>
  </div>
</section>
<Footer/>

    </div>
    </div>
  )
}

export default Contact