import React from "react";
import Starter from "./comp1";
import Pro from "./comp2";
import Custom from "./comp3";

function ComponentFour(){
    return (
        <div className="four">
            <h2>Membership Options</h2>
            <div className="options">
              <Starter />
              <Pro />
              <Custom />
            </div>
        </div>
    )
}

export default ComponentFour;