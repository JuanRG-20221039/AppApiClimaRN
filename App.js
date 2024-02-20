import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Clima from './Atomicos/Clima';
import { styles } from './Atomicos/Estilos';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Clima/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}