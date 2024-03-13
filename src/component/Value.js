import React from "react";


const Value = ({valueData}) =>{
    return(
        <div className="mt-5 p-4">
        <div className="row">
        {valueData.map((value, index) => {
              return (
                <div key={index} className="col-md-4">
                  <div className="d-flex align-items-center" style={{gap:10}}>
                    <img src={value.img} alt="" className="img-fluid" width="50"/>
                    <h5 className="font-weight-bolder">{value.title}</h5>
                  </div>
                  <p className="font-weight-lighter">{value.description}</p>
                </div>
              );
            })}
        </div>
        </div>
    )
}  

export default Value;