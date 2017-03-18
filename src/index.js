import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import create from './redux/create';
import './styles/index.css';

const store = create();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
