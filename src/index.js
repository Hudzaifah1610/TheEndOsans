import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import * as serviceWorker from "./serviceWorker";

import { Provider} from "react-redux"
import { storeRedux } from "./Redux/Store";

storeRedux.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(storeRedux.getState()))
})

ReactDOM.render(
  <Provider store={storeRedux}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();