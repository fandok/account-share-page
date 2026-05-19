import { useState } from "react";
import {
  AutoCenter,
  Button,
  Collapse,
  Divider,
  Footer,
  Form,
  Input,
  SafeArea,
  Toast,
} from "antd-mobile";
import { USER_LIST } from "./constants";
import AuthGate from "./components/AuthGate";

const App = () => {
  const [visiblePasswords, setVisiblePasswords] = useState<Set<number>>(new Set());

  const toggleVisibility = (index: number) => {
    setVisiblePasswords((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      Toast.show("Password copied!");
    }).catch(() => {
      Toast.show({ content: "Failed to copy", icon: "fail" });
    });
  };

  return (
    <AuthGate>
      <div className="app-container">
        <SafeArea position="top" />
        <AutoCenter>
          <h1>Account Share Hub</h1>
          <Divider />
        </AutoCenter>
        <Collapse>
          {USER_LIST.map((value, key) => (
            <Collapse.Panel key={String(key)} title={value.username}>
              <Form layout="horizontal">
                <Form.Item label="Password">
                  <Input
                    readOnly
                    value={value.password}
                    type={visiblePasswords.has(key) ? "text" : "password"}
                    suffix={
                      <span
                        className="password-toggle"
                        onClick={() => toggleVisibility(key)}
                      >
                        {visiblePasswords.has(key) ? "Hide" : "Show"}
                      </span>
                    }
                  />
                </Form.Item>
              </Form>
              <Button
                onClick={() => handleCopy(value.password)}
                block
                fill="solid"
                color="primary"
              >
                Copy Password
              </Button>
            </Collapse.Panel>
          ))}
        </Collapse>
        <SafeArea position="bottom" />
        <Footer className="app-footer" label="Made it 👍 by @fandok" />
      </div>
    </AuthGate>
  );
};

export default App;
