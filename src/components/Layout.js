import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import ContentWrapper from './ContentWrapper';
import ThemeToggle from './ThemeToggle';
import themes from '../utilities/themes';

export default class Layout extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static themeKeys = {
    dark: 'dark',
    light: 'light',
  };

  state = {
    themeKey: Layout.themeKeys.light,
  };

  componentDidMount() {
    const themeKey = Cookies.get('theme');
    if (themeKey) this.setState({ themeKey });
  }

  getNextThemeKey() {
    const { themeKey } = this.state;

    return themeKey === Layout.themeKeys.dark
      ? Layout.themeKeys.light
      : Layout.themeKeys.dark;
  }

  toggleTheme = () => {
    const themeKey = this.getNextThemeKey();
    Cookies.set('theme', themeKey);
    this.setState({ themeKey });
  };

  render() {
    const { children } = this.props;
    const { themeKey } = this.state;

    return (
      <ThemeProvider theme={themes[themeKey]}>
        <ContentWrapper>
          <ThemeToggle onClick={this.toggleTheme}>
            switch to {this.getNextThemeKey()} theme
          </ThemeToggle>
          {children}
        </ContentWrapper>
      </ThemeProvider>
    );
  }
}
