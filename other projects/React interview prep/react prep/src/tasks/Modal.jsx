import { useState } from "react";

const Modal = () => {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <button onClick={() => setDisplay((display) => !display)}>
        {display ? "hide" : "show"}
      </button>
      {display && <div>hi</div>}
    </>
  );
};

export default Modal;
