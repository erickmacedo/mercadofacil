// --- Interfaces (Estrutura dos dados) ---

export interface Market {
  id: string;
  name: string;
  logo: any;
  price: string;
  distance: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  image: any;
  category: string; // Categoria como string para abranger todas
  markets: Market[];
}

// --- Logos e Imagens ---

// Logos dos 5 mercados
const assaiLogo = require('../../assets/images/product_detail/Assai_logo_100x100.png');
const atakarejoLogo = require('../../assets/images/product_detail/Atakarejo_logo_100x100.png');
const extraLogo = require('../../assets/images/product_detail/Extra_logo_100x100.png');
const gbarbosaLogo = require('../../assets/images/product_detail/GBarbosa_logo_100x100.png');
const totalAtacadoLogo = require('../../assets/images/product_detail/Total_Atacado_logo_100x100.png');

// Imagem genérica para a maioria dos produtos
const genericProductImage = require('../../assets/images/products_icons/gererico_produto.png');

// Imagens Específicas (Recomendados e Cesta Básica)
const heinekenImg = require('../../assets/images/ShoppingList/HEINEKEN_350ML_50x50.png');
const amstelImg = require('../../assets/images/ShoppingList/AMSTEL_600ML_50x50.png');
const alcatraImg = require('../../assets/images/ShoppingList/ALCATRA_50x50.png');
const skolImg = require("../../assets/images/products_icons/skol_lata.png");
const arrozImg = require('../../assets/images/products_icons/arroz_5kg.png');
const feijaoImg = require('../../assets/images/products_icons/feijao_carioca_1kg.png');
const sabaoOmoImg = require('../../assets/images/ShoppingList/SABAO_OMO_50x50.png');


// --- Base de Dados Completa ---

