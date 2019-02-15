import React,{ Component }  from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import {themeConfig} from './context/ThemeContext';
import ThemeContext from './context/ThemeContext';

import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';
import PostItem from './pages/Posts/PostItem'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light'
    }
  }

  componentDidMount = () => {
    var mode = localStorage.getItem("mode");
    if (mode) {
      this.setState({ theme: mode });
      if(mode === 'dark') {
        document.body.style.background = themeConfig.dark.bodybg;
      } else {
        document.body.style.background = themeConfig.light.bodybg;
      }
    } else {
      this.setState({ theme: 'light' });
    }
  };

  toggleTheme = () => {
    var mode = localStorage.getItem("mode");
    if (mode === "light") {
      localStorage.setItem("mode", "dark");
      this.setState({ theme: 'dark' });
      document.body.style.background = themeConfig.dark.bodybg;
    } else {
      localStorage.setItem("mode", "light");
      this.setState({ theme: 'light' });
      document.body.style.background = themeConfig.light.bodybg;
    }
  }
  
  render() {
    return ( 
      <ThemeContext.Provider value={{type: this.state.theme, config: themeConfig[this.state.theme]}}>
        <div>
          <BrowserRouter>
            {/* <Routes /> */}
            <div>
              {/* <Route path="/" exact component={Home}/> */}
              <Route path="/" exact render={() => <Home toggleTheme={this.toggleTheme}/>} />
              <Route path="/itemone" component={PostItem}/>
              <Route path="/resume" render={() => <Resume />} />
            </div>
          </BrowserRouter>
        </div>
      </ThemeContext.Provider>
    );
  }
}
 
export default App;
