import { CgArrowsExchangeAltV } from "react-icons/cg";
import { useState } from "react";
import Tocrypto from "./Tocrypto";
const Maincard = ({ chain, setChain }) => {
  const [tranferValue, setTransferValue] = useState("");
  return (
    <div className="main-card-container">
      <div className="sec-container">
         <div className="heading">Bridge</div>
        <div className="from">
          <div className="target">
              <div className="target-cont">
            From:<span>{chain}</span>
              </div>
            <span className="currentinput">Value:{tranferValue}</span>
          </div>
          <input
            type="number"
            className="to-input"
            onChange={(event) => setTransferValue(event.target.value)}
            placeholder="Sending Amount"
          />
        </div>
        <div className="centerlogo">
          <CgArrowsExchangeAltV fontSize={60} />
        </div>
        <div className="to-section">
          <Tocrypto />
          <input
            type="number"
            className="to-input"
            onChange={(event) => setTransferValue(event.target.value)}
            placeholder="Recived Amount"
          />
        </div>

          <button className="connect-wallet">Connect Wallet</button>

      </div>
    </div>
  );
};

export default Maincard;
