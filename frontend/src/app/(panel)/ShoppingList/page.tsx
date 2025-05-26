import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  ScrollView, 
  FlatList, 
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, Stack, Link } from 'expo-router';
import COLORS from '@/constants/colors';
import FONTS from '@/constants/fonts';

// Tipagem para os dados
interface ShoppingListItem {
  id: string;
  name: string;
  price: string;
  distancePrice: string; // Ou outro nome apropriado
  image: string;
}

interface ShoppingListData {
  [category: string]: ShoppingListItem[];
}

interface BestOption {
  storeLogo: string;
  promoItemsCount: number;
  total: string;
}

// Dados de exemplo
const shoppingListData: ShoppingListData = {
  'Produtos limpeza': [
    { id: 'p1', name: 'DETERGENTE TÊ', price: '1,49', distancePrice: '4,58', image: 'https://via.placeholder.com/50?text=Det' },
    { id: 'p2', name: 'DESINFETANTE UAU', price: '8,79', distancePrice: '15,99', image: 'https://via.placeholder.com/50?text=Desinf' },
    { id: 'p3', name: 'SABÃO EM PÓ OMO', price: '3,60', distancePrice: '5,47', image: 'https://via.placeholder.com/50?text=Omo' },
  ],
  'Cervejas': [
    { id: 'p4', name: 'HEINEKEN 350ML', price: '7,99', distancePrice: '10,48', image: 'https://via.placeholder.com/50?text=Hein' },
    { id: 'p5', name: 'AMSTEL 600ML', price: '7,49', distancePrice: '10,43', image: 'https://via.placeholder.com/50?text=Amst' },
  ],
  'Carnes': [
    { id: 'p6', name: 'ALCATRA', price: '25,99', distancePrice: '28,49', image: 'https://via.placeholder.com/50?text=Alca' },
  ],
};

const bestOption: BestOption = {
  storeLogo: 'https://via.placeholder.com/80x30?text=Assai',
  promoItemsCount: 5,
  total: '55,35',
};

