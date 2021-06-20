import React from 'react'
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";

import MainPage from "./pages/MainPage";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return (
      <BrowserRouter>
        <Route path='/' exact component={MainPage}/>
      </BrowserRouter>
    );
  }
}

export default App;
