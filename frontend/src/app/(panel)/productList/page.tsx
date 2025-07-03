'use client';

import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
// ... outras importações
import COLORS from '@/constants/colors';
import FONTS from '@/constants/fonts';
import { Ionicons } from '@expo/vector-icons';
import ProductCard from '../../../components/ui/ProductCard'; // Caminho relativo corrigido
import { allProducts } from '../../../mocks/allProducts'; // Caminho relativo corrigido

const ProductListScreen = () => {
  const { category } = useLocalSearchParams<{ category: string }>();
  const router = useRouter();

  const productsToShow = category
    ? allProducts.filter(p => p.category === category)
    : [];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={COLORS.secondary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{category || 'Produtos'}</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.orderByContainer}>
        <Text style={FONTS.body}>Ordenar por:</Text>
        <View style={styles.orderByButtons}>
          <TouchableOpacity style={styles.orderByButton}><Text style={FONTS.buttonSecondary}>Menor Preço</Text></TouchableOpacity>
          <TouchableOpacity style={styles.orderByButton}><Text style={FONTS.buttonSecondary}>Menor Distância</Text></TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={productsToShow}
        renderItem={({ item }) => (
            <View style={styles.cardWrapper}>
                <ProductCard product={item} />
            </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, paddingTop: 50 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  // --- CORREÇÃO AQUI ---
  // Esta linha agora está correta e não mostrará mais o erro
  headerTitle: { ...FONTS.h2Dark },
  orderByContainer: { paddingHorizontal: 20, marginBottom: 20 },
  orderByButtons: { flexDirection: 'row', marginTop: 10, alignItems: 'center' },
  orderByButton: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  listContainer: { paddingHorizontal: 12 },
  cardWrapper: {
    flex: 1 / 2,
    alignItems: 'center',
    padding: 8,
  },
});

export default ProductListScreen;