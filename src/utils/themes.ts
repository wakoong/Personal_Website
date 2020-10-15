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

export interface IThemeProps {
  emphasisColor: string;
  hoverBackgroundColor: string;
  inputBackgroundColor: string;
  lightColor: string;
  primaryColor: string;
  selectColor: string;
  textColor: string;
}

export const DefaultTheme: IThemeProps = {
  emphasisColor: base[900],
  hoverBackgroundColor: base[300],
  inputBackgroundColor: base[400],
  lightColor: base[400],
  primaryColor: base[50],
  selectColor: base[500],
  textColor: base[900],
};

export const GoldenStateTheme: IThemeProps = {
  emphasisColor: yellowG[500],
  hoverBackgroundColor: yellowG[400],
  inputBackgroundColor: base[400],
  lightColor: blueG[300],
  primaryColor: blueG[500],
  selectColor: blueG[400],
  textColor: yellowG[100],
};

export const OaklandAsTheme: IThemeProps = {
  emphasisColor: greenO[500],
  hoverBackgroundColor: greenO[200],
  inputBackgroundColor: base[400],
  lightColor: yellowO[300],
  primaryColor: yellowO[500],
  selectColor: yellowO[400],
  textColor: blackS[500],
};

export const SfGiantTheme: IThemeProps = {
  emphasisColor: whiteS[500],
  hoverBackgroundColor: orangeS[400],
  inputBackgroundColor: base[400],
  lightColor: orangeS[300],
  primaryColor: orangeS[500],
  selectColor: blackS[500],
  textColor: whiteS[500],
};

interface IThemes {
  name:
    | 'Default'
    | 'Golden State Warriors'
    | 'Oakland Athletics'
    | 'San Francisco Giants';
  theme: IThemeProps;
}

export const themes: IThemes[] = [
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
