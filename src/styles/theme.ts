export default {
  colors: {
    primary: '#FF8700',
    primaryDark: '#FF7A00',
    secondary: '#FF500F',
    grey: '#8C91A5',
    greyLowerOpacity: '#abaebf',
    lightGrey: '#F5F6FA',
    darkGrey: '#6C757D',
    success: '#20C05C',
    error: '#FD4F48',
    background: '#fff',
    yellow: '#FFED00',
  },
  fontSizes: {
    default: '1.4rem',
    large: '1.6rem',
    small: '1.2rem',
    tiny: '1rem',
  },
  spacing: {
    default: '1.6rem',
    vertical: '1.6rem 0',
    horizontal: '0 1.6rem',
    large: '2.4rem',
  },
  transition: {
    default: '180ms ease-in-out',
  },
  radius: {
    default: '0.8rem',
    small: '0.4rem',
    tiny: '0.2rem',
  },
  shadows: {
    default: '0 0.5rem 2rem rgba(0, 0, 0, 0.08)',
    flat: '0 0.2rem 0.2rem rgba(0, 0, 0, 0.08)',
  },
} as const;
