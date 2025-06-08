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
interface ItemListaCompras {
  id: string;
  nome: string;
  preco: string;
  precoDistancia: string;
  imagem: string;
}

interface DadosListaCompras {
  [categoria: string]: ItemListaCompras[];
}

interface MelhorOpcao {
  logoLoja: string;
  quantidadeItensPromocao: number;
  total: string;
}

// Dados de exemplo
const dadosListaCompras: DadosListaCompras = {
  'Produtos limpeza': [
    { id: 'p1', nome: 'DETERGENTE TÊ', preco: '1,49', precoDistancia: '4,58', imagem: 'https://via.placeholder.com/50?text=Det' },
    { id: 'p2', nome: 'DESINFETANTE UAU', preco: '8,79', precoDistancia: '15,99', imagem: 'https://via.placeholder.com/50?text=Desinf' },
    { id: 'p3', nome: 'SABÃO EM PÓ OMO', preco: '3,60', precoDistancia: '5,47', imagem: 'https://via.placeholder.com/50?text=Omo' },
  ],
  'Cervejas': [
    { id: 'p4', nome: 'HEINEKEN 350ML', preco: '7,99', precoDistancia: '10,48', imagem: 'https://via.placeholder.com/50?text=Hein' },
    { id: 'p5', nome: 'AMSTEL 600ML', preco: '7,49', precoDistancia: '10,43', imagem: 'https://via.placeholder.com/50?text=Amst' },
  ],
  'Carnes': [
    { id: 'p6', nome: 'ALCATRA', preco: '25,99', precoDistancia: '28,49', imagem: 'https://via.placeholder.com/50?text=Alca' },
  ],
};

const melhorOpcao: MelhorOpcao = {
  logoLoja: 'https://via.placeholder.com/80x30?text=Assai',
  quantidadeItensPromocao: 5,
  total: '55,35',
};

