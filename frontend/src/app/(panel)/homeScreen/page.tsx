import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  ScrollView, 
  FlatList 
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter, Link } from 'expo-router';
import COLORS from '@/constants/colors';
import FONTS from '@/constants/fonts';

// Tipagem para os dados de produto
interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

// Dados de exemplo
const recommendedProducts: Product[] = [
  { id: '1', name: 'Cerveja Lata Skol', price: '3,09', image: 'https://via.placeholder.com/100?text=Cerveja1' },
  { id: '2', name: 'Cerveja Lata Heineken', price: '3,09', image: 'https://via.placeholder.com/100?text=Cerveja2' },
  { id: '3', name: 'Cerveja Lata Brahma', price: '3,09', image: 'https://via.placeholder.com/100?text=Cerveja3' },
];

const basicBasketProducts: Product[] = [
  { id: '4', name: 'Arroz Tipo 1 5kg', price: '25,99', image: 'https://via.placeholder.com/100?text=Arroz' },
  { id: '5', name: 'Feijão Carioca 1kg', price: '8,49', image: 'https://via.placeholder.com/100?text=Feijao' },
  { id: '6', name: 'Óleo de Soja 900ml', price: '7,99', image: 'https://via.placeholder.com/100?text=Oleo' },
];

// Renomeie este componente para 'Page' ou use como default export em '(panel)/homeScreen/page.tsx'
const HomeScreen: React.FC = () => {
  const router = useRouter(); // Use expo-router hook

  const renderProductCard = ({ item }: { item: Product }) => (
    // Use Link for navigation to product details
    <Link href={{ pathname: '/(panel)/ProductDetail/page', params: { productId: item.id } }} asChild>
      <TouchableOpacity style={styles.productCard}>
        <Image source={{ uri: item.image }} style={styles.productImage} resizeMode="contain" />
        <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
        <Text style={FONTS.price}>R$ {item.price}</Text>
        {/* O botão de comparar agora está dentro do Link */}
        <View style={styles.compareButton}>
          <Text style={FONTS.buttonSecondary}>Compare já</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header - Adapte conforme sua necessidade de layout (ex: _layout.tsx) */}
      <View style={styles.header}>
        {/* Exemplo: Botão para abrir um drawer (se aplicável no seu layout) */}
        {/* <TouchableOpacity onPress={() => router.push('/drawer-menu')}> */}
        {/*   <Ionicons name="menu" size={30} color={COLORS.secondary} /> */}
        {/* </TouchableOpacity> */}
        <View style={{width: 30}} />{/* Placeholder for alignment */}
        {/* Exemplo: Botão para perfil */}
        <Link href="/(panel)/profile/page" asChild> 
          <TouchableOpacity>
            <Ionicons name="person-circle-outline" size={30} color={COLORS.secondary} />
          </TouchableOpacity>
        </Link>
      </View>

      {/* Saudação */}
      <Text style={[FONTS.h1Dark, styles.greeting]}>Olá Antonio, Boa Noite!</Text>

      {/* Barra de Pesquisa */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={COLORS.darkGray} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Procurar Produtos"
          placeholderTextColor={COLORS.darkGray}
          // Add search logic if needed
        />
      </View>

      {/* Ícones de Ação */}
      <View style={styles.actionIconsContainer}>
        <Link href="/(panel)/ShoppingList/page" asChild>
          <TouchableOpacity style={styles.actionIconBox}>
            <MaterialCommunityIcons name="format-list-checks" size={35} color={COLORS.primary} />
            <Text style={styles.actionIconText}>Lista de Compras</Text>
          </TouchableOpacity>
        </Link>
        {/* Adapte este link se tiver uma tela específica de comparação */}
        <Link href="/(panel)/compare" asChild>
          <TouchableOpacity style={styles.actionIconBox}>
            <MaterialCommunityIcons name="compare" size={35} color={COLORS.primary} />
            <Text style={styles.actionIconText}>Comparar Produtos</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Seção Recomendados */}
      <View style={styles.sectionHeader}>
        <Text style={FONTS.h3}>Recomendados</Text>
        {/* Adapte o link para a tela de todos os recomendados */}
        <Link href="/(panel)/ProductDetail/page" asChild>
          <TouchableOpacity>
            <Text style={FONTS.buttonSecondary}>Ver todos</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <FlatList<Product>
        data={recommendedProducts}
        renderItem={renderProductCard}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />

      {/* Seção Cesta Básica */}
      <View style={styles.sectionHeader}>
        <Text style={FONTS.h3}>Cesta Básica</Text>
         {/* Adapte o link para a tela de cesta básica */}
        <Link href="/(panel)/ProductDetail/page" asChild>
          <TouchableOpacity>
            <Text style={FONTS.buttonSecondary}>Ver todos</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <FlatList<Product>
        data={basicBasketProducts}
        renderItem={renderProductCard}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 50, // Ajuste conforme seu layout global
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
    // Altura pode ser definida no layout global
  },
  greeting: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    height: 50,
    marginBottom: 25,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.secondary,
  },
  actionIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  actionIconBox: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 15,
    width: '45%',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  actionIconText: {
    marginTop: 8,
    fontSize: 14,
    color: COLORS.secondary,
    fontWeight: '500',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  productList: {
    paddingLeft: 20,
    paddingRight: 10,
    marginBottom: 20,
  },
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

export default HomeScreen;
