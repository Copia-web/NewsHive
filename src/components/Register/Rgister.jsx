import React from "react";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";

const Register = ({ modalDispaly, setModalDispaly, children }) => {
  if (!modalDispaly) return null;

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/50 ">
      <div className=" relative  flex flex-col items-center  ">
        <IoClose className="text-3xl cursor-pointer  text-slate-900 mr-3 self-end" onClick={()=>setModalDispaly(false)}/>
        {children}
      </div>
    </div>,
    document.getElementById("modal") // Portal target
  );
};

export default Register;
