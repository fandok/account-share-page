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
    <AutoCenter
      style={{
        height: "100vh",
        flexDirection: "column",
        gap: 12,
        padding: "0 32px",
      }}
    >
      <h2 style={{ marginBottom: 8 }}>Enter PIN</h2>
      <Input
        placeholder="PIN"
        type="password"
        value={input}
        onChange={setInput}
        onEnterPress={handleUnlock}
        style={{ border: "1px solid #ccc", borderRadius: 8, padding: "8px 12px", width: 200 }}
      />
      <Button color="primary" onClick={handleUnlock} style={{ width: 200 }}>
        Unlock
      </Button>
    </AutoCenter>
  );
};

export default AuthGate;
