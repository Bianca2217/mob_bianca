import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.tela}>
      <View style={styles.caixa1} />
      <View style={styles.caixa2} />
      <View style={styles.caixa3} />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
  },

  caixa1: {
    flex: 1,
    backgroundColor: '#ff0000',
  },

  caixa2: {
    flex: 2,
    backgroundColor: '#00ff00',
  },

  caixa3: {
    flex: 1,
    backgroundColor: '#0000ff',
  },
});