// Renomeie este componente para 'Page' ou use como default export em '(panel)/ShoppingList/page.tsx'
const ShoppingListScreen: React.FC = () => {
  const router = useRouter(); // Use expo-router hook

  // Estado temporário para simular a lista (se precisar limpar)
  const [currentList, setCurrentList] = React.useState(shoppingListData);

  const handleClearList = () => {
    // Lógica temporária sem backend
    Alert.alert(
      'Limpar Lista',
      'Tem certeza que deseja limpar todos os itens da lista?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Limpar',
          onPress: () => {
            console.log('Limpando a lista...');
            setCurrentList({}); // Limpa o estado temporário
            Alert.alert('Lista Limpa!', 'Sua lista de compras foi esvaziada.');
          },
          style: 'destructive',
        },
      ]
    );
  };

  const renderListItem = ({ item }: { item: ShoppingListItem }) => (
    <View style={styles.listItemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} resizeMode="contain" />
      <View style={styles.itemInfo}>
        <Text style={FONTS.body} numberOfLines={1}>{item.name}</Text>
      </View>
      <View style={styles.itemPrices}>
        <View style={styles.priceColumn}>
          <Text style={styles.priceLabel}>MENOR VALOR</Text>
          <Text style={FONTS.priceSmall}>R$ {item.price}</Text>
        </View>
        <View style={styles.priceColumn}>
          <Text style={styles.priceLabel}>MENOR DISTÂNCIA</Text>
          <Text style={FONTS.priceSmall}>R$ {item.distancePrice}</Text>
        </View>
      </View>
      {/* Adicione botão de remover se necessário */}
      {/* <TouchableOpacity style={styles.removeButton}>
        <Ionicons name="trash-outline" size={20} color={COLORS.primary} />
      </TouchableOpacity> */}
    </View>
  );

  const renderListSection = (category: string) => (
    <View key={category} style={styles.categorySection}>
      <Text style={FONTS.sectionTitle}>{category}</Text>
      <FlatList<ShoppingListItem>
        data={currentList[category]} // Usa o estado atual
        renderItem={renderListItem}
        keyExtractor={item => item.id}
        scrollEnabled={false} // Desabilita scroll da FlatList interna
      />
    </View>
  );

  // Verifica se a lista está vazia
  const isListEmpty = Object.keys(currentList).length === 0;

  return (
    <View style={styles.container}>
      {/* Configuração do Header específico para esta tela usando Stack.Screen */}
      <Stack.Screen 
        options={{
          headerShown: true,
          headerTitle: 'Lista de Compras',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color={COLORS.secondary} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            // Placeholder para manter o título centralizado
            <View style={{ width: 34 }} /> 
          ),
          headerStyle: { backgroundColor: COLORS.white }, // Fundo branco para o header
          headerShadowVisible: true, // Adiciona sombra/borda
          headerTintColor: COLORS.secondary, // Cor do título
        }}
      />

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {isListEmpty ? (
          <View style={styles.emptyListContainer}>
            <Ionicons name="cart-outline" size={80} color={COLORS.darkGray} />
            <Text style={styles.emptyListText}>Sua lista de compras está vazia.</Text>
            <Link href="/(panel)/homeScreen/page" asChild>
                <TouchableOpacity style={styles.browseButton}>
                    <Text style={styles.browseButtonText}>Começar a comprar</Text>
                </TouchableOpacity>
            </Link>
          </View>
        ) : (
          Object.keys(currentList).map(category => renderListSection(category))
        )}
      </ScrollView>

      {/* Footer - Só mostra se a lista não estiver vazia */}
      {!isListEmpty && (
        <View style={styles.footer}>
          <View style={styles.bestOptionContainer}>
            <Text style={FONTS.bestOptionText}>R$ MELHOR OPÇÃO R$</Text>
            <View style={styles.bestOptionDetails}>
              <Image source={{ uri: bestOption.storeLogo }} style={styles.storeLogo} resizeMode="contain" />
              <View style={styles.bestOptionInfo}>
                <Text style={styles.promoText}>QTD ITENS PROMOÇÃO: {bestOption.promoItemsCount}</Text>
                <Text style={FONTS.totalPrice}>TOTAL: {bestOption.total}</Text>
              </View>
            </View>
          </View>

          <View style={styles.footerButtons}>
            {/* Adiciona ação temporária ao botão */}
            <TouchableOpacity style={styles.clearButton} onPress={handleClearList}>
              <Ionicons name="trash-outline" size={20} color={COLORS.primary} />
              <Text style={styles.clearButtonText}>LIMPAR LISTA</Text>
            </TouchableOpacity>
            {/* Use Link para navegar para a home */}
            <Link href="/(panel)/homeScreen/page" asChild>
              <TouchableOpacity style={styles.homeButton}>
                <Ionicons name="home-outline" size={24} color={COLORS.white} />
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    // paddingTop removido, o header do Stack cuida disso
  },
  backButton: {
    marginLeft: 15, // Ajuste para posicionamento
    padding: 5,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  categorySection: {
    marginBottom: 20,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  itemImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  itemInfo: {
    flex: 1,
    marginRight: 10,
  },
  itemPrices: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceColumn: {
    alignItems: 'flex-end',
    marginLeft: 15,
  },
  priceLabel: {
    fontSize: 10,
    color: COLORS.darkGray,
    marginBottom: 2,
  },
  removeButton: {
      marginLeft: 10,
      padding: 5,
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100, // Ajuste conforme necessário
    paddingHorizontal: 40,
  },
  emptyListText: {
    fontSize: 18,
    color: COLORS.darkGray,
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 30,
  },
  browseButton: {
      backgroundColor: COLORS.primary,
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 25,
  },
  browseButtonText: {
      color: COLORS.white,
      fontSize: 16,
      fontWeight: 'bold',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: COLORS.accent,
    backgroundColor: COLORS.white,
    paddingBottom: 20, // Espaço seguro na parte inferior
  },
  bestOptionContainer: {
    backgroundColor: COLORS.bestOptionBackground,
    padding: 15,
    alignItems: 'center',
  },
  bestOptionDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  storeLogo: {
    width: 80,
    height: 30,
    marginRight: 15,
  },
  bestOptionInfo: {
    alignItems: 'flex-start',
  },
  promoText: {
    fontSize: 12,
    color: COLORS.secondary,
    marginBottom: 3,
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  clearButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 25,
  },
  clearButtonText: {
    color: COLORS.primary,
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 14,
  },
  homeButton: {
    backgroundColor: COLORS.primary,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
});

export default ShoppingListScreen;
