import React, { useState, useEffect } from 'react';
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
import { useRouter, Stack } from 'expo-router';
import COLORS from '@/constants/colors';
import FONTS from '@/constants/fonts';

// Tipagem para os dados
interface ItemListaCompras {
  id: string;
  nome: string;
  preco: string; 
  precoDistancia: string;
  imagem: any;
}

interface DadosListaCompras {
  [categoria: string]: ItemListaCompras[];
}

interface MelhorOpcao {
  nomeLoja: string;
  logoLoja: any;
  total: string;
}

// Dados de exemplo (mantidos)
const dadosListaComprasIniciais: DadosListaCompras = {
  'Produtos limpeza': [
    { id: 'p1', nome: 'DETERGENTE TÊ', preco: '1,49', precoDistancia: '4,58', imagem: require('../../../../assets/images/ShoppingList/DETERGENTE_TE_50x50.png') },
    { id: 'p2', nome: 'DESINFETANTE UAU', preco: '8,79', precoDistancia: '15,99', imagem: require('../../../../assets/images/ShoppingList/DESINFETANTE_UAU_50x50.png') },
    { id: 'p3', nome: 'SABÃO EM PÓ OMO', preco: '3,60', precoDistancia: '5,47', imagem: require('../../../../assets/images/ShoppingList/SABAO_OMO_50x50.png') },
  ],
  'Cervejas': [
    { id: 'p4', nome: 'HEINEKEN 350ML', preco: '7,99', precoDistancia: '10,48', imagem: require('../../../../assets/images/ShoppingList/HEINEKEN_350ML_50x50.png') },
    { id: 'p5', nome: 'AMSTEL 600ML', preco: '7,49', precoDistancia: '10,43', imagem: require('../../../../assets/images/ShoppingList/AMSTEL_600ML_50x50.png') },
  ],
  'Carnes': [
    { id: 'p6', nome: 'ALCATRA', preco: '25,99', precoDistancia: '28,49', imagem: require('../../../../assets/images/ShoppingList/ALCATRA_50x50.png') },
  ],
};

const melhorOpcaoInicial: MelhorOpcao = {
  nomeLoja: 'Assaí Atacadista',
  logoLoja: require('../../../../assets/images/product_detail/Assai_logo_100x100.png'),
  total: '0,00', 
};


