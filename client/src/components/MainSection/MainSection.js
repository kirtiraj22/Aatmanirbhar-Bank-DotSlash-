import React, { useState, useEffect } from "react";


import "./MainSection.css";
import useBasicDetails from "../../hooks/useBasicDetails";


const MainSection = () => {

  // eslint-disable-next-line
  const [storageValue, setStorageValue] = useState(undefined);

  const [web3,account,contract,contractAddress]=useBasicDetails()





  useEffect(() => {
    const getContractDetails = async () => {};
    if (
      typeof contract !== "undefined" &&
      typeof account !== "undefined" &&
      typeof web3 !== "undefined"
    ) {
      localStorage.setItem("logged", true);

      getContractDetails();
    }
  }, [web3, account, contract]);

  if (!web3) {
    return <div>Loading Web3, accounts, and contract...</div>;
  }
  return (
    <div className="main-section">
      <div className="main-section-grid">
        <div className="hero-panel">
          <div className="content-container">
            <h2>Escape the Money Matrix with <span>Aatmanirbhar bank</span></h2>
            <h3>
            Aatmanirbhar Bank is committed to providing its users with complete control over their finances, ensuring that users have the freedom to manage their money as they see fit. Whether it's tracking transaction history, depositing or withdrawing funds, or sending money to other accounts, Aatmanirbhar Bank offers a decentralized and secure solution that meets the needs of modern banking customers.
            </h3>
            <div className="btn">
              <button
                className="start-button"
                onClick={() => {
                  window.location = "/create";
                }}
              >
              GET STARTED
              </button>
            </div>
          </div>
        </div>
        <div className="bank-image-container">
          <img alt="" src="./assets/AATMANIRBHAR.png" className="bank-image" />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
