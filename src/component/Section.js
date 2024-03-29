import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./img/people.29fde5eb61f241c0f299.png";
import img1 from "./img/role.2030a329580945a9bdb8.png";

const Section = () => {
  return (
    <section className="container">
      <div className=" row align-items-center justify-content-center">
        <div className="col-md">
          <img src={img} alt="" className="img-fluid" />
        </div>
        <div className="col-md">
          <h1>Send money instantly</h1>
          <hr />
          <h5>
            With UpayChat you can send, request money from friends quickly and
            easily, with just a mobile number ot email address using money in
            your UpayChat account balance for free!
          </h5>.
        </div>
      </div>
      <div className="row align-items-center justify-content-center">
        <div className="col-md-5">
          <h1 >
          Bill payments
          </h1>
          <hr/>
          <h5>
            Easiest and quickest way to pay bills Airtime electricity bills,
            data subscription, cable TV and whatever it is.
          </h5>
        </div>
        <div className="col-md jusify-content-center">
          <img src={img1} alt="" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Section;
