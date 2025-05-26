import { TextStyle } from 'react-native';
import COLORS from './colors';

// Tamanhos 
export const FONT_SIZE = {
  xs: 10,
  small: 12,
  medium: 14,
  regular: 16,
  large: 18,
  xl: 20,
  xxl: 22,
  xxxl: 24,
  title: 28,
};

// Pesos de fonte
export const FONT_WEIGHT = {
  normal: '400' as '400',
  medium: '500' as '500',
  semiBold: '600' as '600',
  bold: 'bold' as 'bold',
};

//  cabeçalhos
export const HEADING: Record<string, TextStyle> = {
  h1: { 
    fontSize: FONT_SIZE.title, 
    fontWeight: FONT_WEIGHT.bold, 
    color: COLORS.white 
  },
  h1Dark: { 
    fontSize: FONT_SIZE.title, 
    fontWeight: FONT_WEIGHT.bold, 
    color: COLORS.secondary 
  },
  h2: { 
    fontSize: FONT_SIZE.regular, 
    color: COLORS.white, 
    marginBottom: 30, 
    opacity: 0.8 
  },
  h2Dark: { 
    fontSize: FONT_SIZE.xxl, 
    fontWeight: FONT_WEIGHT.bold, 
    color: COLORS.secondary 
  },
  h3: { 
    fontSize: FONT_SIZE.xl, 
    fontWeight: FONT_WEIGHT.semiBold, 
    color: COLORS.secondary 
  },
  sectionTitle: { 
    fontSize: FONT_SIZE.large, 
    fontWeight: FONT_WEIGHT.semiBold, 
    color: COLORS.secondary, 
    marginBottom: 10 
  },
};

// Estilos de texto para corpo de texto
export const BODY: Record<string, TextStyle> = {
  default: { 
    fontSize: FONT_SIZE.medium, 
    color: COLORS.secondary 
  },
  caption: { 
    fontSize: FONT_SIZE.small, 
    color: COLORS.darkGray 
  },
  label: { 
    fontSize: FONT_SIZE.medium, 
    color: COLORS.secondary, 
    marginBottom: 5, 
    marginLeft: 5 
  },
  input: { 
    fontSize: FONT_SIZE.regular, 
    color: COLORS.secondary 
  },
  error: { 
    fontSize: FONT_SIZE.small, 
    color: COLORS.error, 
    marginTop: 5, 
    marginLeft: 5 
  },
};

// Estilos texto  botões
export const BUTTON: Record<string, TextStyle> = {
  primary: { 
    fontSize: FONT_SIZE.large, 
    fontWeight: FONT_WEIGHT.bold, 
    color: COLORS.white 
  },
  secondary: { 
    fontSize: FONT_SIZE.medium, 
    fontWeight: FONT_WEIGHT.bold, 
    color: COLORS.primary 
  },
  link: { 
    fontSize: FONT_SIZE.medium, 
    color: COLORS.link, 
    fontWeight: FONT_WEIGHT.medium 
  },
  guest: { 
    fontSize: FONT_SIZE.medium, 
    fontWeight: FONT_WEIGHT.medium, 
    color: COLORS.guestButtonText 
  },
};

// Estilos  texto  preços
export const PRICE: Record<string, TextStyle> = {
  default: { 
    fontSize: FONT_SIZE.regular, 
    fontWeight: FONT_WEIGHT.bold, 
    color: COLORS.primary 
  },
  large: { 
    fontSize: FONT_SIZE.xl, 
    fontWeight: FONT_WEIGHT.bold, 
    color: COLORS.primary 
  },
  medium: { 
    fontSize: FONT_SIZE.regular, 
    fontWeight: FONT_WEIGHT.medium, 
    color: COLORS.secondary 
  },
};

// Estilos de texto para elementos especiais
export const SPECIAL: Record<string, TextStyle> = {
  animatedText: { 
    fontSize: FONT_SIZE.medium, 
    fontWeight: FONT_WEIGHT.bold, 
    color: COLORS.animatedText, 
    textAlign: 'center' as 'center' 
  },
  bestOption: { 
    fontSize: FONT_SIZE.medium, 
    fontWeight: FONT_WEIGHT.bold, 
    color: COLORS.primary 
  },
  category: { 
    fontSize: FONT_SIZE.medium, 
    color: COLORS.secondary, 
    fontWeight: FONT_WEIGHT.medium 
  },
  categorySelected: { 
    fontSize: FONT_SIZE.medium, 
    color: COLORS.primary, 
    fontWeight: FONT_WEIGHT.bold 
  },
};

// Objeto de fontes para compatibilidade com código existente
export const FONTS = {
  h1: HEADING.h1,
  h1Dark: HEADING.h1Dark,
  h2: HEADING.h2,
  h2Dark: HEADING.h2Dark,
  h3: HEADING.h3,
  sectionTitle: HEADING.sectionTitle,
  body: BODY.default,
  caption: BODY.caption,
  label: BODY.label,
  input: BODY.input,
  error: BODY.error,
  button: BUTTON.primary,
  buttonSecondary: BUTTON.secondary,
  link: BUTTON.link,
  guestButton: BUTTON.guest,
  price: PRICE.default,
  priceSmall: PRICE.medium,
  totalPrice: PRICE.large,
  animatedText: SPECIAL.animatedText,
  bestOptionText: SPECIAL.bestOption,
  category: SPECIAL.category,
  categorySelected: SPECIAL.categorySelected,
};

export default FONTS;
