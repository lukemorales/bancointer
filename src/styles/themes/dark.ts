import light from './light';

const dark: typeof light = {
  ...light,
  colors: {
    ...light.colors,
    grey: '#d4d6e0',
    lightGrey: '#343233',
    darkGrey: '#f3f3f3',
    background: '#272727',
  },
};

export default dark;
