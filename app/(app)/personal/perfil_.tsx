import { FontFamily, Color, Padding, Border, FontSize } from "@/assets/GlobalStyles";
import { View, Text, TextInput, Pressable, Button, Alert, Image } from 'react-native';
import { StyleSheet } from "react-native";
import { useState } from 'react';
import { db, auth } from '@/app/src/firebase.config';

import { collection, addDoc } from 'firebase/firestore';
import Checkbox from 'expo-checkbox';
import { signOut } from "firebase/auth";
import { useRouter } from "expo-router";

export default function PerfilScreen() {
  const [foto, setFoto] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, settelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [metas, setmetas] = useState([]);

  // Deslogar da sessão | import signOut, auth e useRouter
  const router = useRouter();
  function logout(){
      signOut(auth)
      .then( () => alert('Desconectado com sucesso!'))
      .catch( (error) => {alert(error.message)})
      router.replace('/')
  }// Fim

  // 
  const handleSignup = async () => {
    if (nome && email && telefone && metas && cidade) {
      try {
        await addDoc(collection(db, 'personal'), {
          foto,
          nome,
          email,
          telefone,
          cidade,
          metas,
        });
        alert('Personal cadastrado com sucesso!');
      } catch (teste) {
        alert('Error');
      }
    } else {
      alert('Preencha todos os campos');
    }

  };

  // Opções para selecionar no checkbox
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  const toggleOption = (option) => {
    if (metas.includes(option)) {
      setmetas(metas.filter(item => item !== option));
    } else {
      setmetas([...metas, option]);
    }
  }; // Fim


  return (
    <View style={styles.container}>
      <Text style={styles.title} onPress={logout}>Cadastro de Aluno</Text>
      <TextInput
        style={styles.input}
        placeholder="Foto"
        value={foto}
        onChangeText={setFoto}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email} // não editável (pegar do login)
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Celular"
        value={telefone}
        onChangeText={settelefone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Cidade"
        value={cidade}
        onChangeText={setCidade}
      />
      <Text style={styles.subtitle}>Metas</Text>
      {options.map(index => (
        <View key={index} style={styles.checkboxContainer}>
          <Checkbox
            value={metas.includes(index)}
            onValueChange={() => toggleOption(index)}
          />
          <Text style={styles.label}>{index}</Text>
        </View>
        
      ))}
      <Button title="Cadastrar" onPress={handleSignup} color={'green'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    fontFamily: FontFamily.latoBold,
    backgroundColor: '#F7F6FA'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    marginLeft: 8,
  },
});