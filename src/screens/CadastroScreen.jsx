import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';

const CadastroScreen = () => {
  const [name, setName] = useState('');

  const handleNameChange = (text) => {
    // Remove all non-alphabetic characters
    const cleanedText = text.replace(/[^a-zA-Z\s]/g, '');
    setName(cleanedText);
  };
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  const handlePhoneChange = (text) => {
    // Remove all non-numeric characters
    let cleanedText = text.replace(/[^0-9]/g, '');
    
    // Add space after first 2 digits if length > 2
    if (cleanedText.length > 2) {
      cleanedText = cleanedText.substring(0, 2) + ' ' + cleanedText.substring(2);
    }
    
    setPhone(cleanedText);
  };
  const [password, setPassword] = useState('');

  // Handles the "Cadastrar" (Register) button click.
  const handleRegister = () => {
    navigation.navigate('HomeScreen');
  };

  const navigation = useNavigation();
  const { colors } = useTheme();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container(colors)}>
      <Image
        source={require('../assets/Vector.png')}
        style={styles.fullScreenImage}
        accessibilityLabel="Desenho de uma pessoa com um gato"
      />

      <View style={styles.loginContainer(colors)}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/petvita2.png')}
            style={styles.logoImage}
            accessibilityLabel="Logo Pet Vita com desenhos de um cachorro e um gato"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label(colors)}>Nome</Text>
          <TextInput
            style={styles.input(colors)}
            placeholder="Nome"
            placeholderTextColor={colors.registerText}
            value={name}
            onChangeText={handleNameChange}
            maxLength={50} // Limit name to 50 characters
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label(colors)}>Email</Text>
          <TextInput
            style={styles.input(colors)}
            placeholder="Exemplo@gmail.com"
            placeholderTextColor={colors.registerText}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            maxLength={35} // Limit email to 100 characters
            autoCapitalize="none"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label(colors)}>Telefone</Text>
          <TextInput
            style={styles.input(colors)}
            placeholder="00 00000-0000"
            placeholderTextColor={colors.registerText}
            keyboardType="phone-pad"
            value={phone}
            onChangeText={handlePhoneChange}
            maxLength={12} // Limit phone to 11 digits
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label(colors)}>Senha</Text>
          <TextInput
            style={styles.input(colors)}
            placeholder="Senha"
            placeholderTextColor={colors.registerText}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            maxLength={20} // Limit password to 20 characters
          />
        </View>
        
        <TouchableOpacity
          onPress={handleRegister}
          style={styles.registerButton(colors)}
        >
          <Text style={styles.registerButtonText(colors)}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleBack}
          style={styles.backButton(colors)}
        >
          <Text style={styles.backButtonText(colors)}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
  registerButton: (colors) => ({
    width: '100%',
    height: 50,
    backgroundColor: colors.loginButton,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  }),
  registerButtonText: (colors) => ({
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

export default CadastroScreen;
