import React, { useState } from 'react';
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
import { Ionicons } from '@expo/vector-icons';
import { useRouter, Stack } from 'expo-router';
import COLORS from '@/constants/colors';
import FONTS from '@/constants/fonts';

// Tipagem para os dados de categoria
interface Categoria {
  id: string;
  nome: string;
  imagem: string;
}

const CategoriesScreen : React.FC = () => {
  const router = useRouter();
  const [textoBusca, setTextoBusca] = useState('');
  
  // ==================== INÍCIO: DADOS MOCKADOS (TEMPORÁRIO) ====================
  // NOTA: Esta seção contém dados mockados que devem ser substituídos pela integração com o backend
  
  const categorias: Categoria[] = [
    { id: '1', nome: 'Hortifrúti', imagem: 'https://via.placeholder.com/100?text=Hortifruti' },
    { id: '2', nome: 'Carnes', imagem: 'https://via.placeholder.com/100?text=Carnes' },
    { id: '3', nome: 'Peixes e Frutos do Mar', imagem: 'https://via.placeholder.com/100?text=Peixes' },
    { id: '4', nome: 'Aves', imagem: 'https://via.placeholder.com/100?text=Aves' },
    { id: '5', nome: 'Padaria e Confeitaria', imagem: 'https://via.placeholder.com/100?text=Padaria' },
    { id: '6', nome: 'Laticínios', imagem: 'https://via.placeholder.com/100?text=Laticinios' },
    { id: '7', nome: 'Frios e Embutidos', imagem: 'https://via.placeholder.com/100?text=Frios' },
    { id: '8', nome: 'Bebidas', imagem: 'https://via.placeholder.com/100?text=Bebidas' },
    { id: '9', nome: 'Bebidas Alcoólicas', imagem: 'https://via.placeholder.com/100?text=Alcoolicas' },
    { id: '10', nome: 'Grãos e Cereais', imagem: 'https://via.placeholder.com/100?text=Graos' },
    { id: '11', nome: 'Massas', imagem: 'https://via.placeholder.com/100?text=Massas' },
    { id: '12', nome: 'Biscoitos e Snacks', imagem: 'https://via.placeholder.com/100?text=Biscoitos' },
    { id: '13', nome: 'Café, Chá e Achocolatados', imagem: 'https://via.placeholder.com/100?text=Cafe' },
    { id: '14', nome: 'Açúcar e Doces', imagem: 'https://via.placeholder.com/100?text=Doces' },
    { id: '15', nome: 'Farinha e Fermento', imagem: 'https://via.placeholder.com/100?text=Farinha' },
    { id: '16', nome: 'Óleos e Azeites', imagem: 'https://via.placeholder.com/100?text=Oleos' },
    { id: '17', nome: 'Molhos, Temperos e Condimentos', imagem: 'https://via.placeholder.com/100?text=Temperos' },
    { id: '18', nome: 'Produtos de Limpeza', imagem: 'https://via.placeholder.com/100?text=Limpeza' },
    { id: '19', nome: 'Higiene Pessoal', imagem: 'https://via.placeholder.com/100?text=Higiene' },
    { id: '20', nome: 'Alimentos Congelados', imagem: 'https://via.placeholder.com/100?text=Congelados' },
  ];
  
  // ==================== FIM: DADOS MOCKADOS (TEMPORÁRIO) ====================
  
  // Filtrar categorias com base no texto de busca
  const categoriasFiltradas = textoBusca.length > 0
    ? categorias.filter(categoria => 
        categoria.nome.toLowerCase().includes(textoBusca.toLowerCase())
      )
    : categorias;
  
  // Calcular número de colunas com base na largura da tela
  const numeroColunas = 2;
  
  // Função para renderizar cada categoria
  const renderizarItemCategoria = ({ item }: { item: Categoria }) => (
    <TouchableOpacity 
      style={estilos.itemCategoria}
      onPress={() => router.push({ 
        pathname: '/(panel)/productList/page', 
        params: { listType: item.id, categoryName: item.nome } 
      })}
    >
      <View style={estilos.conteudoCategoria}>
        <Text style={estilos.nomeCategoria}>{item.nome}</Text>
        <Image source={{ uri: item.imagem }} style={estilos.imagemCategoria} resizeMode="contain" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={estilos.container}>
      {/* Configuração do Header */}
      <Stack.Screen 
        options={{
          headerShown: true,
          headerTitle: 'Categorias',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} style={estilos.botaoVoltar}>
              <Ionicons name="arrow-back" size={24} color={COLORS.secondary} />
            </TouchableOpacity>
          ),
          headerStyle: { backgroundColor: COLORS.background },
          headerShadowVisible: false,
        }}
      />
      
      {/* Barra de Pesquisa */}
      <View style={estilos.containerBusca}>
        <Ionicons name="search" size={20} color={COLORS.darkGray} style={estilos.iconeBusca} />
        <TextInput
          style={estilos.inputBusca}
          placeholder="Pesquisar Categorias"
          placeholderTextColor={COLORS.darkGray}
          value={textoBusca}
          onChangeText={setTextoBusca}
        />
        {textoBusca.length > 0 && (
          <TouchableOpacity onPress={() => setTextoBusca('')}>
            <Ionicons name="close-circle" size={20} color={COLORS.darkGray} />
          </TouchableOpacity>
        )}
      </View>
      
      {/* Lista de Categorias */}
      {categoriasFiltradas.length > 0 ? (
        <FlatList
          data={categoriasFiltradas}
          renderItem={renderizarItemCategoria}
          keyExtractor={item => item.id}
          numColumns={numeroColunas}
          contentContainerStyle={estilos.listaCategorias}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={estilos.containerVazio}>
          <Ionicons name="search-outline" size={60} color={COLORS.darkGray} />
          <Text style={estilos.textoVazio}>Nenhuma categoria encontrada</Text>
          <Text style={estilos.subtextoVazio}>Tente outro termo de busca</Text>
        </View>
      )}
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  botaoVoltar: {
    marginLeft: 15,
    padding: 5,
  },
  containerBusca: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    marginVertical: 15,
    height: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  iconeBusca: {
    marginRight: 10,
  },
  inputBusca: {
    flex: 1,
    fontSize: 16,
    color: COLORS.secondary,
  },
  listaCategorias: {
    padding: 10,
  },
  itemCategoria: {
    flex: 1,
    margin: 5,
    height: 120,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    overflow: 'hidden',
  },
  conteudoCategoria: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  nomeCategoria: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.secondary,
  },
  imagemCategoria: {
    width: 50,
    height: 50,
  },
  containerVazio: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textoVazio: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: COLORS.secondary,
  },
  subtextoVazio: {
    fontSize: 14,
    color: COLORS.darkGray,
    marginTop: 10,
  },
});

export default CategoriesScreen ;
