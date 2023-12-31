
import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import{ BrowserRouter as Router,Switch,Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


//rcc for react class based components
const App =()=> {
  const pageSize=5;
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress,setProgress]=useState(0)
 
    //render method is used here,it helps to show the html on the screen
    return (
      <div>
        <Router>
         <NavBar/>
         <LoadingBar
         height={3}
        color='#f11946'
        progress={progress}
      />
         <Switch>
            <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="Home" pageSize={pageSize}  country="in" category="Home"/></Route>
            <Route exact path="/Business"><News setProgress={setProgress} apiKey={apiKey} key="Business" pageSize={pageSize} country="in" category="Business"/></Route>
            <Route exact path="/Entertainment"><News setProgress={setProgress} apiKey={apiKey} key="Entertainment" pageSize={pageSize} country="in" category="Entertainment"/></Route>
            <Route exact path="/General"><News setProgress={setProgress} apiKey={apiKey} key="General" pageSize={pageSize} country="in" category="General"/></Route>
            <Route exact path="/Health"><News setProgress={setProgress} apiKey={apiKey} key="Health" pageSize={pageSize} country="in" category="Health"/></Route>
            <Route exact path="/Science"><News setProgress={setProgress} apiKey={apiKey} key="Science" pageSize={pageSize} country="in" category="Science"/></Route>
            <Route exact path="/Sports"><News setProgress={setProgress} apiKey={apiKey} key="Sports" pageSize={pageSize} country="in" category="Sports"/></Route>
            <Route exact path="/Technology"><News setProgress={setProgress} apiKey={apiKey} key="Technology" pageSize={pageSize} country="in" category="Technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
  export default App
