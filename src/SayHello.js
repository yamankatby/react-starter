import { useState } from "react";

function SayHello() {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Hi, {name}!</h1>
      <input
        type="text"
        onChange={(e) => {
          setName(e.currentTarget.value);
        }}
      />
    </div>
  );
}

export default SayHello;
