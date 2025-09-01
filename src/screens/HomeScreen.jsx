import React from 'react';
import { Image } from 'react-native';

// Simulação do hook useTheme para o código ser executável
const useTheme = () => ({
  colors: {
    background: '#FEFBF6',
    textPrimary: '#3C3633',
    textSecondary: '#7D7C7C',
    primary: '#7F57F1',
    cardBackground: '#FFF7F1',
    cardShadow: 'rgba(0, 0, 0, 0.05)',
    navBackground: '#FFFFFF',
  }
});

const HomeScreen = () => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <div style={styles.container}>
      {/* Cabeçalho */}
      <header style={styles.header}>
        <h1 style={styles.title}>Olá Usuário!</h1>
        <p style={styles.subtitle}>Bom Dia!</p>
      </header>

      {/* Card Principal */}
      <div style={styles.promoCard}>
        <div style={styles.promoTextContainer}>
          <h2 style={styles.promoTitle}>Visite nosso Website</h2>
          <button style={styles.promoButton}>Clique Aqui</button>
        </div>
        {/* Placeholder para a imagem do card */}
        <Image source={require('../assets/DogCat.png')} style={styles.promoImage} />
      </div>

      {/* Seção de Categorias */}
      <section style={styles.categorySection}>
        <div style={styles.sectionHeader}>
          <h3 style={styles.sectionTitle}>Category</h3>
        </div>
        <div style={styles.categoryGrid}>
          <CategoryButton icon="pets" label="Pets" colors={colors} />
          <CategoryButton icon="care" label="Cuidados" colors={colors} />
          <CategoryButton icon="consultation" label="Consulta" colors={colors} />
          <CategoryButton icon="profile" label="Perfil" colors={colors} />
        </div>
      </section>

      {/* Seção de Consultas */}
      <section style={styles.consultasSection}>
        <div style={styles.sectionHeader}>
          <h3 style={styles.sectionTitle}>Consultas</h3>
          <a href="#" style={styles.seeAllLink}>Ver Todas</a>
        </div>
        <div style={styles.consultaCard}>
           {/* source={require('../assets/doctor_avatar.png')} */}
          <div style={styles.doctorImagePlaceholder}></div>
          <div style={styles.doctorInfo}>
            <p style={styles.doctorName}>drh. Ariyo Hartono</p>
            <p style={styles.doctorSpec}>Dentista Veterinario</p>
          </div>
          <div style={styles.arrowIcon}>&gt;</div>
        </div>
      </section>

      {/* Barra de Navegação Inferior */}
      <footer style={styles.navBar}>
        <Image source={require('../assets/Pets.png')} style={styles.navIcon} />
        <Image source={require('../assets/MaoBranca.png')} style={styles.navIcon} />
        <div style={styles.navCenterButton}>
          <Image source={require('../assets/Vector.png')} style={styles.navCenterIcon} />
        </div>
        <Image source={require('../assets/Veterinario.png')} style={styles.navIcon} />
        <Image source={require('../assets/Configuracao.png')} style={styles.navIcon} />
      </footer>
    </div>
  );
};

// Componente para os botões de categoria
const CategoryButton = ({ icon, label, colors }) => {
  const styles = getStyles(colors);
  let imageSource;
  switch (icon) {
    case 'pets':
      imageSource = require('../assets/Pets.png');
      break;
    case 'care':
      imageSource = require('../assets/MaoBranca.png');
      break;
    case 'consultation':
      imageSource = require('../assets/Veterinario.png');
      break;
    case 'profile':
      imageSource = require('../assets/Configuracao.png');
      break;
    default:
      imageSource = null;
  }

  return (
    <div style={styles.categoryButton}>
      <div style={styles.categoryIconContainer}>
        {imageSource && <Image source={imageSource} style={styles.categoryIcon} />}
      </div>
      <p style={styles.categoryLabel}>{label}</p>
    </div>
  );
};


// Função para gerar os estilos
const getStyles = (colors) => ({
  container: {
    fontFamily: "'Inter', sans-serif",
    backgroundColor: colors.background,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    padding: '24px',
    boxSizing: 'border-box',
    position: 'relative',
    paddingBottom: '100px', // Espaço para a navbar
  },
  header: {
    marginBottom: '24px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: colors.textPrimary,
    margin: 0,
  },
  subtitle: {
    fontSize: '18px',
    color: colors.textSecondary,
    margin: 0,
  },
  promoCard: {
    backgroundColor: colors.primary,
    borderRadius: '24px',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#FFFFFF',
    marginBottom: '32px',
  },
  promoTextContainer: {
    maxWidth: '50%',
  },
  promoTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '0 0 16px 0',
  },
  promoButton: {
    backgroundColor: '#FFFFFF',
    color: colors.primary,
    border: 'none',
    borderRadius: '16px',
    padding: '10px 20px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  promoImage: {
    width: '150px',
    height: '120px',
    borderRadius: '16px',
    resizeMode: 'contain',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: colors.textPrimary,
    margin: 0,
  },
  seeAllLink: {
    fontSize: '14px',
    color: colors.primary,
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  categoryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    marginBottom: '32px',
  },
  categoryButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  categoryIconContainer: {
    backgroundColor: colors.primary,
    borderRadius: '20px',
    width: '64px',
    height: '64px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '8px',
  },
  categoryIcon: {
    width: '32px',
    height: '32px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  categoryLabel: {
    fontSize: '14px',
    color: colors.textSecondary,
    fontWeight: '500',
    margin: 0,
  },
  consultasSection: {
      marginBottom: '32px',
  },
  consultaCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: '24px',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: `0 4px 12px ${colors.cardShadow}`,
  },
  doctorImagePlaceholder: {
    width: '60px',
    height: '60px',
    borderRadius: '16px',
    backgroundColor: colors.primary,
    marginRight: '16px',
  },
  doctorInfo: {
    flexGrow: 1,
  },
  doctorName: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: colors.textPrimary,
    margin: '0 0 4px 0',
  },
  doctorSpec: {
    fontSize: '14px',
    color: colors.textSecondary,
    margin: 0,
  },
  arrowIcon: {
    backgroundColor: colors.primary,
    color: '#FFFFFF',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '80px',
    backgroundColor: colors.navBackground,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)',
    borderTopLeftRadius: '24px',
    borderTopRightRadius: '24px',
  },
  navIcon: {
    width: '28px',
    height: '28px',
    backgroundColor: colors.textSecondary,
    opacity: 0.7
  },
  navCenterButton: {
    backgroundColor: colors.primary,
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'translateY(-30px)',
    boxShadow: `0 4px 12px ${colors.primary}55`,
  },
  navCenterIcon: {
    width: '32px',
    height: '32px',
    backgroundColor: '#FFFFFF',
  },
});

export default HomeScreen;
