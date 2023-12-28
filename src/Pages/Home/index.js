import React, { useState, useEffect } from "react";
import FistBox from "./FistBox";
import SecondBox from "./SecondBox";
import Header from "../../components/Header";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import Web3 from "web3";

import Timer from "../../components/Timer";
import Modal from "../../components/Modal";
import Wrapper from "../../routes/Wrapper";
import ConfirmationPopup from "../../components/confirmationPopup";
import { QuestionIcon, ArrowDownIcon } from "../../assets/Icons";

const Main = () => {
  const [boxNumb, setBoxNumb] = useState(2);
  const [selectedTab2, setSelectedTab2] = useState("Stake");
  const [stakeType, setStakeType] = useState("flexible");
  const headerTabsList = [
    { title: "Stake" },
    { title: "Unstake" },
    { title: "Reward" },
  ];

  const [hide5, setHide5] = useState(false);
  const [hide6, setHide6] = useState(false);
  const [token5, setToken5] = useState([]);
  const [token6, setToken6] = useState({ img: "/images/btc.png", lbl: "BTC" });

  const tokensList = [
    { img: "/images/btc.png", lbl: "PLUTUS/BTC" },
    { img: "/images/usdt.png", lbl: "PLUTUS/USDT" },
    { img: "/images/trx.png", lbl: "PLUTUS/BUSD" },
    { img: "/images/btcoin.png", lbl: "PLUTUS/BTC" },
  ];

  useEffect(() => {
    document.addEventListener("click", () => {
      setHide5(false);
      setHide6(false);
    });
  }, []);

  return (
    <Wrapper>
              <Header />

      <div className="lading-page bg-themeColor h-screen flex">
        <div className="wrap wrapWidth flex flex-col text-white">
          <div className="page-meta flex flex-col items-center">
            <h1 className="slug">PPK Staking</h1>
            <p className="desc">Earn PPK tokens by Staking PPK tokens and multiply your holdings</p>
          </div>

          <div className="page-grid">
             <FistBox
                headerTabsList={headerTabsList}
                selectedTab2={selectedTab2}
                setSelectedTab2={setSelectedTab2}
                boxNumb={boxNumb}
                setBoxNumb={setBoxNumb}
                tokensList={tokensList}
                hide5={hide5}
                setHide5={setHide5}
                hide6={hide6}
                setHide6={setHide6}
                token5={token5}
                setToken5={setToken5}
                token6={token6}
                setToken6={setToken6}
              />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Main;
