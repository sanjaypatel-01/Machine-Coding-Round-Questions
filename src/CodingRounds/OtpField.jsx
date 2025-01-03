//React OTP feild - Frontend with aman [Youtube]
import React, { useEffect, useRef, useState } from "react";
import '../styles.css';

function OtpField() {
  //function OtpField({otpLength = 6}) {

  const [otpFields, setOtpFields] = useState(new Array(6).fill(""));
  //console.log(otpFields);

  const ref = useRef([]);
  console.log(ref);

  const handleKeyDown = (e, index) => {
    const key = e.key;
    //console.log(e);

    if (key === "ArrowRight") {
      if (index + 1 < otpFields.length) ref.current[index + 1].focus();
      return;
    }

    if (key === "ArrowLeft") {
      if (index > 0)  ref.current[index-1].focus();
      return;
    }

    const copyOtpFields = [...otpFields];

    if (key === "Backspace") {
      //console.log("Deleted button clicked"); 
      copyOtpFields[index] = "";
      setOtpFields(copyOtpFields);
      if (index > 0)  ref.current[index-1].focus();
      return;
    }

    if (isNaN(key)) {
      return;
    }

    copyOtpFields[index] = key;
    if (index + 1 < otpFields.length) ref.current[index + 1].focus();
    setOtpFields(copyOtpFields);
  }

  //need to study
  useEffect(() => {
    ref.current["0"].focus();
  }, []);

  return (
    <div className="container">
      {otpFields.map((element, index) => {
        return <input 
            key={index} 
            ref = {(currentInput) => (ref.current[index] = currentInput)}
            type="text" 
            value={element} 
            onKeyDown={(e) => handleKeyDown(e,index)}
        />;
      })}
    </div>
  );
}

export default OtpField;



// Styles.css

// input {
//   width: 1rem;
//   height: 1rem;
//   padding: 0.5rem;
//   margin: 0.5rem;
// }