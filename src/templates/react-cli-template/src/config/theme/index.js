import { createMuiTheme } from '@material-ui/core/styles';

// any default values

export const theme = createMuiTheme({
  overrides: {
    MuiTabs: {
      indicator: {
        background: '#FFFFFF'
      },
    },
    MuiTab: {
      textColorPrimary: {
        color: '#D0CCD0',
        '&.Mui-selected': {
          color: '#FFFFFF',
        },
      },
    },
  },
  palette: {
    primary: {
      main: 'rgb(0,0,0)', // #000000
    },
    secondary: {
      main: 'rgb(5,163,87)', // #05A357
    },
    info: {
      main: 'rgb(235,87,87)', // #EB5757
    },
    error: {
      main: 'rgb(255,0,0)', // #FF0000
    },
    white: {
      main: 'rgb(255,255,255)', // #FFFFFF
    },
    black: {
      main: 'rgb(0,0,0)', // #000000
    },
    grey: {
      main: 'rgb(224,224,224)', // #E0E0E0
      withOpacity: 'rgba(224,224,224, .8)',
      secondary: '#D0CCD0',
      third: '#F9F9F9',
    },
    greyDark: {
      main: '#757575',
      secondary: '#545454',
    },
    border: {
      main: 'rgba(16,19,20,0.1)', // #101314 + opacity 0.12
    },
    accent: {
      main: '#05A357',
      secondary: '#E2E2E2',
    },
    accentLight: {
      main: 'rgba(5, 163, 87, 0.3)',
    },
    dark: {
      main: '#000000',
      secondary: '#101314',
      withOpacity: 'rgba(0, 0, 0, 0.6)',
    },
    selection: {
      main: 'rgba(255,255,255,0.3)',
    },
    transparent: {
      main: 'transparent',
    },
  },
});