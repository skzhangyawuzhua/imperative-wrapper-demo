import React, { ReactElement, useEffect } from "react";
import { WaitableWrapper } from "react-imperative-wrapper";
import VerifyComponent from "./VerifyComponent/VerifyComponent";

import "./App.css";

function App() {
  const check = async () => {
    try {
      console.log(VerifyComponent);
      const res = await WaitableWrapper(<VerifyComponent />);

      alert(`组件返回的结果是 ${res}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <button onClick={check}>点击此处发起验证</button>
    </div>
  );
}

export default App;
