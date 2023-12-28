import React, { useEffect, useState } from "react";
import ConfirmationPopup2 from "./confirmationPopup2";
import Modal2 from "./Modal2";
const ConfirmationPopup = ({ setOpen, unstaking,unstaking_req,penality }) => {


  const [open2, setOpen2] = useState(false);



  return (
    <div className="confirmation-popup-body flex flex-col justify-between">
      <h1 className="title"> $TYON Un-Staking!</h1>
      <p className="desc">
      Dear user, you can choose one of these un-stake options. Immediate un-stake will have penalty.
      </p>
      <div className="actions flex items-center justify-center w-full">
        <button
          className="btn-c button"
          onClick={(e) => {
            setOpen(false);
            unstaking_req();
          }}
        >
          Unstake Request
        </button>
        <button
          className="btn-c button"
          style={{ backgroundColor:"hsla(11,80%,45%,1)",border:"red" }}
          onClick={(e) => {

            setOpen2(true);
            // setOpen(false);

          }}
        >
        Immediate Unstake

        </button>
      </div>
      <Modal2 open2={open2} onClose={() => setOpen2(false)}>
        <ConfirmationPopup2 setOpen2={setOpen2} unstaking={unstaking} penality={penality} setOpen={setOpen}/>
      </Modal2>
    </div>
  );
};

export default ConfirmationPopup;
