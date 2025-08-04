import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>  </View>
      <Text style={styles.tituloPrincipal}> Título principal </Text>
      <Text style={styles.subtitulo}> Subtitulo </Text>
      <Text style={styles.saibaMais}> Este é num parágrafo </Text>
      <Text style={styles.saibaMais}> Saiba mais </Text>
      <View style={styles.box2}>  </View>
      <StatusBar style="auto" />
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
  tituloPrincipal: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginVertical: '20px'
  },
  subtitulo: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginVertical: '20px'
  },
  saibaMais: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginVertical: '20px'
  },
  box1: {
    width: '100%',
    height: '80px',
    backgroundColor: '#456789'
  },
  box2: {
    width: '100%',
    height: '80px',
     backgroundColor: '#456789'
  },
  box3: {
width: '100%',
    height: '80px',
     backgroundColor: '#456789'
  }

});
