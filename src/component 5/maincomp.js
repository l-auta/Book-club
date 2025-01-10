import React from "react";

function ComponentFive(){
    return(
        <div className="five">
            <div className="stars"> {String.fromCodePoint('0x2b50')} {String.fromCodePoint('0x2b50')} {String.fromCodePoint('0x2b50')} {String.fromCodePoint('0x2b50')} {String.fromCodePoint('0x2b50')} </div>
            <div className="remarks">
                <p>"This book club transformed my technical reading from a solitary activity into an enriching community experience. The discussions are gold!"</p>
            </div>
            <div className="author">
                <p>Sarah Chen, Software Architect</p>
            </div>
        </div>
    )
}

export default ComponentFive;