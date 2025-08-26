import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';

const FavoriteScreen = () => {
  const navigation = useNavigation();
  const { colors, isDarkMode, toggleTheme } = useTheme();
  // Função para lidar com o clique no botão "Entrar".
  const handleLoginPress = () => {
    navigation.navigate('HomeScreen');
  };

  const handleRegisterPress = () => {

    navigation.navigate('Petscreen');
  };

  return (
    // Container principal com fundo e layout flexível.
    <View style={styles.container(colors)}>
      {/* Imagem de fundo referenciada pela variável `gatogrande`. */}
      <Image
        source={require('../assets/Vector.png')}
        style={styles.backgroundImage}
        accessibilityLabel="Desenho de uma pessoa com um gato"
      />

      {/* O texto do logo principal "Pet" e "Vita" */}
      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
          <Text style={styles.themeToggleText}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</Text>
        </TouchableOpacity>
        <Text style={styles.petText(colors)}>
          Pet
          <Text style={styles.vitaText(colors)}>
            Vita
          </Text>
        </Text>
      </View>

      {/* O contêiner principal com o efeito "frosted glass" */}
      <View style={styles.cardContainer(colors)}>
        {/* O conteúdo do card */}
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle(colors)}>
            Cuide de seu Pet
          </Text>
          {/* Botão de "Entrar" */}
          <TouchableOpacity
            onPress={handleLoginPress}
            style={styles.loginButton(colors)}
          >
            <Text style={styles.loginButtonText(colors)}>Entrar</Text>
          </TouchableOpacity>
          {/* Link para "Cadastre-se" */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Text style={styles.registerText(colors)}>
              Não tem uma Conta?
            </Text>
            <TouchableOpacity onPress={handleRegisterPress}>
              <Text style={styles.registerLink(colors)}>
                Cadastre-se
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (colors) => ({
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    padding: 16,
    position: 'relative',
    overflow: 'hidden',
  }),
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 1,
    zIndex: 1,
  },
  logoContainer: {
    textAlign: 'center',
    marginBottom: 32,
    zIndex: 10,
  },
  petText: (colors) => ({
    fontSize: 120,
    fontWeight: '800',
    color: colors.petText,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    lineHeight: 120,
  }),
  vitaText: (colors) => ({
    fontSize: 36,
    fontWeight: '500',
    color: colors.vitaText,
    marginLeft: 8,
    alignSelf: 'flex-end',
  }),
  cardContainer: (colors) => ({
    position: 'relative',
    zIndex: 20,
    width: '100%',
    maxWidth: 384,
    marginHorizontal: 'auto',
    padding: 24,
    backgroundColor: colors.cardBackground,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    overflow: 'hidden',
  }),
  cardContent: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  cardTitle: (colors) => ({
    fontSize: 24,
    fontWeight: '700',
    color: colors.cardTitle,
    marginBottom: 24,
  }),
  loginButton: (colors) => ({
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginBottom: 16,
    backgroundColor: colors.loginButton,
    borderRadius: 9999,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  loginButtonText: (colors) => ({
    fontSize: 18,
    fontWeight: '600',
    color: colors.loginButtonText,
  }),
  registerText: (colors) => ({
    fontSize: 14,
    color: colors.registerText,
  }),
  registerLink: (colors) => ({
    marginLeft: 4,
    fontWeight: '600',
    color: colors.registerLink,
  }),
  themeToggle: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 10,
    borderRadius: 10,
    zIndex: 30,
  },
  themeToggleText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default FavoriteScreen;
