import "./App.css";
import OTPInput from "./components/otp-input/otp-input.main";

function App() {
  return (
    <>
      <OTPInput
        length={6}
        onComplete={(value) => {
          console.log("value", value);
        }}
      />
    </>
  );
}

export default App;
