import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Views/Home'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Home></Home> 
      </Router>
    </Provider>
  );
}

export default App;
