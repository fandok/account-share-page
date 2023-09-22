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

const App = () => {
  const handleClick = (value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      Toast.show("Password copied!");
    });
  };

  return (
    <div
      style={{
        maxWidth: 375,
        margin: "0 auto",
        height: "100vh",
        position: "relative",
        backgroundColor: "#fff",
      }}
    >
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
                <Input disabled value={value.password} type="password" />
              </Form.Item>
            </Form>
            <Button
              onClick={() => {
                handleClick(value.password);
              }}
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
      <Footer
        style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}
        label="Made it 👍 by @fandok"
      />
    </div>
  );
};

export default App;
