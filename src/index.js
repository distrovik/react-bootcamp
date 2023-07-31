import React from 'react';
import ReactDOM from 'react-dom/client';

const name = "VIX";
const time = new Date();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div>
    <h1>Hello {`MISTA`} {`${name}`}!</h1>
    <p>Your local time is {time.getHours()} {": " + time.getMinutes()}</p>
    </div>
  </React.StrictMode>
);
