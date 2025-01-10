import React from "react";

function Pro(){
    return (
        <div className="pro">
          <h3><b>Pro</b></h3>
          <p><b><i class="fa-solid fa-dollar-sign"></i>29</b> /month</p>
          <hr />
          <p><i class="fa-regular fa-square-check" ></i>  2 book/month</p>
          <p><i class="fa-regular fa-square-check" ></i> Virtual meetups</p>
          {/* <br /> */}
          <button className="subscribe-btn">SUBSCRIBE NOW</button>
        </div>
    )
}

export default Pro;