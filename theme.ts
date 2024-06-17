import { UnistylesRegistry, UnistylesRuntime } from 'react-native-unistyles';

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  superLarge: 2000,
  tvLike: 4000,
};

const same = {
  scale: (value = 10) => {
    const threshold = 1 / 360;
    return Math.round(value * threshold * UnistylesRuntime.screen.width);
  },
  width: (percentage = 1) => {
    return UnistylesRuntime.screen.width * (percentage / 100);
  },
};

export const lightTheme = {
  colors: {
    typography: '#000000',
    background: '#ffffff',
    primary: 'blue',
    secondary: 'brown',
  },
  ...same,
} as const;

export const darkTheme = {
  colors: {
    typography: '#ffffff',
    background: '#000000',
    primary: 'green',
    secondary: 'royalblue',
  },
  ...same,
} as const;

// define other themes

type AppBreakpoints = typeof breakpoints;
type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light: lightTheme,
    dark: darkTheme,
  })
  .addConfig({
    adaptiveThemes: true,
  });
