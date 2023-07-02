import 'styled-components';

import { type theme } from 'styles';

type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