const TelaListaCompras: React.FC = () => {
  const router = useRouter();

  // Estado temporário para simular a lista (se precisar limpar)
  const [listaAtual, setListaAtual] = React.useState(dadosListaCompras);

  const manipularLimpezaLista = () => {
    Alert.alert(
      'Limpar Lista',
      'Tem certeza que deseja limpar todos os itens da lista?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Limpar',
          onPress: () => {
            console.log('Limpando a lista...');
            setListaAtual({});
            Alert.alert('Lista Limpa!', 'Sua lista de compras foi esvaziada.');
          },
          style: 'destructive',
        },
      ]
    );
  };

  const navegarParaHome = () => {
    router.push('/(panel)/homeScreen/page');
  };

  const voltarTela = () => {
    // Se a lista estiver vazia, navega para home em vez de usar router.back()
    if (listaEstaVazia) {
      router.push('/(panel)/homeScreen/page');
    } else {
      router.back();
    }
  };

  const renderizarItemLista = ({ item }: { item: ItemListaCompras }) => (
    <View style={estilos.containerItemLista}>
      <Image source={{ uri: item.imagem }} style={estilos.imagemItem} resizeMode="contain" />
      <View style={estilos.infoItem}>
        <Text style={FONTS.body} numberOfLines={1}>{item.nome}</Text>
      </View>
      <View style={estilos.precosItem}>
        <View style={estilos.colunaPreco}>
          <Text style={estilos.labelPreco}>MENOR VALOR</Text>
          <Text style={FONTS.priceSmall}>R$ {item.preco}</Text>
        </View>
        <View style={estilos.colunaPreco}>
          <Text style={estilos.labelPreco}>MENOR DISTÂNCIA</Text>
          <Text style={FONTS.priceSmall}>R$ {item.precoDistancia}</Text>
        </View>
      </View>
    </View>
  );

  const renderizarSecaoLista = (categoria: string) => (
    <View key={categoria} style={estilos.secaoCategoria}>
      <Text style={FONTS.sectionTitle}>{categoria}</Text>
      <FlatList<ItemListaCompras>
        data={listaAtual[categoria]}
        renderItem={renderizarItemLista}
        keyExtractor={item => item.id}
        scrollEnabled={false}
      />
    </View>
  );

  // Verifica se a lista está vazia
  const listaEstaVazia = Object.keys(listaAtual).length === 0;

  // Componente para a tela vazia
  const renderizarListaVazia = () => (
    <View style={estilos.containerListaVazia}>
      <Ionicons name="cart-outline" size={80} color={COLORS.darkGray} />
      <Text style={estilos.textoListaVazia}>Sua lista de compras está vazia.</Text>
      <TouchableOpacity style={estilos.botaoNavegar} onPress={navegarParaHome}>
        <Text style={estilos.textoBotaoNavegar}>Começar a comprar</Text>
      </TouchableOpacity>
    </View>
  );

  // Componente para a lista com itens
  const renderizarListaComItens = () => (
    <>
      {Object.keys(listaAtual).map(categoria => renderizarSecaoLista(categoria))}
    </>
  );

  return (
    <View style={estilos.container}>
      {/* Header */}
      <Stack.Screen 
        options={{
          headerShown: true,
          headerTitle: 'Lista de Compras',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={voltarTela} style={estilos.botaoVoltar}>
              <Ionicons name="arrow-back" size={24} color={COLORS.secondary} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ width: 34 }} /> 
          ),
          headerStyle: { backgroundColor: COLORS.white },
          headerShadowVisible: true,
          headerTintColor: COLORS.secondary,
        }}
      />

      {/* Conteúdo principal */}
      <View style={estilos.conteudoPrincipal}>
        <ScrollView style={estilos.containerScroll} showsVerticalScrollIndicator={false}>
          {listaEstaVazia ? renderizarListaVazia() : renderizarListaComItens()}
        </ScrollView>
      </View>

      {/* Rodapé fixo */}
      <View style={estilos.rodape}>
        {/* Seção melhor opção - só aparece quando há itens */}
        {!listaEstaVazia && (
          <View style={estilos.containerMelhorOpcao}>
            <Text style={FONTS.bestOptionText}>R$ MELHOR OPÇÃO R$</Text>
            <View style={estilos.detalhesMelhorOpcao}>
              <Image source={{ uri: melhorOpcao.logoLoja }} style={estilos.logoLoja} resizeMode="contain" />
              <View style={estilos.infoMelhorOpcao}>
                <Text style={estilos.textoPromocao}>QTD ITENS PROMOÇÃO: {melhorOpcao.quantidadeItensPromocao}</Text>
                <Text style={FONTS.totalPrice}>TOTAL: {melhorOpcao.total}</Text>
              </View>
            </View>
          </View>
        )}

        {/* Botões do rodapé */}
        <View style={estilos.containerBotoes}>
          {/* Botão limpar - só aparece quando há itens */}
          {!listaEstaVazia && (
            <TouchableOpacity style={estilos.botaoLimpar} onPress={manipularLimpezaLista}>
              <Ionicons name="trash-outline" size={20} color={COLORS.primary} />
              <Text style={estilos.textoBotaoLimpar}>LIMPAR LISTA</Text>
            </TouchableOpacity>
          )}
          
        </View>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  conteudoPrincipal: {
    flex: 1,
  },
  botaoVoltar: {
    marginLeft: 15,
    padding: 5,
  },
  containerScroll: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  secaoCategoria: {
    marginBottom: 20,
  },
  containerItemLista: {
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
  imagemItem: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  infoItem: {
    flex: 1,
    marginRight: 10,
  },
  precosItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colunaPreco: {
    alignItems: 'flex-end',
    marginLeft: 15,
  },
  labelPreco: {
    fontSize: 10,
    color: COLORS.darkGray,
    marginBottom: 2,
  },
  containerListaVazia: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  textoListaVazia: {
    fontSize: 18,
    color: COLORS.darkGray,
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 30,
  },
  botaoNavegar: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  textoBotaoNavegar: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  rodape: {
    borderTopWidth: 1,
    borderTopColor: COLORS.accent,
    backgroundColor: COLORS.white,
    paddingBottom: 20,
  },
  containerMelhorOpcao: {
    backgroundColor: COLORS.bestOptionBackground,
    padding: 15,
    alignItems: 'center',
  },
  detalhesMelhorOpcao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  logoLoja: {
    width: 80,
    height: 30,
    marginRight: 15,
  },
  infoMelhorOpcao: {
    alignItems: 'flex-start',
  },
  textoPromocao: {
    fontSize: 12,
    color: COLORS.secondary,
    marginBottom: 3,
  },
  containerBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 15,
    minHeight: 70,
  },
  botaoLimpar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 25,
  },
  textoBotaoLimpar: {
    color: COLORS.primary,
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 14,
  },
  botaoHome: {
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
    marginLeft: 'auto', // Garante que o botão fique sempre à direita
  },
});

export default TelaListaCompras;