const TelaListaCompras: React.FC = () => {
  const router = useRouter();

  const [listaAtual, setListaAtual] = useState(dadosListaComprasIniciais);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [melhorOpcao, setMelhorOpcao] = useState(melhorOpcaoInicial);

  // Efeitos para inicializar e calcular o total (mantidos)
  useEffect(() => {
    const initialQuantities: { [key: string]: number } = {};
    Object.values(listaAtual).forEach(categoria => {
      categoria.forEach(item => {
        initialQuantities[item.id] = quantities[item.id] || 1;
      });
    });
    setQuantities(initialQuantities);
  }, [listaAtual]);

  useEffect(() => {
    if (Object.keys(quantities).length === 0 && Object.keys(listaAtual).length > 0) return;

    let totalCalculado = 0;
    Object.values(listaAtual).forEach(categoria => {
      categoria.forEach(item => {
        const precoNumerico = parseFloat(item.preco.replace(',', '.'));
        const quantidade = quantities[item.id] || 1;
        totalCalculado += precoNumerico * quantidade;
      });
    });

    setMelhorOpcao(prev => ({
      ...prev,
      total: totalCalculado.toFixed(2).replace('.', ','),
    }));
  }, [quantities, listaAtual]);

  const handleQuantityChange = (itemId: string, amount: number) => {
    setQuantities(prev => {
      const newQuantity = Math.max(1, (prev[itemId] || 1) + amount);
      return { ...prev, [itemId]: newQuantity };
    });
  };

  const manipularLimpezaLista = () => {
    Alert.alert('Limpar Lista', 'Tem certeza que deseja limpar todos os itens?',
      [ { text: 'Cancelar' }, { text: 'Limpar', onPress: () => { setListaAtual({}); setQuantities({}); }, style: 'destructive' } ]
    );
  };
  
  // --- INÍCIO: NOVA FUNÇÃO PARA DELETAR ITEM ---
  const handleDeleteItem = (itemIdToDelete: string) => {
    // Atualiza a lista de produtos
    const novaLista = { ...listaAtual };
    for (const categoria in novaLista) {
      novaLista[categoria] = novaLista[categoria].filter(item => item.id !== itemIdToDelete);
      // Se a categoria ficar vazia, remove a categoria
      if (novaLista[categoria].length === 0) {
        delete novaLista[categoria];
      }
    }
    setListaAtual(novaLista);

    // Atualiza as quantidades
    const novasQuantidades = { ...quantities };
    delete novasQuantidades[itemIdToDelete];
    setQuantities(novasQuantidades);
  };
  // --- FIM: NOVA FUNÇÃO PARA DELETAR ITEM ---

  const navegarParaHome = () => router.push('/(panel)/homeScreen/page');
  const voltarTela = () => listaEstaVazia ? router.push('/(panel)/homeScreen/page') : router.back();

  // --- RENDERIZADOR DE ITEM ATUALIZADO COM BOTÃO DE EXCLUIR ---
  const renderizarItemLista = ({ item }: { item: ItemListaCompras }) => {
    const quantity = quantities[item.id] || 1;
    return (
      <View style={estilos.containerItemLista}>
        <Image source={item.imagem} style={estilos.imagemItem} resizeMode="contain" />
        <Text style={estilos.nomeItem} numberOfLines={2}>{item.nome}</Text>
        
        <View style={estilos.quantityContainer}>
          <TouchableOpacity style={estilos.quantityButton} onPress={() => handleQuantityChange(item.id, -1)}>
            <Ionicons name="remove" size={16} color={COLORS.primary} />
          </TouchableOpacity>
          <Text style={estilos.quantityText}>{quantity}</Text>
          <TouchableOpacity style={estilos.quantityButton} onPress={() => handleQuantityChange(item.id, 1)}>
            <Ionicons name="add" size={16} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        <View style={estilos.colunaPreco}>
          <Text style={estilos.labelPreco}>MENOR VALOR</Text>
          <Text style={FONTS.priceSmall}>R$ {item.preco}</Text>
        </View>

        {/* Botão de excluir */}
        <TouchableOpacity style={estilos.deleteButton} onPress={() => handleDeleteItem(item.id)}>
          <Ionicons name="trash-outline" size={20} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    );
  };
  // --- FIM DO RENDERIZADOR ATUALIZADO ---

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

  const listaEstaVazia = Object.keys(listaAtual).length === 0;

  const renderizarListaVazia = () => (
    <View style={estilos.containerListaVazia}>
      <Ionicons name="cart-outline" size={80} color={COLORS.darkGray} />
      <Text style={estilos.textoListaVazia}>Sua lista de compras está vazia.</Text>
      <TouchableOpacity style={estilos.botaoNavegar} onPress={navegarParaHome}>
        <Text style={estilos.textoBotaoNavegar}>Começar a comprar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={estilos.container}>
      <Stack.Screen
        options={{
          headerShown: true, headerTitle: 'Lista de Compras', headerTitleAlign: 'center',
          headerLeft: () => (<TouchableOpacity onPress={voltarTela} style={estilos.botaoVoltar}><Ionicons name="arrow-back" size={24} color={COLORS.secondary} /></TouchableOpacity>),
          headerRight: () => <View style={{ width: 34 }} />,
          headerStyle: { backgroundColor: COLORS.white }, headerShadowVisible: true, headerTintColor: COLORS.secondary,
        }}
      />

      <View style={estilos.conteudoPrincipal}>
        <ScrollView style={estilos.containerScroll} showsVerticalScrollIndicator={false}>
          {listaEstaVazia ? renderizarListaVazia() : Object.keys(listaAtual).map(renderizarSecaoLista)}
        </ScrollView>
      </View>

      {/* --- INÍCIO: RODAPÉ TOTALMENTE REFEITO --- */}
      {!listaEstaVazia && (
        <View style={estilos.rodape}>
          <View style={estilos.melhorOpcaoCard}>
            <View style={estilos.melhorOpcaoHeader}>
                <Ionicons name="ribbon" size={20} color={COLORS.success} />
                <Text style={estilos.melhorOpcaoHeaderText}>MELHOR OPÇÃO DE COMPRA</Text>
            </View>
            <View style={estilos.melhorOpcaoBody}>
                <Image source={melhorOpcao.logoLoja} style={estilos.logoLoja} resizeMode="contain" />
                <View style={estilos.infoMelhorOpcao}>
                    <Text style={estilos.nomeLoja}>{melhorOpcao.nomeLoja}</Text>
                    <Text style={estilos.totalPriceText}>R$ {melhorOpcao.total}</Text>
                </View>
            </View>
          </View>
          <TouchableOpacity style={estilos.botaoLimpar} onPress={manipularLimpezaLista}>
            <Ionicons name="trash-bin-outline" size={20} color={COLORS.primary} />
            <Text style={estilos.textoBotaoLimpar}>LIMPAR LISTA</Text>
          </TouchableOpacity>
        </View>
      )}
      {/* --- FIM: RODAPÉ TOTALMENTE REFEITO --- */}
    </View>
  );
};

