import React, { useMemo, useState } from "react";
import { Vertify } from "@alex_xu/react-slider-vertify";
import p1 from "../assets/pic_bg_1.jpeg";
import p2 from "../assets/pic_bg_2.jpeg";
import p3 from "../assets/pic_bg_3.jpeg";
import p4 from "../assets/pic_bg_4.jpeg";

import "./VerifyComponent.scss";

const picList = [p1, p2, p3, p4];

function VerifyComponent(props: any) {
  const getNum = () => Math.floor(Math.random() * 4);

  const [num, setNum] = useState(getNum());

  const urlStr = useMemo(() => {
    return picList[num];
  }, [num]);

  return (
    <div className="auth_container">
      <Vertify
        width={294}
        height={160}
        visible={true}
        onSuccess={() => {
          props?.close("验证成功");
        }}
        onFail={() => {
          setNum(getNum());
        }}
        onRefresh={() => {
          setNum(getNum());
        }}
        imgUrl={urlStr}
      />
      <div className="txt">请移动滑块到对应位置</div>
      <div className="cancel" onClick={() => props?.close("用户取消了验证")}>
        取消验证
      </div>
    </div>
  );
}

export default VerifyComponent;
