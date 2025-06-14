import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export function CodePhoneInput({ phone, setPhone }) {
  return (
    <div>
      <PhoneInput
        placeholder="Enter phone number"
        value={phone}
        onChange={setPhone}
        className="border-2 border-black/10 rounded p-2 outline-[#f1effd]"
      />
    </div>
  );
}
