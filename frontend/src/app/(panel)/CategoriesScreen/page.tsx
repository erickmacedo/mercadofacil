'use client'; // É importante manter esta diretiva aqui

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, Stack } from 'expo-router';
import COLORS from '@/constants/colors';
import FONTS from '@/constants/fonts';

// ... (sua lista de imports de imagens continua a mesma)
const acucar_doces = require('../../../../assets/images/categories_icons/acucar_doces.png');
const alimentos_congelados = require('../../../../assets/images/categories_icons/alimentos_congelados.png');
const aves = require('../../../../assets/images/categories_icons/aves.png');
const bebidas_alcoolicas = require('../../../../assets/images/categories_icons/bebidas_alcoolicas.png');
const bebidas = require('../../../../assets/images/categories_icons/bebidas.png');
const biscoitos_snacks = require('../../../../assets/images/categories_icons/biscoitos_snacks.png');
const cafe_cha_achocolatados = require('../../../../assets/images/categories_icons/cafe_cha_achocolatados.png');
const carnes = require('../../../../assets/images/categories_icons/carnes.png');
const farinha_fermento = require('../../../../assets/images/categories_icons/farinha_fermento.png');
const frios_embutidos = require('../../../../assets/images/categories_icons/frios_embutidos.png');
const graos_cereais = require('../../../../assets/images/categories_icons/graos_cereais.png');
const higiene_pessoal = require('../../../../assets/images/categories_icons/higiene_pessoal.png');
const hortifruti = require('../../../../assets/images/categories_icons/hortifruti.png');
const laticinios = require('../../../../assets/images/categories_icons/laticinios.png');
const massas = require('../../../../assets/images/categories_icons/massas.png');
const molhos_temperos_condimentos = require('../../../../assets/images/categories_icons/molhos_temperos_condimentos.png');
const oleos_azeites = require('../../../../assets/images/categories_icons/oleos_azeites.png');
const padaria_confeitaria = require('../../../../assets/images/categories_icons/padaria_confeitaria.png');
const peixes_frutos_do_mar = require('../../../../assets/images/categories_icons/peixes_frutos_do_mar.png');
const produtos_limpeza = require('../../../../assets/images/categories_icons/produtos_limpeza.png');

interface Categoria {
  id: string;
  nome: string;
  imagem: any;
}

const CategoriesScreen: React.FC = () => {
  const router = useRouter();
  const [textoBusca, setTextoBusca] = useState('');

  const categorias: Categoria[] = [
    { id: '1', nome: 'Hortifrúti', imagem: hortifruti },
    { id: '2', nome: 'Carnes', imagem: carnes },
    { id: '3', nome: 'Peixes e Frutos do Mar', imagem: peixes_frutos_do_mar },
    { id: '4', nome: 'Aves', imagem: aves },
    { id: '5', nome: 'Padaria e Confeitaria', imagem: padaria_confeitaria },
    { id: '6', nome: 'Laticínios', imagem: laticinios },
    { id: '7', nome: 'Frios e Embutidos', imagem: frios_embutidos },
    { id: '8', nome: 'Bebidas', imagem: bebidas },
    { id: '9', nome: 'Bebidas Alcoólicas', imagem: bebidas_alcoolicas },
    { id: '10', nome: 'Grãos e Cereais', imagem: graos_cereais },
    { id: '11', nome: 'Massas', imagem: massas },
    { id: '12', nome: 'Biscoitos e Snacks', imagem: biscoitos_snacks },
    { id: '13', nome: 'Café, Chá e Achocolatado', imagem: cafe_cha_achocolatados },
    { id: '14', nome: 'Açúcar e Doces', imagem: acucar_doces },
    { id: '15', nome: 'Farinha e Fermento', imagem: farinha_fermento },
    { id: '16', nome: 'Óleos e Azeites', imagem: oleos_azeites },
    { id: '17', nome: 'Molhos, Temperos e Condimentos', imagem: molhos_temperos_condimentos },
    { id: '18', nome: 'Produtos de Limpeza', imagem: produtos_limpeza },
    { id: '19', nome: 'Higiene Pessoal', imagem: higiene_pessoal },
    { id: '20', nome: 'Alimentos Congelados', imagem: alimentos_congelados },
  ];

  const categoriasFiltradas = textoBusca.length > 0
    ? categorias.filter(categoria =>
      categoria.nome.toLowerCase().includes(textoBusca.toLowerCase())
    )
    : categorias;

  const numeroColunas = 2;

  const renderizarItemCategoria = ({ item }: { item: Categoria }) => (
    <TouchableOpacity
      style={estilos.itemCategoria}
      // --- ESTA É A LINHA CORRIGIDA ---
      onPress={() => router.push({
        pathname: '/(panel)/productList/page',
        // Enviando o parâmetro com o nome correto: 'category'
        params: { category: item.nome }
      })}
    >
      <View style={estilos.conteudoCategoria}>
        <Text style={estilos.nomeCategoria}>{item.nome}</Text>
        <Image source={item.imagem} style={estilos.imagemCategoria} resizeMode="contain" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={estilos.container}>
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

// Seus estilos permanecem os mesmos
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

export default CategoriesScreen;