// --- ESTILOS ATUALIZADOS ---
const estilos = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  conteudoPrincipal: { flex: 1 },
  botaoVoltar: { marginLeft: 15, padding: 5 },
  containerScroll: { flex: 1, paddingHorizontal: 15, paddingTop: 15 },
  secaoCategoria: { marginBottom: 20 },
  containerItemLista: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white,
    borderRadius: 12, paddingVertical: 10, paddingHorizontal: 12, marginBottom: 10,
    shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 2,
  },
  imagemItem: { width: 40, height: 40, marginRight: 10 },
  nomeItem: { ...FONTS.body, flex: 1, marginRight: 8 },
  quantityContainer: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    borderWidth: 1, borderColor: COLORS.mediumGray, borderRadius: 20, marginRight: 10,
  },
  quantityButton: { padding: 6 },
  quantityText: { fontSize: 14, fontWeight: 'bold', color: COLORS.secondary, paddingHorizontal: 4 },
  colunaPreco: { alignItems: 'flex-end', minWidth: 60 },
  labelPreco: { fontSize: 10, color: COLORS.darkGray, marginBottom: 2 },
  deleteButton: {
    padding: 5,
    marginLeft: 8,
  },
  containerListaVazia: { alignItems: 'center', justifyContent: 'center', paddingVertical: 80, paddingHorizontal: 40 },
  textoListaVazia: { fontSize: 18, color: COLORS.darkGray, marginTop: 20, textAlign: 'center', marginBottom: 30 },
  botaoNavegar: { backgroundColor: COLORS.primary, paddingVertical: 12, paddingHorizontal: 30, borderRadius: 25 },
  textoBotaoNavegar: { color: COLORS.white, fontSize: 16, fontWeight: 'bold' },
  rodape: {
    backgroundColor: COLORS.background,
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 25, 
    borderTopWidth: 1,
    borderTopColor: COLORS.accent,
  },
  melhorOpcaoCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    marginBottom: 15,
  },
  melhorOpcaoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.accent,
    paddingBottom: 10,
    marginBottom: 10,
  },
  melhorOpcaoHeaderText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.success,
  },
  melhorOpcaoBody: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoLoja: {
    width: 90,
    height: 40,
    marginRight: 15,
  },
  infoMelhorOpcao: {
    flex: 1,
  },
  nomeLoja: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  totalPriceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginTop: 2,
  },
  botaoLimpar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  textoBotaoLimpar: {
    color: COLORS.primary,
    fontWeight: 'bold',
    marginLeft: 8,
    fontSize: 14,
  },
});

export default TelaListaCompras;