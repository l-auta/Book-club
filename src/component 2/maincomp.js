import React from "react";
import Services from "./comp1";
import Connects from "./comp2";

function ComponentTwo() {
    return (
        <div className="component-two">
          <Services />
          <Connects />
        </div>
    )
}

export default ComponentTwo;