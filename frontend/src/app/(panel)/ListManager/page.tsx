import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, Stack } from 'expo-router';
import COLORS from '@/constants/colors';
import FONTS from '@/constants/fonts';

// 1. Interface para definir a estrutura de uma lista de compras
interface ShoppingList {
  id: string;
  name: string;
  itemCount: number;
  lastUpdated: string;
}

// 2. Dados Fictícios (Mock) para iniciar
const MOCK_LISTS: ShoppingList[] = [
  {
    id: '1',
    name: 'Compras do Mês - Junho',
    itemCount: 25,
    lastUpdated: '28/06/2025',
  },
  {
    id: '2',
    name: 'Churrasco Fim de Semana',
    itemCount: 12,
    lastUpdated: '27/06/2025',
  },
];

const ListManagerPage: React.FC = () => {
  const router = useRouter();
  const [lists, setLists] = useState<ShoppingList[]>(MOCK_LISTS);

  // 3. Funções para Criar, Editar e Deletar
  const handleCreateList = () => {
    Alert.prompt(
      'Nova Lista',
      'Digite o nome da sua nova lista de compras:',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Criar',
          onPress: (listName) => {
            if (listName && listName.trim().length > 0) {
              const newList: ShoppingList = {
                id: Date.now().toString(), // ID único baseado no timestamp
                name: listName.trim(),
                itemCount: 0,
                lastUpdated: new Date().toLocaleDateString('pt-BR'),
              };
              setLists([newList, ...lists]);
            } else {
              Alert.alert('Nome inválido', 'O nome da lista não pode estar em branco.');
            }
          },
        },
      ],
      'plain-text'
    );
  };

  const handleEditList = (listId: string, currentName: string) => {
    Alert.prompt(
      'Editar Nome',
      'Digite o novo nome para a lista:',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Salvar',
          onPress: (newName) => {
            if (newName && newName.trim().length > 0) {
              setLists(
                lists.map((list) =>
                  list.id === listId ? { ...list, name: newName.trim() } : list
                )
              );
            }
          },
        },
      ],
      'plain-text',
      currentName
    );
  };

  const handleDeleteList = (listId: string) => {
    Alert.alert(
      'Confirmar Exclusão',
      'Tem certeza que deseja excluir esta lista?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          onPress: () => {
            setLists(lists.filter((list) => list.id !== listId));
          },
          style: 'destructive',
        },
      ]
    );
  };
  
  // 4. Função para navegar para a lista de detalhes
  const navigateToList = (list: ShoppingList) => {
    router.push({
      pathname: '/(panel)/ShoppingList/page',
      params: { listId: list.id, listName: list.name }
    });
  };

  // Componente para renderizar cada item da lista
  const renderListItem = ({ item }: { item: ShoppingList }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigateToList(item)}>
      <View style={styles.cardInfo}>
        <Text style={styles.listName}>{item.name}</Text>
        <Text style={styles.listDetails}>
          {item.itemCount} itens - Atualizada em {item.lastUpdated}
        </Text>
      </View>
      <View style={styles.cardActions}>
        <TouchableOpacity onPress={() => handleEditList(item.id, item.name)} style={styles.actionButton}>
          <Ionicons name="pencil" size={22} color={COLORS.secondary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteList(item.id)} style={styles.actionButton}>
          <Ionicons name="trash-outline" size={22} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Minhas Listas',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: COLORS.white },
          headerShadowVisible: true,
        }}
      />

      <FlatList
        data={lists}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
            <View style={styles.emptyContainer}>
                <Ionicons name="list-circle-outline" size={80} color={COLORS.darkGray} />
                <Text style={styles.emptyText}>Nenhuma lista encontrada.</Text>
                <Text style={styles.emptySubtext}>Crie sua primeira lista no botão +</Text>
            </View>
        }
      />

      {/* Botão Flutuante para Adicionar */}
      <TouchableOpacity style={styles.fab} onPress={handleCreateList}>
        <Ionicons name="add" size={32} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  listContainer: {
    padding: 15,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardInfo: {
    flex: 1,
  },
  listName: {
    ...FONTS.h3,
    color: COLORS.secondary,
  },
  listDetails: {
    ...FONTS.body,
    color: COLORS.darkGray,
    fontSize: 12,
    marginTop: 4,
  },
  cardActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  actionButton: {
    padding: 5,
    marginLeft: 15,
  },
  fab: {
    position: 'absolute',
    right: 25,
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  emptyContainer: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    ...FONTS.h2,
    marginTop: 20,
    color: COLORS.darkGray
  },
  emptySubtext: {
    ...FONTS.body,
    marginTop: 8,
    color: COLORS.mediumGray
  }
});

export default ListManagerPage;