import "./index.css";
import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const el = document.getElementById("root");
// const root = ReactDom.createRoot(el);

const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(
  <React.StrictMode>
    <HashRouter>
     <App />
    </HashRouter>
  </React.StrictMode>
  );
