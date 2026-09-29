import { StyleSheet, Text, View } from 'react-native';

const eu = {
nome: "Bianca",
idade: 16,
cidade: "Cascavel",
nota1: 9.5,
nota2: 9.0
};

let media;

function calcularMedia(eu) {
return (eu.nota1 + eu.nota2) / 2;
}

function situacao(media) {
if (media >= 6) {
return "Aprovado";
}
return "Em recuperacao";
}

export default function App() {
  return (
    <View style={styles.container}>
     {eu.nome}
      {eu.idade}
      {eu.cidade}
      {eu.nota1}
      {eu.nota2}
      {calcularMedia(eu)}
     {situacao(media)}
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
