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

// Importe suas constantes - ajuste o caminho se necessário
import COLORS from '@/constants/colors'; 
import FONTS from '@/constants/fonts';

// Renomeie para Page ou use como default export em '(auth)/forgotPassword/page.tsx'
const ForgotPasswordScreen: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  // Função simples para validar e-mail (pode ser melhorada)
  const validateEmail = (text: string): boolean => {
    const emailRegex = /^[^"]+@[^"]+\.[^"]+$/;
    return emailRegex.test(text);
  };

  const handleSendResetEmail = () => {
    setEmailError(null); // Limpa erro anterior

    if (!email) {
      setEmailError('Por favor, insira seu endereço de e-mail.');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Por favor, insira um endereço de e-mail válido.');
      return;
    }

    // --- Simulação do envio de e-mail ---
    console.log(`Simulando envio de e-mail de redefinição para: ${email}`);
    // adicioanr back end-

    setIsEmailSent(true); // Mostra a mensagem de confirmação
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
          headerTitle: 'Esqueceu a Senha',
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
          
          {!isEmailSent ? (
            <>
              <Text style={styles.instructionText}>
                Digite seu endereço de e-mail abaixo para receber as instruções de redefinição de senha.
              </Text>

              {/* Campo de E-mail */}
              <View style={styles.inputGroup}>
                <Text style={FONTS.label}>E-MAIL</Text>
                <View style={[styles.inputWrapper, emailError ? styles.inputWrapperError : null]}>
                  <Ionicons name="mail-outline" size={20} color={COLORS.secondary} style={styles.inputIcon} />
                  <TextInput
                    style={[FONTS.input, styles.input]}
                    placeholder="seuemail@exemplo.com"
                    placeholderTextColor={COLORS.accent}
                    value={email}
                    onChangeText={(text) => {
                      setEmail(text);
                      if (emailError) setEmailError(null); // Limpa erro ao digitar
                    }}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoComplete="email"
                  />
                </View>
                {emailError && <Text style={FONTS.error}>{emailError}</Text>}
              </View>

              {/* Botão de Envio */}
              <TouchableOpacity style={styles.submitButton} onPress={handleSendResetEmail}>
                <Text style={FONTS.button}>ENVIAR E-MAIL</Text>
              </TouchableOpacity>
            </>
          ) : (
            // Mensagem de Confirmação
            <View style={styles.confirmationContainer}>
              <Ionicons name="checkmark-circle-outline" size={60} color={COLORS.success} />
              <Text style={styles.confirmationTitle}>E-mail Enviado!</Text>
              <Text style={styles.confirmationText}>
                Verifique sua caixa de entrada (e spam) em <Text style={{fontWeight: 'bold'}}>{email}</Text> para encontrar o link de redefinição de senha.
              </Text>
              <TouchableOpacity style={styles.backToLoginButton} onPress={() => router.replace('/')}> 
                 {/* Use replace para não voltar para esta tela */}
                <Text style={FONTS.link}>Voltar para o Login</Text>
              </TouchableOpacity>
            </View>
          )}
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
    justifyContent: 'center', 
    paddingBottom: 40,
  },
  formContainer: {
    paddingHorizontal: 25,
    paddingTop: 30, 
  },
  instructionText: {
    ...FONTS.body,
    color: COLORS.secondary,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },
  inputGroup: {
    marginBottom: 25,
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
    borderColor: COLORS.error,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
  },
  submitButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
  confirmationContainer: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  confirmationTitle: {
    ...FONTS.h2Dark, 
    color: COLORS.success,
    marginTop: 15,
    marginBottom: 10,
  },
  confirmationText: {
    ...FONTS.body,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
    color: COLORS.secondary,
  },
  backToLoginButton: {
    marginTop: 20,
  },
});

export default ForgotPasswordScreen;

