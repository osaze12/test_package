import React, { useState } from "react";
import { Input, Button } from "@chakra-ui/react";

export const Kolo = () => {
  const [state, setState] = useState("");
  return (
    <div>
      <Input value={state} onChange={(e) => setState(e.target.value)} />
      <Button onClick={() => alert("Good One")}>Send</Button>
    </div>
  );
};
