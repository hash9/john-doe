import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ThemeContext, { themeConfig } from './themes/ThemeContext';
import * as colors from './themes/colors';
import { LIGHT, DARK, META, MODE, CONTENT } from './themes/strings';
import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';
import { NullUndefinedNotdefined } from './pages/Posts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: LIGHT,
    };
  }

  componentDidMount() {
    // mode: maintaining the theme state on refresh
    // meta: setting the status bar colors on mobile
    let mode = localStorage.getItem(MODE);
    let metaList = document.getElementsByTagName(META);
    if (mode === DARK) {
      document.body.style.background = themeConfig.dark.body;
      metaList[2].setAttribute(CONTENT, colors.notSoBlack);
      this.setState({ theme: mode });
    } else {
      document.body.style.background = themeConfig.light.body;
      metaList[2].setAttribute(CONTENT, colors.lightRed);
      this.setState({ theme: mode });
    }
  }

  toggleTheme = () => {
    let mode = localStorage.getItem(MODE);
    let metaList = document.getElementsByTagName(META);

    if (mode === LIGHT) {
      localStorage.setItem(MODE, DARK);
      document.body.style.background = themeConfig.dark.body;
      metaList[2].setAttribute(CONTENT, colors.notSoBlack);
      this.setState({ theme: DARK });
    } else {
      localStorage.setItem(MODE, LIGHT);
      document.body.style.background = themeConfig.light.body;
      metaList[2].setAttribute(CONTENT, colors.lightRed);
      this.setState({ theme: LIGHT });
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
            <div>
              <Route
                path="/"
                exact
                render={() => <Home toggleTheme={this.toggleTheme} />}
              />
              <Route path="/resume" render={() => <Resume />} />
              <Route
                path="/null-undefined-and-notdefined"
                component={NullUndefinedNotdefined}
              />
            </div>
          </BrowserRouter>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
