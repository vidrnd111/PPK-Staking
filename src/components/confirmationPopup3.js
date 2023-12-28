import React from "react";

const ConfirmationPopup3 = ({ setOpen3, unstaking,penality }) => {
  return (
    <div className="confirmation-popup-body flex flex-col justify-between">
      <h1 className="title">Warning: Penalty Heads-up!</h1>
      <p className="desc">
      You will have to pay {penality}% Penalty, if you force the withdrawal. Do you want to still continue?

      </p>
      <div className="actions flex items-center justify-center w-full">
        <button
          className="btn-c button"
          onClick={(e) => {
            setOpen3(false);
            unstaking();
          }}
        >
Yes, Proceed!
        </button>
        <button
          className="btn-c button"
          style={{ backgroundColor:"hsla(11,80%,45%,1)",border:"red" }}
          onClick={(e) => {
            setOpen3(false);
          }}
        >
No, Cancel!
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPopup3;
