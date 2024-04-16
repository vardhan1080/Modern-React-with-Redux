import React from 'react';
import ReactDOM from 'react-dom/client';
// import Myapp from './App';
// import { msg } from './App'; 
import Myapp, {msg} from './App';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);



root.render(<Myapp/>);