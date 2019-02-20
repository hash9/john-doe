import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ThemeContext, { themeConfig } from './themes/ThemeContext';
import * as colors from './themes/colors';
import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';
import PostItem from './pages/Posts/PostItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
    };
  }

  componentDidMount() {
    var mode = localStorage.getItem('mode');
    var metaList = document.getElementsByTagName('meta');
    if (mode) {
      this.setState({ theme: mode });
      if (mode === 'dark') {
        document.body.style.background = themeConfig.dark.body;
        metaList[2].setAttribute('content', colors.notSoBlack);
      } else {
        document.body.style.background = themeConfig.light.body;
        metaList[2].setAttribute('content', colors.lightRed);
      }
    } else {
      this.setState({ theme: 'light' });
    }
  }

  toggleTheme = () => {
    var mode = localStorage.getItem('mode');
    var metaList = document.getElementsByTagName('meta');
    if (mode === 'light') {
      localStorage.setItem('mode', 'dark');
      this.setState({ theme: 'dark' });
      document.body.style.background = themeConfig.dark.body;
      metaList[2].setAttribute('content', colors.notSoBlack);
    } else {
      localStorage.setItem('mode', 'light');
      this.setState({ theme: 'light' });
      document.body.style.background = themeConfig.light.body;
      metaList[2].setAttribute('content', colors.lightRed);
    }
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          type: this.state.theme,
          config: themeConfig[this.state.theme],
        }}
      >
        <div>
          <BrowserRouter>
            {/* <Routes /> */}
            <div>
              {/* <Route path="/" exact component={Home}/> */}
              <Route
                path="/"
                exact
                render={() => <Home toggleTheme={this.toggleTheme} />}
              />
              <Route path="/itemone" component={PostItem} />
              <Route path="/resume" render={() => <Resume />} />
            </div>
          </BrowserRouter>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
