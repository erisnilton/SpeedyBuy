import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput, SafeAreaView, TouchableOpacity,  } from 'react-native';
import Logo from './src/assets/images/logo.png';


export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.image} source={Logo} ></Image>
        
        <TextInput style={styles.input} placeholder="Digite seu email"/>
        <TextInput style={styles.input} placeholder="Digite sua senha"/>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.Text}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ButtonAccount}>
          <Text >Cadastre-se</Text>
        </TouchableOpacity>

 
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 120,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 48,
    backgroundColor: '#38B6FF',
    borderRadius: 5,
    marginTop: 10,
  },

  ButtonAccount: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 48,
    backgroundColor: 'transparent',
    borderRadius: 5,
    marginTop: 10,
  },

  Text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
