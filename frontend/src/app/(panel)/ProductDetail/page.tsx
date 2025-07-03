'use client';

import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { allProducts } from '../../../mocks/allProducts'; // Caminho relativo
import COLORS from '@/constants/colors';
import FONTS from '@/constants/fonts';
import { Ionicons } from '@expo/vector-icons';

const ProductDetailScreen = () => {
  const router = useRouter();
  const { productId } = useLocalSearchParams<{ productId: string }>();
  const product = allProducts.find(p => p.id === productId);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={FONTS.h2Dark}>Produto não encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={COLORS.secondary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detalhes do Produto</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.productInfoContainer}>
        <Image source={product.image} style={styles.productImage} resizeMode="contain" />
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>A partir de R$ {product.price}</Text>
      </View>

      <TouchableOpacity style={styles.addToListButton}>
        {/* --- CORREÇÃO AQUI --- */}
        {/* Usando um estilo de botão que existe, como 'buttonSecondary' ou um genérico.
            Para o texto branco, aplicamos a cor diretamente. */}
        <Text style={[FONTS.buttonSecondary, { color: COLORS.white }]}>Adicionar na Lista de Compras</Text>
      </TouchableOpacity>

      <View style={styles.marketSection}>
        <Text style={FONTS.h3}>Mercados mais próximos</Text>
        {product.markets.map((market) => (
          <View key={market.id} style={styles.marketCard}>
            <Image source={market.logo} style={styles.marketLogo} resizeMode="contain" />
            <View style={styles.marketInfo}>
              <Text style={styles.marketName}>{market.name}</Text>
              <Text style={styles.marketDistance}>{market.distance}</Text>
            </View>
            <Text style={styles.marketPrice}>R$ {market.price}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerTitle: {
    ...FONTS.h3,
  },
  productInfoContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  productName: {
    ...FONTS.h2Dark,
    textAlign: 'center',
    marginBottom: 8,
  },
  productPrice: {
    ...FONTS.h3,
    color: COLORS.primary,
    marginBottom: 20,
  },
  addToListButton: {
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 30,
  },
  addToListButtonText: {
    // Este estilo foi removido para usar o que vem do FONTS
  },
  marketSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  marketCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
  },
  marketLogo: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  marketInfo: {
    flex: 1,
  },
  marketName: {
    ...FONTS.body,
    fontWeight: 'bold',
  },
  marketDistance: {
    ...FONTS.body,
    color: COLORS.darkGray,
  },
  marketPrice: {
    ...FONTS.price,
    fontSize: 18,
  },
});

export default ProductDetailScreen;