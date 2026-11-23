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
return 'Em recuperacao';
}
export default function App() {
const media = calcularMedia(aluno);
return (
<View style={styles.tela}>

<View style={styles.topo}>
<Text style={styles.titulo}>Boletim</Text>
</View>
<View style={styles.meio}>
<Text style={styles.linha}>Nome: {aluno.nome}</Text>
<Text style={styles.linha}>Turma: {aluno.turma}</Text>
<Text style={styles.linha}>Media: {media}</Text>
</View>
<View style={styles.rodape}>
<Text style={styles.situacao}>{situacao(media)}</Text>
</View>
</View>
);
}
const styles = StyleSheet.create({
tela: {
flex: 1, // ocupa a tela toda
backgroundColor: '#fff',
// flexDirection e column por padrao: topo, meio e rodape empilham
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
flex: 1, // o meio come todo o espaco que sobra
justifyContent: 'flex-start', // centraliza os dados na vertical
padding: 20,
gap: 8,
flexDirection: 'row',
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
color: '#1e7a46',
},
});