import React from "react";


const Value = ({valueData}) =>{
    return(
        <>
        <div className="row">
        {valueData.map((value, index) => {
              return (
                <div key={index}>
                  {value.title}
                </div>
              );
            })}
        </div>
        </>
    )
}  

export default Value;