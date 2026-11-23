
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.tela}>

      {/* CARTÃO DE PERFIL */}
      <View style={styles.cartao}>

        {/* FOTO */}
        <View style={styles.foto} />

        {/* NOME */}
        <Text style={styles.nome}>
          Ana Beatriz
        </Text>

        {/* DADOS */}
        <Text style={styles.dados}>
          Turma: 3M
        </Text>

        <Text style={styles.dados}>
          Idade: 17 anos
        </Text>

        <Text style={styles.dados}>
          Estudante
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  // CAIXA DE FORA
  tela: {
    flex: 1,
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // CARTÃO
  cartao: {
    backgroundColor: '#ffffff',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    gap: 12,
    width: 280,
  },

  // FOTO COLORIDA
  foto: {
    width: 110,
    height: 110,
    backgroundColor: '#6c4ab6',
    borderRadius: 55,
  },

  // NOME
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },

  // INFORMAÇÕES
  dados: {
    fontSize: 16,
    color: '#666666',
  },

});
