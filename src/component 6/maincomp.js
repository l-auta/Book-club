import React from "react";

function ComponentSix(){
    return(
        <div className="six">
            <div className="debug">
              <p>Ready to debug your reading list?</p>
              <button className="membership">REVIEW MEMBERSHIP OPTIONS  {String.fromCodePoint('0x261d')}</button>
            </div>
            <br />
            <hr></hr>
            <br />
            <div className="footer">
              <p><i class="fa-solid fa-copyright"></i> 2022 Tech Book Club. All rights reserved.</p>
              <i class="fa-brands fa-linkedin"></i> <i class="fa-brands fa-twitter"></i>
            </div>
        </div>
    )
}

export default ComponentSix;