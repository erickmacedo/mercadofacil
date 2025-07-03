import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import COLORS from '@/constants/colors';
import FONTS from '@/constants/fonts';
// --- CORREÇÃO AQUI ---
// Usando caminho relativo para importar a interface Product
import { Product } from '../../mocks/allProducts';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={{ pathname: '/(panel)/ProductDetail/page', params: { productId: product.id } }} asChild>
      <TouchableOpacity style={styles.productCard}>
        <Image source={product.image} style={styles.productImage} resizeMode="contain" />
        <Text style={styles.productName} numberOfLines={2}>{product.name}</Text>
        <Text style={FONTS.price}>R$ {product.price}</Text>
        <View style={styles.compareButton}>
          <Text style={FONTS.buttonSecondary}>Compare já</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

// ... (seus estilos continuam os mesmos)
const styles = StyleSheet.create({
  productCard: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 15,
    marginRight: 15,
    width: 160,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  productImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  productName: {
    fontSize: 13,
    color: COLORS.secondary,
    textAlign: 'center',
    marginBottom: 5,
    minHeight: 35,
  },
  compareButton: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 20,
  },
});

export default ProductCard;