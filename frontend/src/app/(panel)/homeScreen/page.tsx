'use client';

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter, Link } from 'expo-router';
import COLORS from '@/constants/colors';
import FONTS from '@/constants/fonts';
import { allProducts } from '../../../mocks/allProducts';
import ProductCard from '../../../components/ui/ProductCard';


const recommendedProducts = allProducts.filter(p => p.category === 'Recomendados');
const basicBasketProducts = allProducts.filter(p => p.category === 'Cesta Básica');

const HomeScreen: React.FC = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* ... (seu header e outros componentes continuam aqui) ... */}
      <View style={styles.header}>
        <View style={{width: 30}} />
        <Link href="/(panel)/profile/page" asChild>
          <TouchableOpacity>
            <Ionicons name="person-circle-outline" size={30} color={COLORS.secondary} />
          </TouchableOpacity>
        </Link>
      </View>
      <Text style={[FONTS.h1Dark, styles.greeting]}>Olá Antonio, Boa Noite!</Text>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={COLORS.darkGray} style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Procurar Produtos" placeholderTextColor={COLORS.darkGray}/>
      </View>
      <View style={styles.actionIconsContainer}>
        <Link href="/(panel)/ListManager/page" asChild>
          <TouchableOpacity style={styles.actionIconBox}>
            <MaterialCommunityIcons name="format-list-checks" size={35} color={COLORS.primary} />
            <Text style={styles.actionIconText}>Lista de Compras</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/(panel)/CategoriesScreen/page" asChild>
          <TouchableOpacity style={styles.actionIconBox}>
            <MaterialCommunityIcons name="compare" size={35} color={COLORS.primary} />
            <Text style={styles.actionIconText}>Comparar Produtos</Text>
          </TouchableOpacity>
        </Link>
      </View>
      {/* ---------------------------------------------------- */}

      <View style={styles.sectionHeader}>
        <Text style={FONTS.h3}>Recomendados</Text>
        <TouchableOpacity onPress={() => router.push({ pathname: '/(panel)/productList/page', params: { category: 'Recomendados' } })}>
          <Text style={FONTS.buttonSecondary}>Ver todos</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        // 2. Simplifica a renderização usando o novo componente
        data={recommendedProducts}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />

      <View style={styles.sectionHeader}>
        <Text style={FONTS.h3}>Cesta Básica</Text>
        <TouchableOpacity onPress={() => router.push({ pathname: '/(panel)/productList/page', params: { category: 'Cesta Básica' } })}>
          <Text style={FONTS.buttonSecondary}>Ver todos</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        // 3. Reutiliza o mesmo componente aqui
        data={basicBasketProducts}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />
    </ScrollView>
  );
};

// ... (seus estilos da homeScreen continuam os mesmos)
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, paddingTop: 50, },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginBottom: 15, },
  greeting: { paddingHorizontal: 20, marginBottom: 20, },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.lightGray, borderRadius: 12, paddingHorizontal: 15, marginHorizontal: 20, height: 50, marginBottom: 25, },
  searchIcon: { marginRight: 10, },
  searchInput: { flex: 1, fontSize: 16, color: COLORS.secondary, },
  actionIconsContainer: { flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 20, marginBottom: 30, },
  actionIconBox: { alignItems: 'center', backgroundColor: COLORS.white, padding: 15, borderRadius: 15, width: '45%', shadowColor: "#000", shadowOffset: { width: 0, height: 1, }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 3, },
  actionIconText: { marginTop: 8, fontSize: 14, color: COLORS.secondary, fontWeight: '500', },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginBottom: 15, },
  productList: { paddingLeft: 20, paddingRight: 10, marginBottom: 20, },
});

export default HomeScreen;