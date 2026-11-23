import { StyleSheet, Text, View } from 'react-native';

const aluno = {
  nome: 'Ana Beatriz',
  turma: '3M',
  nota1: 7.5,
  nota2: 9.0,
};

function calcularMedia(a) {
  return (a.nota1 + a.nota2) / 2;
}

function situacao(media) {
  if (media >= 6) {
    return 'Aprovado';
  }
  return 'Em recuperação';
}

export default function App() {
  const media = calcularMedia(aluno);

  return (
    <View style={styles.tela}>

      {/* TOPO */}
      <View style={styles.topo}>
        <Text style={styles.titulo}>Boletim</Text>
      </View>

      {/* MEIO */}
      <View style={styles.meio}>
        <Text style={styles.linha}>Nome: {aluno.nome}</Text>
        <Text style={styles.linha}>Turma: {aluno.turma}</Text>
        <Text style={styles.linha}>Média: {media}</Text>
      </View>

      {/* RODAPÉ */}
      <View style={styles.rodape}>
        <Text style={styles.situacao}>
          {situacao(media)}
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#fff',
  },

  topo: {
    padding: 20,
    backgroundColor: '#6c4ab6',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },

  meio: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 8,
  },

  linha: {
    fontSize: 16,
  },

  rodape: {
    backgroundColor: '#0033fe',
    padding: 30,
    alignItems: 'center',
  },

  situacao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});