import theme from '@chakra-ui/theme';

const customTheme = {
  ...theme,
  fonts: {
    body: "Mulish, sans-serif",
    heading: "Mulish, sans-serif",
    mono: "Menlo, monospace",
  },
  colors: {
    ...theme.colors,
    red: {
      50: '#ffeaed',
      100: '#ebcbcd',
      200: '#d6abac',
      300: '#c2898c',
      400: '#b0696b',
      500: '#964f51',
      600: '#763d3f',
      700: '#552b2c',
      800: '#35181a',
      900: '#1a0505',
    },
    gray:
    {
      50: '#f2f2f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#0d0d0d',
    }
  }
}

export { customTheme };

