import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const Script = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDOM.render(<Script />, document.getElementById('root'));
