import { useState } from "react";
import { AutoCenter, Button, Input, Toast } from "antd-mobile";
import { ACCESS_PIN } from "../constants";

type Props = {
  children: React.ReactNode;
};

const AuthGate = ({ children }: Props) => {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = () => {
    if (input === ACCESS_PIN) {
      setUnlocked(true);
    } else {
      Toast.show({ content: "Incorrect PIN", icon: "fail" });
      setInput("");
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <AutoCenter className="auth-gate">
      <h2 className="auth-gate__title">Enter PIN</h2>
      <Input
        className="auth-gate__input"
        placeholder="PIN"
        type="password"
        value={input}
        onChange={setInput}
        onEnterPress={handleUnlock}
      />
      <Button className="auth-gate__button" color="primary" onClick={handleUnlock}>
        Unlock
      </Button>
    </AutoCenter>
  );
};

export default AuthGate;
