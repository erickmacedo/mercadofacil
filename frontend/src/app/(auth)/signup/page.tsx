import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform, 
  Alert 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, Stack } from 'expo-router';

// Cores
const COLORS = {
  primary: '#8C1D18',
  secondary: '#4A4A4A',
  accent: '#E0E0E0',
  white: '#FFFFFF',
  lightGray: '#F5F5F5',
  darkGray: '#A0A0A0',
  background: '#F8F8F8',
  selectedCategory: '#FFE0B2', // Cor para categoria selecionada
  categoryBorder: '#FFB74D',
  error: '#D32F2F', // Cor para mensagens de erro
};

// Fontes
const FONTS = {
  h1: { fontSize: 24, fontWeight: 'bold' as 'bold', color: COLORS.secondary },
  label: { fontSize: 14, color: COLORS.secondary, marginBottom: 5, marginLeft: 5 },
  input: { fontSize: 16, color: COLORS.secondary },
  button: { fontSize: 18, fontWeight: 'bold' as 'bold', color: COLORS.white },
  category: { fontSize: 14, color: COLORS.secondary, fontWeight: '500' as '500' },
  error: { fontSize: 12, color: COLORS.error, marginTop: 5, marginLeft: 5 },
};

// Categorias Fixas
const INTEREST_CATEGORIES = [
  'Cerveja', 
  'Carnes', 
  'Laticínios', 
  'Frutas e Verduras', 
  'Produtos de Limpeza', 
  'Higiene Pessoal', 
  'Padaria', 
  'Bebidas (Não Alc.)'
];

// Renomeie este componente para 'Page' ou use como default export em '(auth)/signup/page.tsx'
const SignupScreen: React.FC = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const handleSignup = () => {
    setPasswordError(null); // Reset error on new attempt

    if (!firstName || !lastName || !age || !password || !confirmPassword || selectedCategories.length === 0) {
      Alert.alert('Campos Incompletos', 'Por favor, preencha todos os campos e selecione ao menos uma categoria.');
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError('As senhas não coincidem.');
      Alert.alert('Erro de Senha', 'As senhas digitadas não coincidem. Por favor, verifique.');
      return;
    }
    
    // Adicione validação de força da senha se necessário aqui

    console.log('Tentativa de Cadastro:', { firstName, lastName, age, selectedCategories /* Não logar senha em produção */ });
    Alert.alert('Cadastro (Simulado)', 'Conta criada com sucesso! Você será redirecionado para o login.', [
      { text: 'OK', onPress: () => router.replace('/') } // Redireciona para login após sucesso
    ]);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Configuração do Header */}
      <Stack.Screen 
        options={{
          headerShown: true,
          headerTitle: 'Criar Nova Conta',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color={COLORS.secondary} />
            </TouchableOpacity>
          ),
          headerStyle: { backgroundColor: COLORS.white },
          headerShadowVisible: true,
          headerTintColor: COLORS.secondary,
        }}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          {/* Campos de Texto */}
          <View style={styles.inputGroup}>
            <Text style={FONTS.label}>NOME</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="person-outline" size={20} color={COLORS.secondary} style={styles.inputIcon} />
              <TextInput
                style={[FONTS.input, styles.input]}
                placeholder="Seu primeiro nome"
                placeholderTextColor={COLORS.accent}
                value={firstName}
                onChangeText={setFirstName}
                autoCapitalize="words"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={FONTS.label}>SOBRENOME</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="person-outline" size={20} color={COLORS.secondary} style={styles.inputIcon} />
              <TextInput
                style={[FONTS.input, styles.input]}
                placeholder="Seu sobrenome"
                placeholderTextColor={COLORS.accent}
                value={lastName}
                onChangeText={setLastName}
                autoCapitalize="words"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={FONTS.label}>IDADE</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="calendar-outline" size={20} color={COLORS.secondary} style={styles.inputIcon} />
              <TextInput
                style={[FONTS.input, styles.input]}
                placeholder="Sua idade"
                placeholderTextColor={COLORS.accent}
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
              />
            </View>
          </View>

          {/* Campos de Senha */}
          <View style={styles.inputGroup}>
            <Text style={FONTS.label}>SENHA</Text>
            <View style={[styles.inputWrapper, passwordError ? styles.inputWrapperError : null]}>
              <Ionicons name="lock-closed-outline" size={20} color={COLORS.secondary} style={styles.inputIcon} />
              <TextInput
                style={[FONTS.input, styles.input]}
                placeholder="Crie uma senha"
                placeholderTextColor={COLORS.accent}
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  if (passwordError) setPasswordError(null); // Limpa erro ao digitar
                }}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={24} color={COLORS.secondary} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={FONTS.label}>CONFIRMAR SENHA</Text>
            <View style={[styles.inputWrapper, passwordError ? styles.inputWrapperError : null]}>
              <Ionicons name="lock-closed-outline" size={20} color={COLORS.secondary} style={styles.inputIcon} />
              <TextInput
                style={[FONTS.input, styles.input]}
                placeholder="Confirme sua senha"
                placeholderTextColor={COLORS.accent}
                value={confirmPassword}
                onChangeText={(text) => {
                  setConfirmPassword(text);
                  if (passwordError) setPasswordError(null); // Limpa erro ao digitar
                }}
                secureTextEntry={!showConfirmPassword}
              />
              <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
                <Ionicons name={showConfirmPassword ? "eye-off-outline" : "eye-outline"} size={24} color={COLORS.secondary} />
              </TouchableOpacity>
            </View>
            {passwordError && <Text style={FONTS.error}>{passwordError}</Text>}
          </View>

          {/* Seleção de Categorias */}
          <View style={styles.categorySection}>
            <Text style={[FONTS.label, { marginBottom: 15, marginLeft: 0 }]}>CATEGORIAS DE INTERESSE</Text>
            <View style={styles.categoryGrid}>
              {INTEREST_CATEGORIES.map(category => {
                const isSelected = selectedCategories.includes(category);
                return (
                  <TouchableOpacity 
                    key={category} 
                    style={[
                      styles.categoryChip,
                      isSelected && styles.categoryChipSelected
                    ]}
                    onPress={() => toggleCategory(category)}
                  >
                    <Text style={[FONTS.category, isSelected && styles.categoryTextSelected]}>{category}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Botão de Cadastro */}
          <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
            <Text style={FONTS.button}>CRIAR CONTA</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  formContainer: {
    paddingHorizontal: 25,
    paddingTop: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 55,
    borderWidth: 1,
    borderColor: COLORS.accent,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  inputWrapperError: {
    borderColor: COLORS.error, // Borda vermelha para erro
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
  },
  eyeIcon: {
    padding: 5,
  },
  categorySection: {
    marginTop: 10,
    marginBottom: 30,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start', // Alinha itens à esquerda
  },
  categoryChip: {
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.accent,
    marginRight: 10,
    marginBottom: 10,
  },
  categoryChipSelected: {
    backgroundColor: COLORS.selectedCategory,
    borderColor: COLORS.categoryBorder,
  },
  categoryTextSelected: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10, // Espaço acima do botão
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default SignupScreen;

