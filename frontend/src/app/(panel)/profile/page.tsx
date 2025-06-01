import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, Stack } from 'expo-router';
import COLORS from '@/constants/colors';
import FONTS from '@/constants/fonts';

// Interface para os dados do usuário
interface UserProfile {
  firstName: string;
  lastName: string;
}

// Interface para os dados de senha
interface PasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const ProfileScreen: React.FC = () => {
  const router = useRouter();
  
  // Estado para os dados do perfil
  const [profile, setProfile] = useState<UserProfile>({
    firstName: 'Antonio', // Valor inicial baseado no exemplo da tela inicial
    lastName: 'Silva'
  });
  
  // Estado para os dados de senha
  const [passwordData, setPasswordData] = useState<PasswordData>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  // Estado para controle de erros
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  // Função para atualizar os dados do perfil
  const handleProfileChange = (field: keyof UserProfile, value: string) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Limpa o erro quando o usuário começa a digitar
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };
  
  // Função para atualizar os dados de senha
  const handlePasswordChange = (field: keyof PasswordData, value: string) => {
    setPasswordData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Limpa o erro quando o usuário começa a digitar
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };
  
  // Validação dos campos do perfil
  const validateProfile = (): boolean => {
    let isValid = true;
    const newErrors = { ...errors };
    
    if (!profile.firstName.trim()) {
      newErrors.firstName = 'Nome é obrigatório';
      isValid = false;
    }
    
    if (!profile.lastName.trim()) {
      newErrors.lastName = 'Sobrenome é obrigatório';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  // Validação dos campos de senha
  const validatePassword = (): boolean => {
    let isValid = true;
    const newErrors = { ...errors };
    
    if (!passwordData.currentPassword) {
      newErrors.currentPassword = 'Senha atual é obrigatória';
      isValid = false;
    }
    
    if (!passwordData.newPassword) {
      newErrors.newPassword = 'Nova senha é obrigatória';
      isValid = false;
    } else if (passwordData.newPassword.length < 6) {
      newErrors.newPassword = 'A senha deve ter pelo menos 6 caracteres';
      isValid = false;
    }
    
    if (!passwordData.confirmPassword) {
      newErrors.confirmPassword = 'Confirmação de senha é obrigatória';
      isValid = false;
    } else if (passwordData.newPassword !== passwordData.confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  // Função para salvar as alterações do perfil
  const handleSaveProfile = () => {
    if (validateProfile()) {
      // Aqui seria implementada a lógica para salvar os dados no backend
      console.log('Salvando perfil:', profile);
      Alert.alert('Sucesso', 'Dados do perfil atualizados com sucesso!');
    }
  };
  
  // Função para alterar a senha
  const handleChangePassword = () => {
    if (validatePassword()) {
      // Aqui seria implementada a lógica para alterar a senha no backend
      console.log('Alterando senha:', passwordData);
      Alert.alert('Sucesso', 'Senha alterada com sucesso!');
      
      // Limpa os campos de senha após o sucesso
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Configuração do Header específico para esta tela usando Stack.Screen */}
         <Stack.Screen 
                options={{
                  headerShown: true,
                  headerTitle: 'PERFIL',
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
        
        {/* Seção de Dados Pessoais */}
        <View style={styles.section}>
          <Text style={[FONTS.h3, styles.sectionTitle]}>Dados Pessoais</Text>
          
          <View style={styles.inputContainer}>
            <Text style={FONTS.label}>Nome</Text>
            <TextInput
              style={[styles.input, errors.firstName ? styles.inputError : null]}
              value={profile.firstName}
              onChangeText={(text) => handleProfileChange('firstName', text)}
              placeholder="Digite seu nome"
              placeholderTextColor={COLORS.darkGray}
            />
            {errors.firstName ? <Text style={FONTS.error}>{errors.firstName}</Text> : null}
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={FONTS.label}>Sobrenome</Text>
            <TextInput
              style={[styles.input, errors.lastName ? styles.inputError : null]}
              value={profile.lastName}
              onChangeText={(text) => handleProfileChange('lastName', text)}
              placeholder="Digite seu sobrenome"
              placeholderTextColor={COLORS.darkGray}
            />
            {errors.lastName ? <Text style={FONTS.error}>{errors.lastName}</Text> : null}
          </View>
          
          <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
            <Text style={FONTS.button}>Salvar Alterações</Text>
          </TouchableOpacity>
        </View>
        
        {/* Seção de Alteração de Senha */}
        <View style={styles.section}>
          <Text style={[FONTS.h3, styles.sectionTitle]}>Alterar Senha</Text>
          
          <View style={styles.inputContainer}>
            <Text style={FONTS.label}>Senha Atual</Text>
            <TextInput
              style={[styles.input, errors.currentPassword ? styles.inputError : null]}
              value={passwordData.currentPassword}
              onChangeText={(text) => handlePasswordChange('currentPassword', text)}
              placeholder="Digite sua senha atual"
              placeholderTextColor={COLORS.darkGray}
              secureTextEntry
            />
            {errors.currentPassword ? <Text style={FONTS.error}>{errors.currentPassword}</Text> : null}
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={FONTS.label}>Nova Senha</Text>
            <TextInput
              style={[styles.input, errors.newPassword ? styles.inputError : null]}
              value={passwordData.newPassword}
              onChangeText={(text) => handlePasswordChange('newPassword', text)}
              placeholder="Digite sua nova senha"
              placeholderTextColor={COLORS.darkGray}
              secureTextEntry
            />
            {errors.newPassword ? <Text style={FONTS.error}>{errors.newPassword}</Text> : null}
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={FONTS.label}>Confirmar Nova Senha</Text>
            <TextInput
              style={[styles.input, errors.confirmPassword ? styles.inputError : null]}
              value={passwordData.confirmPassword}
              onChangeText={(text) => handlePasswordChange('confirmPassword', text)}
              placeholder="Confirme sua nova senha"
              placeholderTextColor={COLORS.darkGray}
              secureTextEntry
            />
            {errors.confirmPassword ? <Text style={FONTS.error}>{errors.confirmPassword}</Text> : null}
          </View>
          
          <TouchableOpacity style={styles.saveButton} onPress={handleChangePassword}>
            <Text style={FONTS.button}>Alterar Senha</Text>
          </TouchableOpacity>
        </View>
        
        {/* Botão de Logout */}Alert
        <TouchableOpacity style={styles.logoutButton} onPress={() => router.replace('/')}>
          <Ionicons name="log-out-outline" size={20} color={COLORS.white} style={styles.logoutIcon} />
          <Text style={FONTS.button}>Sair</Text>
        </TouchableOpacity>
        
        <View style={styles.bottomSpace} />
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
  section: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  sectionTitle: {
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: COLORS.secondary,
  },
  inputError: {
    borderWidth: 1,
    borderColor: COLORS.error,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  logoutButton: {
    backgroundColor: COLORS.error,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  logoutIcon: {
    marginRight: 10,
  },
  bottomSpace: {
    height: 30,
  },
});

export default ProfileScreen;
