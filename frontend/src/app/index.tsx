import React, { useState, useEffect, useRef } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform, 
  Animated 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, Link } from 'expo-router';
import COLORS from '@/constants/colors';
import FONTS from '@/constants/fonts';

const index: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.05, // Slightly reduced scale for subtlety
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [pulseAnim]);

  const handleLogin = () => {
    console.log('Login attempt with:', email, password);
    router.replace('/(panel)/homeScreen/page');
  };

  const handleGuestAccess = () => {
    console.log('Guest access requested');
    router.replace('/(panel)/homeScreen/page');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <LinearGradient
          colors={[COLORS.primaryDark, COLORS.primary]}
          style={styles.header}
        >
           <Image 
            source={require('../../assets/images/iconimg.png')} 
            style={styles.logo} 
            resizeMode="contain" 
          />
            
          <Text style={FONTS.h2}>Sua economia começa aqui</Text>
        </LinearGradient>

        <View style={styles.formContainer}>
          {/* Input Fields */}
          <View>
            <View style={styles.inputGroup}>
              <Text style={FONTS.label}>EMAIL</Text>
              <View style={styles.inputWrapper}>
                <Ionicons name="mail-outline" size={20} color={COLORS.secondary} style={styles.inputIcon} />
                <TextInput
                  style={[FONTS.input, styles.input]}
                  placeholder="exemplo@gmail.com"
                  placeholderTextColor={COLORS.accent}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={FONTS.label}>SENHA</Text>
              <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed-outline" size={20} color={COLORS.secondary} style={styles.inputIcon} />
                <TextInput
                  style={[FONTS.input, styles.input, { flex: 1 }]}
                  placeholder="••••••••"
                  placeholderTextColor={COLORS.accent}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                  <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={24} color={COLORS.secondary} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.optionsContainer}>
              <TouchableOpacity style={styles.checkboxContainer} onPress={() => setRememberMe(!rememberMe)}>
                <Ionicons name={rememberMe ? "checkbox" : "square-outline"} size={22} color={COLORS.primary} />
                <Text style={styles.checkboxLabel}>Lembrar-se de mim</Text>
              </TouchableOpacity>
              <Link href="/(auth)/forgotPassword/page" asChild>
                 <TouchableOpacity>
                   <Text style={FONTS.link}>Esqueci a senha</Text>
                 </TouchableOpacity>
              </Link>
            </View>
          </View>

          {/* Action Buttons (Moved Up) */}
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={FONTS.button}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.guestButton} onPress={handleGuestAccess}>
              <Text style={FONTS.guestButton}>Acessar sem conta</Text>
            </TouchableOpacity>
          </View>

          {/* Signup Promotion (Remains at Bottom) */}
          <View style={styles.signupPromotionContainer}>
            <Animated.View style={[styles.animatedTextContainer, { transform: [{ scale: pulseAnim }] }]}>
              <Text style={FONTS.animatedText}>
                Crie sua conta agora e receba ofertas personalizadas
              </Text>
            </Animated.View>
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Não tem uma conta? </Text>
              <Link href="/(auth)/signup/page" asChild>
                <TouchableOpacity>
                  <Text style={[FONTS.link, { fontWeight: 'bold' }]}>CRIAR CONTA</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 70 : 50,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  logo: {
    width: 120,
    height: 60,
    marginBottom: 15,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 40,
    justifyContent: 'space-between', // Adjust if needed, or use flexGrow on ScrollView
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
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30, // Space before action buttons
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
    color: COLORS.secondary,
  },
  actionButtonsContainer: { // Container for Login and Guest buttons
    marginBottom: 40, // Space before signup promotion
  },
  loginButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15, // Space between login and guest button
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  guestButton: {
    backgroundColor: COLORS.white,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.guestButtonBorder,
  },
  signupPromotionContainer: { // Container for animated text and signup link
    // Stays at the bottom
  },
  animatedTextContainer: {
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontSize: 14,
    color: COLORS.secondary,
  },
});

export default index;
