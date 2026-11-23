
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

        <View style={styles.linha}>
          <Text style={styles.rotulo}>Nome:</Text>
          <Text style={styles.valor}>{aluno.nome}</Text>
        </View>

        <View style={styles.linha}>
          <Text style={styles.rotulo}>Turma:</Text>
          <Text style={styles.valor}>{aluno.turma}</Text>
        </View>

        <View style={styles.linha}>
          <Text style={styles.rotulo}>Média:</Text>
          <Text style={styles.valor}>{media.toFixed(2)}</Text>
        </View>

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
    padding: 20,
    gap: 15,
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  rotulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  valor: {
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
