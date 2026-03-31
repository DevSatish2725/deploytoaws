// changable input box size e.g; 4-digit, 6-digit etc.   done
// auto-focus on component load.    done
// auto-move to next input on digit entry.    done
// auto-move to previous input on backspace. done
// paste support for full OTP code. done
// validation for numeric input only
// validations for complete OTP entry
// customizable styles for input boxes on focus, error, and success states
// accessibility features like ARIA labels for better screen reader support

import React, {
  useActionState,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "./customComponents.css";
import { ContextData } from "../../contexts";

const Otp = ({ length }) => {
  const inputRefs = useRef([]);
  const [inputValues, setInputValues] = useState([]);
  const [state, action, isPending] = useActionState(handleSubmit);
  const {
    state: { count },
  } = useContext(ContextData);
  const renderInputs = () => {
    const inputs = Array.from({ length }, (_) => "");
    return inputs.map((_, idx) => (
      <input
        className="otpInput"
        ref={(inputElement) => {
          return (inputRefs.current[idx] = inputElement);
        }}
        value={inputValues[idx] ?? ""}
        onChange={(e) => handleInputChange(e, idx)}
        onKeyDown={(e) => handleKeyDown(e, idx)}
        onPaste={handlePaste}
      />
    ));
  };
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").replace(/\D/g, "");
    const otpValues = pasteData.split("").slice(0, length); // limit to length
    const newOtp = [...inputValues];
    otpValues.forEach((char, idx) => {
      newOtp[idx] = char;
    });
    inputRefs.current[otpValues.length - 1]?.focus();
    setInputValues(newOtp);
  };
  const handleKeyDown = (e, index) => {
    console.log(e.key, index);
    if (e.key === "Backspace") {
      const newOtp = [...inputValues];
      if (inputValues[index]) {
        // if current box has value, clear it
        newOtp[index] = "";
        setInputValues(newOtp);
      } else if (index > 0) {
        // if empty, move to previous input
        inputRefs.current[index - 1].focus();

        // also clear the previous one’s value
        newOtp[index - 1] = "";
        setInputValues(newOtp);
      }
    }
  };
  const handleInputChange = (e, idx) => {
    const otpValues = [...inputValues];
    let value = e.target.value;
    otpValues[idx] = value;
    if (idx <= length - 1) {
      inputRefs.current[idx + 1]?.focus();
      value = value.replace(/\D/g, "").slice(-1);
      otpValues[idx] = value;
    }
    setInputValues(otpValues);
  };

  function handleSubmit(formData) {
    console.log("form data", formData);
  }

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  return (
    <div>
      <h1>{count}Otp</h1>
      <div className="otp_container">
        <form action={action}>
          {renderInputs()}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Otp;
