import React, { useState } from "react";
import SideNav from "./SideNav";
function App() {
  const [status, setStatus] = useState(false);
  function handleClick() {
    setStatus(!status);
  }
  if (status) {
    return (
      <div>
        <input type="text" name="ip_address" />
        <button onClick={handleClick}>Disconnect</button>
      </div>
    );
  } else {
    return (
      <div>
        <input type="text" name="ip_address" />
        <button onClick={handleClick}>Connect</button>
      </div>
    );
  }
}
export default App;
