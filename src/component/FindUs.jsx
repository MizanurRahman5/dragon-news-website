import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <div className="font-bold text-2xl mb-3">Find Us</div>
      <div className="*:w-full">
        <div className="join flex join-vertical ">
          <button className="btn join-item justify-start"><FaFacebook/> Facebook</button>
          <button className="btn join-item justify-start"><FaInstagram/> Instagram</button>
          <button className="btn join-item justify-start"><FaTwitter/> Twitter</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
