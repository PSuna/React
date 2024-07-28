import React from 'react';
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
// JSX 사용하지 않는법
//ReactDOM.createRoot(entryPoint).render(React.createElement(App));

// JSX 사용법
ReactDOM.createRoot(entryPoint).render(<App />);
