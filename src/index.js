import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { Provider } from './context/context';
import { SpeechProvider } from "@speechly/react-client";

import './index.css'

ReactDOM.render(
    <SpeechProvider appId={"1b0c0b44-6614-4b1d-90bb-d763d23996d4"} language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById("root")
);