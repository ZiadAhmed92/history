import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { registerLicense } from '@syncfusion/ej2-base';
import App from "./App";

  registerLicense('Ngo9BigBOggjHTQxAR8/V1NCaF5cXmZCeUx3Qnxbf1x0ZFREal1QTnJeUj0eQnxTdEFjX35ZcXZUR2ReVkZ2WQ==');

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  
      <App />
    
  </React.StrictMode>
);
