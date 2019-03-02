import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import config from './config';
import ThemeContext, { themeConfig } from './themes/ThemeContext';
import * as colors from './themes/colors';
import { LIGHT, DARK, META, MODE, CONTENT } from './themes/strings';
import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';
import withTracker from './config/withTracker';
import { NullUndefinedNotdefined, ChecqDisqus } from './pages/Posts';
import NotFoundPage from './pages/404';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: LIGHT,
      configs: [config.GA_CONFIG],
    };
  }

  componentDidMount() {
    //Initialize Google analytics with default config

    ReactGA.initialize(this.state.configs);
    // mode: maintaining the theme state on refresh
    // meta: setting the status bar colors on mobile

    let mode = localStorage.getItem(MODE);
    let metaList = document.getElementsByTagName(META);
    if (mode === DARK) {
      document.body.style.background = themeConfig.dark.body;
      localStorage.setItem(MODE, DARK);
      metaList[2].setAttribute(CONTENT, colors.notSoBlack);
      this.setState({ theme: DARK });
    } else {
      localStorage.setItem(MODE, LIGHT);
      document.body.style.background = themeConfig.light.body;
      metaList[2].setAttribute(CONTENT, colors.lightRed);
      this.setState({ theme: LIGHT });
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
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => <Home toggleTheme={this.toggleTheme} />}
                />
                <Route path="/resume" render={() => <Resume />} />
                <Route
                  path="/null-undefined-and-notdefined"
                  component={withTracker(NullUndefinedNotdefined)}
                />
                <Route
                  path="/checq-disqus"
                  component={withTracker(ChecqDisqus)}
                />
                <Route path="*" component={withTracker(NotFoundPage)} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
