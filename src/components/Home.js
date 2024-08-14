import React, { useState } from "react";
import "./partsStyle.css";
import { Typography } from "@mui/material";
import riceLogo from "../assets/riceLogo.png";
import Table from "./Table";
import Graph from "./Graph";

const Home = () => {
  const [showGraph , setShowGraph] = useState(true)
  const [showTable , setShowTable] = useState(false)

  const handleShowGraph = () => {
    setShowGraph(true)
    setShowTable(false)
  }

  const handleShowTable = () => {
    setShowGraph(false)
    setShowTable(true)
  }
  return (
    <>
    
    <nav>
      <div className="left-box">
        <img className="logo" src={riceLogo} alt="Rice" />

        <div className="navButtons">
          <button onClick={handleShowGraph}>Dash Board</button>
          <button onClick={handleShowTable}>Data Table</button>
        </div>
      </div>

      <div className="rightBox">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
        </button>
        <Typography variant="subtitle1">Kathayayini</Typography>
      </div>
    </nav>
     {showGraph && <Graph />}
     {showTable && <Table />}

    </>
  );
};

export default Home;
