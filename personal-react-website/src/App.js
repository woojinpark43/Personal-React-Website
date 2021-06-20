import React from 'react'
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";

import { MainPage, AboutMe } from "./pages/index";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return (
      <BrowserRouter>
        <Route path='/' exact component={MainPage}/>
        <Route path='/aboutme' component={AboutMe}/>
      </BrowserRouter>
    );
  }
}

export default App;
