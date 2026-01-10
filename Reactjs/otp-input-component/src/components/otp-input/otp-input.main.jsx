import { useRef, useState } from "react";

import "./styles.css";

const OTPInput = ({ length = 4, onComplete }) => {
  const [otpValue, setOtpValue] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      setOtpValue((prev) => {
        const newValue = [...prev];
        newValue[index] = "";
        return newValue;
      });

      if (index > 0) inputRefs.current[index - 1].focus();
    } else if (!isNaN(parseInt(e.key))) {
      setOtpValue((prev) => {
        const newValue = [...prev];
        newValue[index] = parseInt(e.key);
        return newValue;
      });

      if (index === length - 1) onComplete(otpValue.join(""));
      else inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pastedText = e.clipboardData.getData("text");

    if (pastedText.length > length) return;

    setOtpValue(pastedText.split(""));
    inputRefs.current.at(-1).focus();
    onComplete(otpValue.join(""));
  };

  return (
    <div className="container">
      {otpValue.map((val, index) => {
        return (
          <input
            className="input"
            maxLength={1}
            ref={(crt) => (inputRefs.current[index] = crt)}
            value={val}
            onPaste={(e) => handlePaste(e)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
};

export default OTPInput;
