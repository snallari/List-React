import React from 'react';


function joke(props){
    console.log(props)

return(

    <div className="tileCenter">
        <p className="tileHeader">{props.d.d.applicants[0].firstName} {props.d.d.applicants[0].lastName}</p>
        <p className="tileText">{props.d.d.installStreet}, {props.d.d.installCity}</p>
        <p className="tileText">{props.d.d.installStateName}</p>
        <p className="tileText">{props.d.d.installZipCode}</p>
    </div>
    
)
}

export default joke;