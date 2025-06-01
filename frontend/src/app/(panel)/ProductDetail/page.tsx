import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  ScrollView, 
  FlatList,
  Dimensions
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter, Stack, useLocalSearchParams } from 'expo-router';
import COLORS from '@/constants/colors';
import FONTS from '@/constants/fonts';

// Tipagem para os dados de produto
interface Product {
  id: string;
  name: string;
  price: string;
  priceValue: number; // Valor numérico para ordenação
  distance: number; // Distância em km para ordenação
  image: string;
}

// Tipos de ordenação
type SortType = 'price-asc' | 'price-desc' | 'distance-asc' | null;

const ProductDetail: React.FC = () => {
  const router = useRouter();
  const { listType } = useLocalSearchParams<{ listType: string }>();
  
  // Estado para o tipo de ordenação
  const [sortType, setSortType] = useState<SortType>(null);
  const [products, setProducts] = useState<Product[]>([]);
  
  // Título da página baseado no tipo de lista
  const getPageTitle = () => {
    switch(listType) {
      case 'recommended':
        return 'Recomendados';
      case 'basic-basket':
        return 'Cesta Básica';
      default:
        return 'Produtos';
    }
  };

  // ==================== INÍCIO: DADOS MOCKADOS (TEMPORÁRIO) ====================
  // NOTA: Esta seção contém dados mockados que devem ser substituídos pela integração com o backend
  
  // Dados de exemplo para produtos recomendados
  const recommendedProducts: Product[] = [
    { id: '1', name: 'Cerveja Lata Skol', price: 'R$ 3,09', priceValue: 3.09, distance: 1.2, image: 'https://via.placeholder.com/100?text=Cerveja1' },
    { id: '2', name: 'Cerveja Lata Heineken', price: 'R$ 5,49', priceValue: 5.49, distance: 0.8, image: 'https://via.placeholder.com/100?text=Cerveja2' },
    { id: '3', name: 'Cerveja Lata Brahma', price: 'R$ 3,29', priceValue: 3.29, distance: 2.5, image: 'https://via.placeholder.com/100?text=Cerveja3' },
    { id: '4', name: 'Cerveja Lata Antarctica', price: 'R$ 2,99', priceValue: 2.99, distance: 3.1, image: 'https://via.placeholder.com/100?text=Cerveja4' },
    { id: '5', name: 'Cerveja Lata Bohemia', price: 'R$ 3,79', priceValue: 3.79, distance: 1.5, image: 'https://via.placeholder.com/100?text=Cerveja5' },
    { id: '6', name: 'Cerveja Lata Itaipava', price: 'R$ 2,49', priceValue: 2.49, distance: 4.2, image: 'https://via.placeholder.com/100?text=Cerveja6' },
    { id: '7', name: 'Cerveja Lata Amstel', price: 'R$ 4,19', priceValue: 4.19, distance: 0.5, image: 'https://via.placeholder.com/100?text=Cerveja7' },
    { id: '8', name: 'Cerveja Lata Budweiser', price: 'R$ 4,99', priceValue: 4.99, distance: 1.9, image: 'https://via.placeholder.com/100?text=Cerveja8' },
    { id: '9', name: 'Cerveja Lata Stella Artois', price: 'R$ 5,99', priceValue: 5.99, distance: 2.7, image: 'https://via.placeholder.com/100?text=Cerveja9' },
    { id: '10', name: 'Cerveja Lata Corona', price: 'R$ 6,49', priceValue: 6.49, distance: 3.8, image: 'https://via.placeholder.com/100?text=Cerveja10' },
  ];

  // Dados de exemplo para produtos da cesta básica
  const basicBasketProducts: Product[] = [
    { id: '11', name: 'Arroz Tipo 1 5kg', price: 'R$ 25,99', priceValue: 25.99, distance: 1.2, image: 'https://via.placeholder.com/100?text=Arroz' },
    { id: '12', name: 'Feijão Carioca 1kg', price: 'R$ 8,49', priceValue: 8.49, distance: 0.8, image: 'https://via.placeholder.com/100?text=Feijao' },
    { id: '13', name: 'Óleo de Soja 900ml', price: 'R$ 7,99', priceValue: 7.99, distance: 2.5, image: 'https://via.placeholder.com/100?text=Oleo' },
    { id: '14', name: 'Açúcar Refinado 1kg', price: 'R$ 4,29', priceValue: 4.29, distance: 3.1, image: 'https://via.placeholder.com/100?text=Acucar' },
    { id: '15', name: 'Café Torrado 500g', price: 'R$ 15,99', priceValue: 15.99, distance: 1.5, image: 'https://via.placeholder.com/100?text=Cafe' },
    { id: '16', name: 'Sal Refinado 1kg', price: 'R$ 2,99', priceValue: 2.99, distance: 4.2, image: 'https://via.placeholder.com/100?text=Sal' },
    { id: '17', name: 'Farinha de Trigo 1kg', price: 'R$ 5,49', priceValue: 5.49, distance: 0.5, image: 'https://via.placeholder.com/100?text=Farinha' },
    { id: '18', name: 'Macarrão Espaguete 500g', price: 'R$ 3,99', priceValue: 3.99, distance: 1.9, image: 'https://via.placeholder.com/100?text=Macarrao' },
    { id: '19', name: 'Leite Integral 1L', price: 'R$ 4,79', priceValue: 4.79, distance: 2.7, image: 'https://via.placeholder.com/100?text=Leite' },
    { id: '20', name: 'Ovos Brancos (dúzia)', price: 'R$ 9,99', priceValue: 9.99, distance: 3.8, image: 'https://via.placeholder.com/100?text=Ovos' },
  ];
  
  // Função para selecionar os produtos com base no tipo de lista
  const getProductsByType = () => {
    // NOTA: Esta lógica seria substituída por uma chamada à API quando o backend estiver pronto
    switch(listType) {
      case 'recommended':
        return recommendedProducts;
      case 'basic-basket':
        return basicBasketProducts;
      default:
        return [...recommendedProducts, ...basicBasketProducts];
    }
  };
  
  // ==================== FIM: DADOS MOCKADOS (TEMPORÁRIO) ====================

  // Efeito para ordenar produtos quando o tipo de ordenação mudar
  useEffect(() => {
    let productList = getProductsByType();
    
    // NOTA: Esta lógica de ordenação seria implementada no backend em produção
    if (sortType) {
      const sortedProducts = [...productList];
      
      switch(sortType) {
        case 'price-asc':
          sortedProducts.sort((a, b) => a.priceValue - b.priceValue);
          break;
        case 'price-desc':
          sortedProducts.sort((a, b) => b.priceValue - a.priceValue);
          break;
        case 'distance-asc':
          sortedProducts.sort((a, b) => a.distance - b.distance);
          break;
      }
      
      setProducts(sortedProducts);
    } else {
      setProducts(productList);
    }
  }, [listType, sortType]);

  // Função para renderizar cada produto
  const renderProductCard = ({ item }: { item: Product }) => (
    <TouchableOpacity 
      style={styles.productCard}
      onPress={() => router.push({ pathname: '/(panel)/ProductDetail/page', params: { productId: item.id } })}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} resizeMode="contain" />
      <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
      <Text style={FONTS.price}>{item.price}</Text>
      <Text style={styles.distanceText}>{item.distance} km</Text>
      <View style={styles.compareButton}>
        <Text style={FONTS.buttonSecondary}>Compare já</Text>
      </View>
    </TouchableOpacity>
  );

  // Calcular número de colunas com base na largura da tela
  const numColumns = Math.floor(Dimensions.get('window').width / 180);

  return (
    <View style={styles.container}>
      {/* Configuração do Header */}
      <Stack.Screen 
        options={{
          headerShown: true,
          headerTitle: getPageTitle(),
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color={COLORS.secondary} />
            </TouchableOpacity>
          ),
          headerStyle: { backgroundColor: COLORS.background },
          headerShadowVisible: false,
        }}
      />
      
      {/* Ordenadores */}
      <View style={styles.sortContainer}>
        <Text style={[FONTS.sectionTitle]}>Ordenar por:</Text>
        
        <View style={styles.sortButtonsContainer}>
          <TouchableOpacity 
            style={[
              styles.sortButton, 
              sortType === 'price-desc' && styles.sortButtonActive
            ]}
            onPress={() => setSortType('price-desc')}
          >
            <Text 
              style={[
                styles.sortButtonText, 
                sortType === 'price-desc' && styles.sortButtonTextActive
              ]}
            >
              Maior Preço
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[
              styles.sortButton, 
              sortType === 'price-asc' && styles.sortButtonActive
            ]}
            onPress={() => setSortType('price-asc')}
          >
            <Text 
              style={[
                styles.sortButtonText, 
                sortType === 'price-asc' && styles.sortButtonTextActive
              ]}
            >
              Menor Preço
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[
              styles.sortButton, 
              sortType === 'distance-asc' && styles.sortButtonActive
            ]}
            onPress={() => setSortType('distance-asc')}
          >
            <Text 
              style={[
                styles.sortButtonText, 
                sortType === 'distance-asc' && styles.sortButtonTextActive
              ]}
            >
              Menor Distância
            </Text>
          </TouchableOpacity>
          
          {sortType && (
            <TouchableOpacity 
              style={styles.clearButton}
              onPress={() => setSortType(null)}
            >
              <Text style={styles.clearButtonText}>Limpar</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      
      {/* Lista de Produtos */}
      {products.length > 0 ? (
        <FlatList
          data={products}
          renderItem={renderProductCard}
          keyExtractor={item => item.id}
          numColumns={numColumns}
          contentContainerStyle={styles.productList}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <MaterialIcons name="search-off" size={60} color={COLORS.darkGray} />
          <Text style={styles.emptyText}>Nenhum produto encontrado</Text>
          <Text style={styles.emptySubtext}>Tente outra ordenação</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  backButton: {
    marginLeft: 15,
    padding: 5,
  },
  sortContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 15,
    margin: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  sortButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    gap: 10,
  },
  sortButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.mediumGray,
    backgroundColor: COLORS.white,
  },
  sortButtonActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  sortButtonText: {
    fontSize: 14,
    color: COLORS.secondary,
  },
  sortButtonTextActive: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  clearButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.mediumGray,
    backgroundColor: COLORS.lightGray,
  },
  clearButtonText: {
    fontSize: 14,
    color: COLORS.secondary,
  },
  productList: {
    padding: 10,
  },
  productCard: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 15,
    margin: 5,
    flex: 1,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    maxWidth: Dimensions.get('window').width / 2 - 20,
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
  distanceText: {
    fontSize: 12,
    color: COLORS.darkGray,
    marginTop: 5,
  },
  compareButton: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: COLORS.secondary,
  },
  emptySubtext: {
    fontSize: 14,
    color: COLORS.darkGray,
    marginTop: 10,
  },
});

export default ProductDetail;
