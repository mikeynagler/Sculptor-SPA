import React from 'react';
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import Home from './components/MainComponents/Home/Home'
import About from './components/MainComponents/About/About'
import UpcomingEvents from './components/MainComponents/UpcomingEvents/UpcomingEvents'
import Contact from './components/MainComponents/Contact/Contact'
import Gallery from './components/MainComponents/Gallery/Gallery'
import Media from './components/MainComponents/Media/Media'


class App extends React.Component {
  state = {
    drawerOpen: false
  };
  onDrawerToggle = () => {
    this.setState((prevState) => {
      return {drawerOpen: !prevState.drawerOpen}
    });
  }

  onBackdropClick = () => {
    this.setState({drawerOpen: false});
  }

  onXClick = () => {
    this.setState({drawerOpen: false});
  }

  render() {
    let backdrop;
    if(this.state.drawerOpen){
      backdrop = <Backdrop click={this.onBackdropClick}/>
    }
    
    return (
      <div className="App">
        <BrowserRouter>
          <SideDrawer show={this.state.drawerOpen} onXClick={this.onXClick}/>
          {backdrop}
          <Navbar onDrawerToggle={this.onDrawerToggle}/>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/upcomingevents" exact component={UpcomingEvents}></Route>
          <Route path="/media" exact component={Media}></Route>
          <Route path="/gallery" exact component={Gallery}></Route>
          <Route path="/contact" exact component={Contact}></Route>
        </BrowserRouter>
      </div>
    );
  };
}

export default App;
