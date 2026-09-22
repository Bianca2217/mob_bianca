import { StyleSheet, Text, View } from 'react-native';

const eu = {
nome: "Bianca",
idade: 16,
cidade: "Cascavel",
nota1: 9.5,
nota2: 9.0
};

function calcularMedia(eu) {
return (eu.nota1 + eu.nota2) / 2;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{eu.nome}</Text>
      <Text>{eu.idade}</Text>
      <Text>{eu.cidade}</Text>
      <Text>{eu.nota1}</Text>
      <Text>{eu.nota2}</Text>
      <Text>{calcularMedia(eu)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
