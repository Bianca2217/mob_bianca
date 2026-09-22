import { StyleSheet, Text, View } from 'react-native';

const aluno = {
nome: "Bianca",
idade: 16,
cidade: "Cascavel"
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{aluno.nome}</Text>
      <Text>{aluno.idade}</Text>
      <Text>{aluno.cidade}</Text>
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
