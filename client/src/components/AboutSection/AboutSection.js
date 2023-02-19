import React, { useState, useEffect } from "react";
import useBasicDetails from "../../hooks/useBasicDetails";
import "./AboutSection.css"


const AboutSection = () => {

  const [accountHolder, setAccountHolder] = useState("")
  const [accountLocation, setAccountLocation] = useState("")

  const [web3, account, contract, contractAddress] = useBasicDetails()


  useEffect(() => {
    const getContractDetails = async () => { };
    if (
      typeof contract !== "undefined" &&
      typeof account !== "undefined" &&
      typeof web3 !== "undefined"
    ) {
      console.log(contract)
      console.log(account)
      web3.eth.defaultAccount = account;
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
        .AboutSection(account, accountHolder, accountLocation)
        .send({
          from: account,
          to: contract.options.address,
          value: web3.utils.toWei('2', 'ether'),
        })
        .then((res) => {

          console.log(res);
          window.location.href = "/about"
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
      <div className="about-section-container">
        {/* <div className="form-wrapper"> */}
        <p className="question">Who are we?</p>
        <p className="answer">Aatmanirbhar Bank is a decentralized bank that operates on a peer-to-peer network, without any centralized control. It empowers individuals to transact with each other directly, without intermediaries, while ensuring privacy and security through blockchain technology. Aatmanirbhar Bank is committed to promoting financial independence and self-reliance among its users.</p>
        <p className="question">Traditional VS Decentralized bank </p>
        <p className="answer">Traditional banks are centralized financial institutions that rely on intermediaries to process and verify transactions. They are subject to government regulations and may charge high fees. Decentralized banks, on the other hand, operate on a peer-to-peer network without intermediaries. They use blockchain technology to ensure security and transparency, and may offer lower fees and greater financial freedom. Decentralized banks promote financial independence and challenge the dominance of traditional financial systems.Decentralized banks prioritize user privacy and security by utilizing encryption and digital signatures. They also offer fast transaction processing times and 24/7 accessibility, making them appealing to users seeking financial autonomy. Traditional banks may offer greater financial stability but may limit user control and flexibility.</p>

        <p className="question">What features do we offer?</p>

        <p className="answer">We offer the following features:
          <ol>
            <li>- Peer-to-peer transactions without intermediaries</li>        
            <li>- Secure, encrypted and transparent transactions through blockchain technology</li>        
            <li>- Decentralized governance and decision-making</li>        
            <li>- Lower fees and charges compared to traditional banks</li>        
            <li>- Fast transaction processing times and 24/7 accessibility</li>        
            <li>- Financial independence and self-reliance through the ability to control one own funds and investments
            Community-driven support </li>and development, with users contributing to the platform growth and evolution.
          </ol>
        </p>

        {/* </div> */}
      </div>
    </div>
  );
};

export default AboutSection;
