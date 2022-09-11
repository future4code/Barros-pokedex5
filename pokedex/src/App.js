
import React from "react";
import {Router }from "./routes/Router";
import StateGlobal from "./Context/StateGlobal";

export default function App() {
  return (
    <StateGlobal>
      <Router />
    </StateGlobal>
  );
}

