import {
  base,
  blackS,
  blueG,
  greenO,
  orangeS,
  whiteS,
  yellowG,
  yellowO,
} from './colors';

// enum Themes {
//   DEFAULT,
//   OAKLAND,
//   WARRIORS,
//   GIANTS,
// }

export const DefaultTheme = {
  hoverBackgroundColor: base[300],
  inputBackgroundColor: base[400],
  lightColor: base[400],
  primaryColor: base[50],
  selectColor: base[500],
  textColor: base[900],
  /**
   * grey #7f7f7f
   * black #000000
   * white #f7f7f7
   */
};

export const GoldenStateTheme = {
  hoverBackgroundColor: yellowG[200],
  inputBackgroundColor: base[400],
  lightColor: blueG[300],
  primaryColor: blueG[500],
  selectColor: blueG[400],
  textColor: yellowG[500],
};

export const OaklandAsTheme = {
  hoverBackgroundColor: greenO[200],
  inputBackgroundColor: base[400],
  lightColor: yellowO[300],
  primaryColor: yellowO[500],
  selectColor: yellowO[400],
  textColor: greenO[500],
};

export const SfGiantTheme = {
  hoverBackgroundColor: orangeS[400],
  inputBackgroundColor: base[400],
  lightColor: orangeS[300],
  primaryColor: orangeS[500],
  selectColor: blackS[500],
  textColor: whiteS[500],
};

export const themes = [
  { name: 'Default', theme: DefaultTheme },
  {
    name: 'Golden State Warriors',
    theme: GoldenStateTheme,
  },
  {
    name: 'Oakland Athletics',
    theme: OaklandAsTheme,
  },
  { name: 'San Francisco Giants', theme: SfGiantTheme },
];
