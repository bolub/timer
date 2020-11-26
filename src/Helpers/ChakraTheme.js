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
    primary:
    {
      50: '#e4e5ff',
      100: '#b2b5ff',
      200: '#8084ff',
      300: '#4e53fe',
      400: '#1f22fd',
      500: '#0a0ae4',
      600: '#0307b2',
      700: '#000480',
      800: '#00034f',
      900: '#00001f',
    },
    // gray:
    // {
    //   50: '#f2f2f2',
    //   100: '#d9d9d9',
    //   200: '#bfbfbf',
    //   300: '#a6a6a6',
    //   400: '#8c8c8c',
    //   500: '#737373',
    //   600: '#595959',
    //   700: '#404040',
    //   800: '#262626',
    //   900: '#0d0d0d',
    // },
  }
}

export { customTheme };

