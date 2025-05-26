import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  ScrollView, 
  FlatList, 
  TextInput, 
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams, Stack } from 'expo-router';
import COLORS from '@/constants/colors';
import FONTS from '@/constants/fonts';

// Tipagem para os dados
interface ProductDetails {
  id: string;
  name: string;
  code: string;
  quantity: string;
  type: string;
  image: string;
}

interface MarketPrice {
  id: string;
  name: string;
  price: string;
  logo: string;
}

// Dados de exemplo (Idealmente, buscaria isso com base no productId)
const product: ProductDetails = {
  id: 'prod1',
  name: 'Feijão Kicaldo 1kg',
  code: 'ki-2523',
  quantity: '1k',
  type: 'Feijão Comum',
  image: 'https://via.placeholder.com/150?text=Feijao',
};

const nearbyMarkets: MarketPrice[] = [
  { id: 'm1', name: 'Assaí', price: '3,09', logo: 'https://via.placeholder.com/100x40?text=Assai' },
  { id: 'm2', name: 'Atakarejo', price: '3,89', logo: 'https://via.placeholder.com/100x40?text=Atakarejo' },
  { id: 'm3', name: 'GBarbosa', price: '5,09', logo: 'https://via.placeholder.com/100x40?text=GBarbosa' },
  { id: 'm4', name: 'Extra', price: '5,09', logo: 'https://via.placeholder.com/100x40?text=Extra' },
  { id: 'm5', name: 'Total Atacado', price: '7,09', logo: 'https://via.placeholder.com/100x40?text=Total' },
];

// Renomeie este componente para 'Page' ou use como default export em '(panel)/ProductDetail/page.tsx'
const ProductDetailScreen: React.FC = () => {
  const router = useRouter(); // Use expo-router hook
  const { productId } = useLocalSearchParams<{ productId: string }>(); // Get productId from route params

  // Aqui você usaria o productId para buscar os dados reais do produto
  console.log('Product ID:', productId);

  const handleAddItemToList = (marketItem: MarketPrice) => {
    // Lógica temporária sem backend
    console.log(`Adicionando ${product.name} do ${marketItem.name} à lista.`);
    Alert.alert('Item Adicionado', `${product.name} (R$ ${marketItem.price}) foi adicionado à sua lista.`);
    // Poderia navegar para a lista após adicionar:
    // router.push('/(panel)/ShoppingList');
  };

  const renderMarketItem = ({ item }: { item: MarketPrice }) => (
    <View style={styles.marketCard}>
      <Image source={{ uri: item.logo }} style={styles.marketLogo} resizeMode="contain" />
      <View style={styles.marketInfo}>
        <Text style={FONTS.price}>R$ {item.price}</Text>
      </View>
      {/* Adiciona ação temporária ao botão */}
      <TouchableOpacity style={styles.addButton} onPress={() => handleAddItemToList(item)}>
        <Text style={FONTS.button}>Adicionar à Lista</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
       {/* Configuração do Header específico para esta tela usando Stack.Screen */}
      <Stack.Screen 
        options={{
          headerShown: true,
          headerTitle: '', // Pode ser vazio ou o nome do produto
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color={COLORS.secondary} />
            </TouchableOpacity>
          ),
          headerRight: () => (
             <View style={styles.searchContainerHeaderRight}>
                <Ionicons name="search" size={20} color={COLORS.darkGray} style={styles.searchIcon} />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Pesquisar Produtos"
                  placeholderTextColor={COLORS.darkGray}
                  defaultValue={product.name} // Ou deixe vazio para nova pesquisa
                />
             </View>
          ),
          headerStyle: { backgroundColor: COLORS.background },
          headerShadowVisible: false, // Remove a sombra do header
        }}
      />

      {/* Detalhes do Produto */}
      <View style={styles.productDetailContainer}>
        <Image source={{ uri: product.image }} style={styles.productImage} resizeMode="contain" />
        <View style={styles.productInfo}>
          <Text style={FONTS.h1Dark}>{product.name}</Text>
          <Text style={FONTS.caption}>Código: {product.code}</Text>
          <Text style={FONTS.caption}>Quantidade: {product.quantity}</Text>
          <Text style={FONTS.caption}>Tipo: {product.type}</Text>
        </View>
        <TouchableOpacity style={styles.detailsArrow}>
            <Ionicons name="chevron-forward" size={24} color={COLORS.darkGray} />
        </TouchableOpacity>
      </View>

      {/* Lista de Mercados Próximos */}
      <Text style={[FONTS.h3, styles.sectionTitle]}>Mercados Próximos</Text>
      <FlatList<MarketPrice>
        data={nearbyMarkets}
        renderItem={renderMarketItem}
        keyExtractor={item => item.id}
        scrollEnabled={false} // Desabilita scroll da FlatList interna
        contentContainerStyle={styles.marketList}
      />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    // paddingTop removido, o header do Stack cuida disso
  },
  // Estilos do header agora são controlados pelo Stack.Screen
  backButton: {
    marginLeft: 15, // Ajuste para posicionamento
    padding: 5,
  },
  searchContainerHeaderRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginRight: 15, // Espaçamento à direita
    height: 40, // Altura ajustada para o header
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14, // Fonte menor para o header
    color: COLORS.secondary,
  },
  productDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 15,
    marginTop: 15, // Espaço após o header
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  productImage: {
    width: 70,
    height: 70,
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
  },
  detailsArrow: {
      paddingLeft: 10,
  },
  sectionTitle: {
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  marketList: {
    paddingHorizontal: 15,
    paddingBottom: 20, // Espaço no final da lista
  },
  marketCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  marketLogo: {
    width: 80,
    height: 35,
    marginRight: 15,
  },
  marketInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  addButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
});

export default ProductDetailScreen;
