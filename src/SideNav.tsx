import React from "react";
import ToiletUrl from "./assets/cesuo.png";
import "./App.css";

function SideNav() {
  return (
    <div>
      <img src={ToiletUrl} alt="toilet desu" height="50" width="50" />
      <nav>
        <ul>
          <li>
            <button>工作台</button>
          </li>
          <li>
            <button>接口管理</button>
          </li>
          <li>
            <button>用例管理</button>
          </li>
          <li>
            <button>性能测试</button>
          </li>
          <li>
            <button>比对测试</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default SideNav;
