import React from "react";

function Description() {
    return (
        <div className="desc">
            <div>
              <h2 className="gradient-text">Join the ultimate tech book club</h2>
              <p>Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations, join vibrant discussions, and level up your skills one chapter at a time.</p>
              <br></br>
              <button className="membership">REVIEW MEMBERSHIP OPTIONS  {String.fromCodePoint('0x1f447')}</button>
              </div>
          <div className="pic">
            <img src="https://images.unsplash.com/photo-1630715216350-1a8f46f021bf?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="people" />
          </div>
        </div>
    )
}

export default Description;