import React, { useState, useEffect } from "react";
import useBasicDetails from "../../hooks/useBasicDetails";
import "./AboutSection.css"


const AboutSection = () => {
 
  const [accountHolder,setAccountHolder]=useState("")
  const [accountLocation,setAccountLocation]=useState("")
  
  const [web3,account,contract,contractAddress]=useBasicDetails()


  useEffect(() => {
    const getContractDetails = async () => {};
    if (
      typeof contract !== "undefined" &&
      typeof account !== "undefined" &&
      typeof web3 !== "undefined"
    ) {
      console.log(contract)
      console.log(account)
      web3.eth.defaultAccount=account;
      getContractDetails();
      
    }
  }, [web3, account, contract]);






    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(contract.methods);
      if (
        typeof contract !== "undefined" &&
        typeof account !== "undefined" &&
        typeof web3 !== "undefined"
      ) {
 
        


        await contract.methods
          .AboutSection(account,accountHolder, accountLocation)
          .send({
            from: account,
            to: contract.options.address,
            value: web3.utils.toWei('2','ether'),
          })
          .then((res) => {
           
            console.log(res);
            window.location.href="/about"
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };






    
  if (!web3) {
    return <div>Loading Web3, accounts, and contract...</div>;
  }
  return (
    <div className="about-section">
      <div className="form-wrapper-container">
        <div className="form-wrapper">
            <p className="question">Who are we?</p>  
            <p className="answer">Aatmanirbhar bank description </p>
            <p className="question">Traditional VS Decentralized bank </p>
            <p className="answer">Traditional bank are centralized...</p>
            <p className="question">What features do we offer?</p>
            <p className="answer">We offer the following features</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
