import React from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe o hook de navegação
import { useTheme } from '../context/ThemeContext';

const LoginScreen = () => {
  const navigation = useNavigation(); // Obtenha o objeto de navegação
  const { colors } = useTheme();

  const handleBackPress = () => {
    navigation.goBack(); // Volta para a tela anterior na pilha
  };

  return (
    <View style={styles.container(colors)}>
      {/* Imagem de fundo que ocupa a tela inteira */}
      <Image
        source={require('../assets/Vector.png')}
        style={styles.fullScreenImage}
        accessibilityLabel="Desenho de uma pessoa com um gato"
      />

      {/* O container de login completo sobre a imagem */}
      <View style={styles.loginContainer(colors)}>
        {/* Logo Pet Vita agora é uma imagem */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/petvita2.png')} // Caminho da nova imagem
            style={styles.logoImage}
            accessibilityLabel="Logo Pet Vita com desenhos de um cachorro e um gato"
          />
        </View>

        {/* Campo de Email */}
        <View style={styles.formGroup}>
          <Text style={styles.label(colors)}>Email</Text>
          <TextInput
            style={styles.input(colors)}
            placeholder="Exemplo@gmail.com"
            placeholderTextColor={colors.registerText}
            keyboardType="email-address"
            maxLength={35} // Limit email to 35 characters
            autoCapitalize="none"
          />
        </View>

        {/* Campo de Senha */}
        <View style={styles.formGroup}>
          <Text style={styles.label(colors)}>Password</Text>
          <TextInput
            style={styles.input(colors)}
            placeholder="Senha"
            placeholderTextColor={colors.registerText}
            secureTextEntry
            maxLength={20} // Limit password to 20 characters
          />
        </View>

        {/* Lembre-me e Esqueci a Senha */}
        <View style={styles.rememberForgotContainer}>
          <View style={styles.rememberMeContainer}>
            <TouchableOpacity style={styles.checkbox}></TouchableOpacity>
            <Text style={styles.rememberMeText(colors)}>Lembre-me</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText(colors)}>Esqueci a Senha</Text>
          </TouchableOpacity>
        </View>

        {/* Botão Entrar */}
        <TouchableOpacity style={styles.loginButton(colors)} onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.loginButtonText(colors)}>Entrar</Text>
        </TouchableOpacity>

        {/* Botão Voltar */}
        <TouchableOpacity style={styles.backButton(colors)} onPress={handleBackPress}>
          <Text style={styles.backButtonText(colors)}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (colors) => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  }),
  fullScreenImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 1,
  },
  loginContainer: (colors) => ({
    width: '90%',
    maxWidth: 400,
    backgroundColor: colors.cardBackground,
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  }),
  logoContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  logoImage: {
    width: 250,
    height: 100,
    resizeMode: 'contain',
  },
  formGroup: {
    width: '100%',
    marginBottom: 20,
  },
  label: (colors) => ({
    fontSize: 14,
    color: colors.cardTitle,
    marginBottom: 5,
    fontWeight: '500',
  }),
  input: (colors) => ({
    width: '100%',
    height: 50,
    backgroundColor: colors.cardBorder,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.registerText,
  }),
  rememberForgotContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
  },
  rememberMeText: (colors) => ({
    fontSize: 14,
    color: colors.registerText,
  }),
  forgotPasswordText: (colors) => ({
    fontSize: 14,
    color: colors.registerLink,
    fontWeight: '600',
  }),
  loginButton: (colors) => ({
    width: '100%',
    height: 50,
    backgroundColor: colors.loginButton,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  }),
  loginButtonText: (colors) => ({
    color: colors.loginButtonText,
    fontSize: 18,
    fontWeight: 'bold',
  }),
  backButton: (colors) => ({
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  backButtonText: (colors) => ({
    color: colors.registerLink,
    fontSize: 16,
    fontWeight: '600',
  }),
});

export default LoginScreen;