export const allProducts: Product[] = [
  // --- Categoria: Recomendados (com imagens próprias) ---
  {
    id: 'rec1', name: 'Alcatra Peça (kg)', price: '39,90', image: alcatraImg, category: 'Recomendados',
    markets: [
      { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '42,90', distance: '1.5km' },
      { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '39,90', distance: '2.3km' },
      { id: 'm3', name: 'Extra', logo: extraLogo, price: '41,50', distance: '1.8km' },
      { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '43,80', distance: '3.0km' },
      { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '45,00', distance: '4.5km' },
    ]
  },
  {
    id: 'rec2', name: 'HEINEKEN 350ML', price: '7,49', image: heinekenImg, category: 'Recomendados',
    markets: [
      { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '7,69', distance: '1.5km' },
      { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '7,89', distance: '2.3km' },
      { id: 'm3', name: 'Extra', logo: extraLogo, price: '7,49', distance: '1.8km' },
      { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '7,59', distance: '3.0km' },
      { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '7,99', distance: '4.5km' },
    ]
  },
  {
    id: 'rec3', name: 'AMSTEL 600ML', price: '7,49', image: amstelImg, category: 'Recomendados',
    markets: [
      { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '7,89', distance: '1.5km' },
      { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '7,99', distance: '2.3km' },
      { id: 'm3', name: 'Extra', logo: extraLogo, price: '7,59', distance: '1.8km' },
      { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '7,49', distance: '3.0km' },
      { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '8,10', distance: '4.5km' },
    ]
  },
  {
    id: 'rec4', name: 'Cerveja Lata Skol', price: '3,09', image: skolImg, category: 'Recomendados',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '3,15', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '3,25', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '3,09', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '3,19', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '3,30', distance: '4.5km' },
    ]
  },

  // --- Categoria: Cesta Básica (com imagens próprias) ---
  {
    id: 'cb1', name: 'Arroz Tipo 1 Camil (5kg)', price: '25,99', image: arrozImg, category: 'Cesta Básica',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '26,49', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '27,10', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '25,99', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '26,89', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '27,50', distance: '4.5km' },
    ]
  },
  {
    id: 'cb2', name: 'Feijão Kicaldo (1kg)', price: '8,49', image: feijaoImg, category: 'Cesta Básica',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '8,69', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '8,75', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '8,59', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '8,49', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '8,99', distance: '4.5km' },
    ]
  },
   {
    id: 'cb3', name: 'SABÃO EM PÓ OMO', price: '3,60', image: sabaoOmoImg, category: 'Cesta Básica',
    markets: [
      { id: 'm1', name: 'Atakarejo', logo: atakarejoLogo, price: '3,60', distance: '2.3km' },
      { id: 'm2', name: 'Assaí Atacadista', logo: assaiLogo, price: '3,75', distance: '1.5km' },
      { id: 'm3', name: 'Extra', logo: extraLogo, price: '3,65', distance: '1.8km' },
      { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '3,89', distance: '3.0km' },
      { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '3,99', distance: '4.5km' },
    ]
  },

  // --- Demais Categorias (com imagem genérica) ---

  // Categoria: Hortifrúti
  {
    id: 'p1', name: 'Maçã Gala (kg)', price: '8,99', image: genericProductImage, category: 'Hortifrúti',
    markets: [
      { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '9,29', distance: '1.5km' },
      { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '8,99', distance: '2.3km' },
      { id: 'm3', name: 'Extra', logo: extraLogo, price: '9,49', distance: '1.8km' },
      { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '9,19', distance: '3.0km' },
      { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '9,59', distance: '4.5km' },
    ]
  },
  {
    id: 'p2', name: 'Banana Prata (kg)', price: '5,49', image: genericProductImage, category: 'Hortifrúti',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '5,49', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '5,69', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '5,59', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '5,79', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '5,89', distance: '4.5km' },
    ]
  },
  {
    id: 'p3', name: 'Alface Crespa (un)', price: '3,99', image: genericProductImage, category: 'Hortifrúti',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '4,19', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '3,99', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '4,09', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '4,29', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '4,39', distance: '4.5km' },
    ]
  },
  {
    id: 'p4', name: 'Tomate Italiano (kg)', price: '9,98', image: genericProductImage, category: 'Hortifrúti',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '10,28', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '9,98', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '10,48', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '10,18', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '10,58', distance: '4.5km' },
    ]
  },
  {
    id: 'p5', name: 'Cebola (kg)', price: '6,49', image: genericProductImage, category: 'Hortifrúti',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '6,79', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '6,49', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '6,69', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '6,89', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '6,99', distance: '4.5km' },
    ]
  },

  // Categoria: Carnes
  {
    id: 'p6', name: 'Patinho Moído (kg)', price: '38,90', image: genericProductImage, category: 'Carnes',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '39,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '38,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '40,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '39,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '41,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p7', name: 'Contrafilé em Bife (kg)', price: '45,90', image: genericProductImage, category: 'Carnes',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '46,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '45,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '47,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '46,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '48,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p8', name: 'Costela Bovina (kg)', price: '29,90', image: genericProductImage, category: 'Carnes',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '30,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '29,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '31,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '30,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '32,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p9', name: 'Linguiça Toscana Sadia (kg)', price: '19,99', image: genericProductImage, category: 'Carnes',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '20,99', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '19,99', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '21,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '20,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '22,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p10', name: 'Coração de Frango (kg)', price: '25,50', image: genericProductImage, category: 'Carnes',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '26,50', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '25,50', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '27,00', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '26,00', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '27,50', distance: '4.5km' },
    ]
  },

  // Categoria: Peixes e Frutos do Mar
  {
    id: 'p11', name: 'Salmão Fresco (kg)', price: '89,90', image: genericProductImage, category: 'Peixes e Frutos do Mar',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '92,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '89,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '94,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '91,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '95,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p12', name: 'Camarão Cinza Congelado (kg)', price: '49,90', image: genericProductImage, category: 'Peixes e Frutos do Mar',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '51,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '49,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '53,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '50,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '54,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p13', name: 'Tilápia Fresca (kg)', price: '35,90', image: genericProductImage, category: 'Peixes e Frutos do Mar',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '37,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '35,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '38,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '36,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '39,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p14', name: 'Lula Congelada (kg)', price: '59,90', image: genericProductImage, category: 'Peixes e Frutos do Mar',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '61,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '59,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '63,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '60,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '64,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p15', name: 'Polvo Congelado (kg)', price: '79,90', image: genericProductImage, category: 'Peixes e Frutos do Mar',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '81,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '79,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '83,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '80,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '84,00', distance: '4.5km' },
    ]
  },

  // Categoria: Aves
  {
    id: 'p16', name: 'Frango Inteiro (kg)', price: '12,90', image: genericProductImage, category: 'Aves',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '13,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '12,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '14,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '13,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '15,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p17', name: 'Peito de Frango (kg)', price: '18,90', image: genericProductImage, category: 'Aves',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '19,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '18,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '20,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '19,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '21,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p18', name: 'Coxa de Frango (kg)', price: '15,90', image: genericProductImage, category: 'Aves',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '16,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '15,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '17,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '16,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '18,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p19', name: 'Asa de Frango (kg)', price: '14,90', image: genericProductImage, category: 'Aves',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '15,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '14,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '16,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '15,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '17,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p20', name: 'Peru Inteiro (kg)', price: '22,90', image: genericProductImage, category: 'Aves',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '23,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '22,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '24,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '23,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '25,00', distance: '4.5km' },
    ]
  },

  // Categoria: Padaria e Confeitaria
  {
    id: 'p21', name: 'Pão Francês (kg)', price: '15,90', image: genericProductImage, category: 'Padaria e Confeitaria',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '16,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '15,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '17,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '16,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '18,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p22', name: 'Bolo de Chocolate (kg)', price: '25,90', image: genericProductImage, category: 'Padaria e Confeitaria',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '26,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '25,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '27,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '26,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '28,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p23', name: 'Pão de Queijo (kg)', price: '29,90', image: genericProductImage, category: 'Padaria e Confeitaria',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '30,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '29,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '31,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '30,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '32,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p24', name: 'Sonho de Creme (un)', price: '4,90', image: genericProductImage, category: 'Padaria e Confeitaria',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '5,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '4,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '6,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '5,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '7,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p25', name: 'Croissant (un)', price: '6,90', image: genericProductImage, category: 'Padaria e Confeitaria',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '7,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '6,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '8,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '7,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '9,00', distance: '4.5km' },
    ]
  },

  // Categoria: Laticínios
  {
    id: 'p26', name: 'Leite Integral (L)', price: '5,90', image: genericProductImage, category: 'Laticínios',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '6,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '5,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '7,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '6,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '8,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p27', name: 'Queijo Mussarela (kg)', price: '39,90', image: genericProductImage, category: 'Laticínios',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '40,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '39,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '41,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '40,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '42,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p28', name: 'Iogurte Natural (un)', price: '3,90', image: genericProductImage, category: 'Laticínios',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '4,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '3,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '5,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '4,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '6,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p29', name: 'Manteiga com Sal (250g)', price: '8,90', image: genericProductImage, category: 'Laticínios',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '9,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '8,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '10,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '9,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '11,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p30', name: 'Requeijão Cremoso (200g)', price: '6,90', image: genericProductImage, category: 'Laticínios',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '7,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '6,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '8,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '7,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '9,00', distance: '4.5km' },
    ]
  },

  // Categoria: Frios e Embutidos
  {
    id: 'p31', name: 'Presunto Cozido (kg)', price: '29,90', image: genericProductImage, category: 'Frios e Embutidos',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '30,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '29,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '31,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '30,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '32,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p32', name: 'Salame Italiano (kg)', price: '69,90', image: genericProductImage, category: 'Frios e Embutidos',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '71,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '69,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '73,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '70,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '74,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p33', name: 'Mortadela (kg)', price: '19,90', image: genericProductImage, category: 'Frios e Embutidos',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '20,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '19,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '21,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '20,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '22,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p34', name: 'Bacon em Pedaços (kg)', price: '35,90', image: genericProductImage, category: 'Frios e Embutidos',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '37,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '35,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '38,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '36,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '39,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p35', name: 'Peito de Peru (kg)', price: '49,90', image: genericProductImage, category: 'Frios e Embutidos',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '51,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '49,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '53,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '50,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '54,00', distance: '4.5km' },
    ]
  },

  // Categoria: Bebidas
  {
    id: 'p36', name: 'Refrigerante Coca-Cola (2L)', price: '8,90', image: genericProductImage, category: 'Bebidas',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '9,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '8,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '10,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '9,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '11,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p37', name: 'Suco de Laranja (1L)', price: '12,90', image: genericProductImage, category: 'Bebidas',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '13,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '12,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '14,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '13,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '15,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p38', name: 'Água Mineral (1.5L)', price: '2,90', image: genericProductImage, category: 'Bebidas',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '3,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '2,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '4,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '3,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '5,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p39', name: 'Chá Gelado (1L)', price: '9,90', image: genericProductImage, category: 'Bebidas',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '10,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '9,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '11,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '10,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '12,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p40', name: 'Água de Coco (1L)', price: '11,90', image: genericProductImage, category: 'Bebidas',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '12,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '11,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '13,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '12,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '14,00', distance: '4.5km' },
    ]
  },

  // Categoria: Bebidas Alcoólicas
  {
    id: 'p41', name: 'Cerveja Heineken (long neck)', price: '6,90', image: genericProductImage, category: 'Bebidas Alcoólicas',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '7,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '6,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '8,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '7,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '9,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p42', name: 'Vinho Tinto (750ml)', price: '39,90', image: genericProductImage, category: 'Bebidas Alcoólicas',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '41,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '39,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '43,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '40,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '44,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p43', name: 'Vodka Absolut (1L)', price: '89,90', image: genericProductImage, category: 'Bebidas Alcoólicas',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '92,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '89,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '94,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '91,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '95,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p44', name: 'Gin Tanqueray (750ml)', price: '129,90', image: genericProductImage, category: 'Bebidas Alcoólicas',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '132,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '129,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '134,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '131,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '135,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p45', name: 'Whisky Johnnie Walker Red Label (1L)', price: '99,90', image: genericProductImage, category: 'Bebidas Alcoólicas',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '102,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '99,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '104,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '101,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '105,00', distance: '4.5km' },
    ]
  },

  // Categoria: Grãos e Cereais
  {
    id: 'p46', name: 'Arroz Integral (1kg)', price: '8,90', image: genericProductImage, category: 'Grãos e Cereais',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '9,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '8,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '10,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '9,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '11,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p47', name: 'Feijão Preto (1kg)', price: '9,90', image: genericProductImage, category: 'Grãos e Cereais',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '10,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '9,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '11,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '10,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '12,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p48', name: 'Lentilha (500g)', price: '7,90', image: genericProductImage, category: 'Grãos e Cereais',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '8,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '7,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '9,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '8,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '10,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p49', name: 'Grão de Bico (500g)', price: '11,90', image: genericProductImage, category: 'Grãos e Cereais',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '12,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '11,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '13,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '12,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '14,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p50', name: 'Aveia em Flocos (500g)', price: '9,90', image: genericProductImage, category: 'Grãos e Cereais',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '10,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '9,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '11,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '10,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '12,00', distance: '4.5km' },
    ]
  },

  // Categoria: Massas
  {
    id: 'p51', name: 'Macarrão Espaguete (500g)', price: '4,90', image: genericProductImage, category: 'Massas',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '5,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '4,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '6,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '5,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '7,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p52', name: 'Macarrão Parafuso (500g)', price: '5,90', image: genericProductImage, category: 'Massas',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '6,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '5,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '7,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '6,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '8,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p53', name: 'Lasanha (500g)', price: '12,90', image: genericProductImage, category: 'Massas',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '13,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '12,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '14,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '13,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '15,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p54', name: 'Nhoque (500g)', price: '10,90', image: genericProductImage, category: 'Massas',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '11,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '10,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '12,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '11,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '13,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p55', name: 'Massa de Pastel (500g)', price: '8,90', image: genericProductImage, category: 'Massas',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '9,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '8,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '10,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '9,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '11,00', distance: '4.5km' },
    ]
  },

  // Categoria: Biscoitos e Snacks
  {
    id: 'p56', name: 'Biscoito Recheado (150g)', price: '3,90', image: genericProductImage, category: 'Biscoitos e Snacks',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '4,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '3,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '5,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '4,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '6,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p57', name: 'Salgadinho de Milho (150g)', price: '6,90', image: genericProductImage, category: 'Biscoitos e Snacks',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '7,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '6,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '8,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '7,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '9,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p58', name: 'Batata Frita (150g)', price: '9,90', image: genericProductImage, category: 'Biscoitos e Snacks',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '10,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '9,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '11,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '10,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '12,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p59', name: 'Amendoim Japonês (500g)', price: '15,90', image: genericProductImage, category: 'Biscoitos e Snacks',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '16,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '15,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '17,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '16,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '18,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p60', name: 'Torrada (150g)', price: '5,90', image: genericProductImage, category: 'Biscoitos e Snacks',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '6,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '5,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '7,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '6,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '8,00', distance: '4.5km' },
    ]
  },

  // Categoria: Café, Chá e Achocolatado
  {
    id: 'p61', name: 'Café em Pó (500g)', price: '15,90', image: genericProductImage, category: 'Café, Chá e Achocolatado',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '16,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '15,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '17,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '16,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '18,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p62', name: 'Chá de Camomila (10 sachês)', price: '8,90', image: genericProductImage, category: 'Café, Chá e Achocolatado',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '9,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '8,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '10,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '9,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '11,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p63', name: 'Achocolatado em Pó (400g)', price: '12,90', image: genericProductImage, category: 'Café, Chá e Achocolatado',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '13,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '12,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '14,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '13,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '15,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p64', name: 'Cappuccino em Pó (200g)', price: '18,90', image: genericProductImage, category: 'Café, Chá e Achocolatado',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '19,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '18,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '20,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '19,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '21,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p65', name: 'Café Solúvel (100g)', price: '14,90', image: genericProductImage, category: 'Café, Chá e Achocolatado',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '15,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '14,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '16,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '15,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '17,00', distance: '4.5km' },
    ]
  },

  // Categoria: Açúcar e Doces
  {
    id: 'p66', name: 'Açúcar Refinado (1kg)', price: '5,90', image: genericProductImage, category: 'Açúcar e Doces',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '6,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '5,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '7,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '6,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '8,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p67', name: 'Chocolate em Barra (100g)', price: '6,90', image: genericProductImage, category: 'Açúcar e Doces',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '7,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '6,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '8,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '7,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '9,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p68', name: 'Doce de Leite (400g)', price: '12,90', image: genericProductImage, category: 'Açúcar e Doces',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '13,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '12,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '14,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '13,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '15,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p69', name: 'Goiabada (300g)', price: '8,90', image: genericProductImage, category: 'Açúcar e Doces',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '9,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '8,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '10,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '9,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '11,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p70', name: 'Mel (250ml)', price: '18,90', image: genericProductImage, category: 'Açúcar e Doces',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '19,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '18,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '20,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '19,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '21,00', distance: '4.5km' },
    ]
  },

  // Categoria: Farinha e Fermento
  {
    id: 'p71', name: 'Farinha de Trigo (1kg)', price: '6,90', image: genericProductImage, category: 'Farinha e Fermento',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '7,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '6,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '8,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '7,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '9,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p72', name: 'Fermento em Pó (100g)', price: '4,90', image: genericProductImage, category: 'Farinha e Fermento',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '5,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '4,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '6,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '5,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '7,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p73', name: 'Farinha de Mandioca (1kg)', price: '8,90', image: genericProductImage, category: 'Farinha e Fermento',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '9,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '8,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '10,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '9,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '11,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p74', name: 'Amido de Milho (500g)', price: '7,90', image: genericProductImage, category: 'Farinha e Fermento',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '8,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '7,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '9,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '8,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '10,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p75', name: 'Fubá (1kg)', price: '5,90', image: genericProductImage, category: 'Farinha e Fermento',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '6,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '5,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '7,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '6,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '8,00', distance: '4.5km' },
    ]
  },

  // Categoria: Óleos e Azeites
  {
    id: 'p76', name: 'Óleo de Soja (900ml)', price: '8,90', image: genericProductImage, category: 'Óleos e Azeites',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '9,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '8,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '10,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '9,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '11,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p77', name: 'Azeite de Oliva Extra Virgem (500ml)', price: '29,90', image: genericProductImage, category: 'Óleos e Azeites',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '30,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '29,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '31,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '30,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '32,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p78', name: 'Óleo de Girassol (900ml)', price: '12,90', image: genericProductImage, category: 'Óleos e Azeites',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '13,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '12,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '14,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '13,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '15,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p79', name: 'Óleo de Coco (200ml)', price: '18,90', image: genericProductImage, category: 'Óleos e Azeites',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '19,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '18,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '20,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '19,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '21,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p80', name: 'Vinagre de Maçã (500ml)', price: '9,90', image: genericProductImage, category: 'Óleos e Azeites',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '10,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '9,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '11,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '10,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '12,00', distance: '4.5km' },
    ]
  },

  // Categoria: Molhos, Temperos e Condimentos
  {
    id: 'p81', name: 'Molho de Tomate (340g)', price: '3,90', image: genericProductImage, category: 'Molhos, Temperos e Condimentos',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '4,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '3,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '5,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '4,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '6,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p82', name: 'Maionese (500g)', price: '8,90', image: genericProductImage, category: 'Molhos, Temperos e Condimentos',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '9,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '8,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '10,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '9,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '11,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p83', name: 'Ketchup (400g)', price: '7,90', image: genericProductImage, category: 'Molhos, Temperos e Condimentos',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '8,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '7,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '9,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '8,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '10,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p84', name: 'Mostarda (200g)', price: '6,90', image: genericProductImage, category: 'Molhos, Temperos e Condimentos',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '7,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '6,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '8,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '7,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '9,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p85', name: 'Sal Refinado (1kg)', price: '2,90', image: genericProductImage, category: 'Molhos, Temperos e Condimentos',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '3,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '2,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '4,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '3,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '5,00', distance: '4.5km' },
    ]
  },

  // Categoria: Produtos de Limpeza
  {
    id: 'p86', name: 'Detergente Líquido (500ml)', price: '3,90', image: genericProductImage, category: 'Produtos de Limpeza',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '4,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '3,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '5,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '4,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '6,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p87', name: 'Sabão em Pó (1kg)', price: '15,90', image: genericProductImage, category: 'Produtos de Limpeza',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '16,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '15,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '17,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '16,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '18,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p88', name: 'Água Sanitária (1L)', price: '4,90', image: genericProductImage, category: 'Produtos de Limpeza',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '5,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '4,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '6,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '5,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '7,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p89', name: 'Amaciante (2L)', price: '18,90', image: genericProductImage, category: 'Produtos de Limpeza',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '19,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '18,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '20,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '19,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '21,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p90', name: 'Limpador Multiuso (500ml)', price: '6,90', image: genericProductImage, category: 'Produtos de Limpeza',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '7,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '6,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '8,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '7,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '9,00', distance: '4.5km' },
    ]
  },

  // Categoria: Higiene Pessoal
  {
    id: 'p91', name: 'Shampoo (350ml)', price: '15,90', image: genericProductImage, category: 'Higiene Pessoal',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '16,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '15,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '17,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '16,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '18,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p92', name: 'Condicionador (350ml)', price: '16,90', image: genericProductImage, category: 'Higiene Pessoal',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '17,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '16,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '18,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '17,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '19,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p93', name: 'Sabonete (90g)', price: '2,90', image: genericProductImage, category: 'Higiene Pessoal',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '3,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '2,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '4,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '3,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '5,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p94', name: 'Creme Dental (90g)', price: '5,90', image: genericProductImage, category: 'Higiene Pessoal',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '6,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '5,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '7,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '6,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '8,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p95', name: 'Desodorante (150ml)', price: '18,90', image: genericProductImage, category: 'Higiene Pessoal',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '19,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '18,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '20,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '19,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '21,00', distance: '4.5km' },
    ]
  },

  // Categoria: Alimentos Congelados
  {
    id: 'p96', name: 'Pizza Congelada (460g)', price: '22,90', image: genericProductImage, category: 'Alimentos Congelados',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '23,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '22,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '24,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '23,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '25,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p97', name: 'Lasanha Congelada (600g)', price: '18,90', image: genericProductImage, category: 'Alimentos Congelados',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '19,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '18,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '20,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '19,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '21,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p98', name: 'Pão de Queijo Congelado (1kg)', price: '25,90', image: genericProductImage, category: 'Alimentos Congelados',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '26,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '25,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '27,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '26,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '28,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p99', name: 'Batata Frita Congelada (2kg)', price: '35,90', image: genericProductImage, category: 'Alimentos Congelados',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '37,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '35,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '38,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '36,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '39,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p100', name: 'Hambúrguer Congelado (12 un)', price: '29,90', image: genericProductImage, category: 'Alimentos Congelados',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '30,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '29,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '31,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '30,50', distance: '3.0km' },
        { id: 'm5', name: 'Total Atacado', logo: totalAtacadoLogo, price: '32,00', distance: '4.5km' },
    ]
  },
  {
    id: 'p101', name: 'Polpa de Fruta (1kg)', price: '15,90', image: genericProductImage, category: 'Alimentos Congelados',
    markets: [
        { id: 'm1', name: 'Assaí Atacadista', logo: assaiLogo, price: '16,90', distance: '1.5km' },
        { id: 'm2', name: 'Atakarejo', logo: atakarejoLogo, price: '15,90', distance: '2.3km' },
        { id: 'm3', name: 'Extra', logo: extraLogo, price: '17,50', distance: '1.8km' },
        { id: 'm4', name: 'G Barbosa', logo: gbarbosaLogo, price: '16,50', distance: '3.0km' },
        { id: 'm5', 'name': 'Total Atacado', logo: totalAtacadoLogo, price: '18,00', distance: '4.5km' },
    ]
  }
];

// Exporta as categorias dinamicamente a partir da lista de produtos
export const categories = [...new Set(allProducts.map(p => p.category))];