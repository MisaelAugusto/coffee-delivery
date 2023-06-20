const DEFAULT_BALOO2_TYPOGRAPHY_STYLES = {
  fontWeight: 800,
  lineHeight: '130%',
  fontFamily: "'Baloo 2', cursive",
  color: '#29292e'
};

const DEFAULT_ROBOTO_TYPOGRAPHY_STYLES = {
  fontWeight: 400,
  lineHeight: '130%',
  fontFamily: "'Roboto', sans-serif",
  color: '#29292e'
};

const theme = {
  white: '#ffffff',
  yellow: {
    main: '#dbac2c',
    light: '#f1e9c9',
    dark: '#c47f17'
  },
  purple: {
    main: '#8047f8',
    light: '#ebe5f9',
    dark: '#4b2995'
  },
  base: {
    title: '#272221',
    subtitle: '#403937',
    text: '#574f4d',
    label: '#8d8686',
    hover: '#d7d5d5',
    button: '#e6e5e5',
    input: '#ededed',
    card: '#f3f2f2',
    background: '#fafafa'
  },
  typography: {
    baloo2: {
      XL: {
        fontSize: '3rem',
        ...DEFAULT_BALOO2_TYPOGRAPHY_STYLES
      },
      L: {
        fontSize: '2rem',
        ...DEFAULT_BALOO2_TYPOGRAPHY_STYLES
      },
      M: {
        fontSize: '1.5rem',
        ...DEFAULT_BALOO2_TYPOGRAPHY_STYLES
      },
      S: {
        fontSize: '1.25rem',
        ...DEFAULT_BALOO2_TYPOGRAPHY_STYLES,
        fontWeight: 700
      },
      XS: {
        fontSize: '1.125rem',
        ...DEFAULT_BALOO2_TYPOGRAPHY_STYLES,
        fontWeight: 700
      }
    },
    roboto: {
      L: {
        fontSize: '1.125rem',
        ...DEFAULT_ROBOTO_TYPOGRAPHY_STYLES
      },
      M: {
        fontSize: '1rem',
        ...DEFAULT_ROBOTO_TYPOGRAPHY_STYLES
      },
      S: {
        fontSize: '0.875rem',
        ...DEFAULT_ROBOTO_TYPOGRAPHY_STYLES
      },
      XS: {
        fontSize: '0.75rem',
        ...DEFAULT_ROBOTO_TYPOGRAPHY_STYLES,
        fontWeight: 700
      },
      tag: {
        fontSize: '0.625rem',
        ...DEFAULT_ROBOTO_TYPOGRAPHY_STYLES,
        fontWeight: 700
      },
      buttonG: {
        fontSize: '0.875rem',
        ...DEFAULT_ROBOTO_TYPOGRAPHY_STYLES,
        fontWeight: 700,
        lineHeight: '160%'
      },
      buttonM: {
        fontSize: '0.75rem',
        ...DEFAULT_ROBOTO_TYPOGRAPHY_STYLES,
        lineHeight: '160%'
      }
    }
  }
};

export default theme;
