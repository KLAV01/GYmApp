import { FontFamily, Color, Padding, Border, FontSize } from "@/assets/GlobalStyles";
import { View, Text, TextInput, Pressable, Button, Alert, Image, ActivityIndicator } from 'react-native';
import { StyleSheet } from "react-native";
import { useEffect, useState } from 'react';
import { db, auth } from '@/app/src/firebase.config';

import { collection, addDoc, doc, getDoc, query, where, getDocs, updateDoc } from 'firebase/firestore';
import { signOut } from "firebase/auth";
import { useRouter } from "expo-router";

export default function PerfilScreen() {
  const [id, setID] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState(auth.currentUser?.email);
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [bio, setBio] = useState('');
  const [modalidade, setModalidade] = useState('');

  useEffect(() => {
    const fetchPersonalTrainers = async () => {
      try {
        const querySnapshot = await getDocs(query(collection(db, 'personal'), where('email', '==', email)));
        const personal = querySnapshot.docs[0].data();
        setID(querySnapshot.docs[0].id);
        setNome(personal.nome);
        setTelefone(personal.telefone);
        setCidade(personal.cidade);
        setModalidade(personal.modalidade);
        setBio(personal.bio);
      } catch (error) {
        console.error("Error fetching personal trainers: ", error);
      }
    };

    fetchPersonalTrainers();
  }, []);
 
  // Editar novos personals
  async function editar() {
    if (nome && email && telefone && modalidade && cidade) {
      try {
        updateDoc(doc(db, "personal", id), {
          nome,
          telefone,
          modalidade,
          bio,
          cidade,
        });
        alert('Personal atualizado com sucesso!');
      } catch (teste) {
        alert('Error');
      }
    } else {
      alert('Preencha todos os campos');
    }
  }

  // Deslogar da sessão | import signOut, auth e useRouter
  const router = useRouter();
  function logout(){
      signOut(auth)
      .then( () => {}) //alert('Desconectado com sucesso!'))
      .catch( (error) => {alert(error.message)})
      router.replace('/')
  }// Fim

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal</Text>

      <View style={styles.formGroup}>
        <Text style={{color:"#000"}}> Nome </Text>
        <TextInput 
          placeholder={'Nome'} 
          style={styles.formInput}
          value={nome} onChangeText={setNome}/>
      </View>

      <View style={styles.formGroup}>
        <Text style={{color:"#000"}}> Email </Text>
        <TextInput style={styles.formInput}
        editable={false}
          value={email} onChangeText={setEmail} keyboardType="email-address"/>
      </View>

      <View style={styles.formGroup}>
        <Text style={{color:"#000"}}> Modalidade </Text>
        <TextInput 
          placeholder='Modalidade' 
          style={styles.formInput}
          value={modalidade} onChangeText={setModalidade}/>
      </View>

      <View style={styles.formGroup}>
        <Text style={{color:"#000"}}> Biografia </Text>
        <TextInput 
          placeholder='Biografia' 
          style={styles.formInput}
          value={bio} onChangeText={setBio}/>
      </View>

      <View style={styles.formGroup}>
        <Text style={{color:"#000"}}> Telefone </Text>
        <TextInput 
          placeholder='Telefone' 
          style={styles.formInput}
          value={telefone} onChangeText={setTelefone} keyboardType="phone-pad"/>
      </View>

      <View style={styles.formGroup}>
        <Text style={{color:"#000"}}> Cidade </Text>
        <TextInput 
          placeholder='Cidade' 
          style={styles.formInput}
          value={cidade} onChangeText={setCidade}/>
      </View>
      
      <Pressable onPress={editar} style={styles.btn}>
        <Text style={{color: '#fff', fontWeight: 600, fontSize: 16, fontFamily: FontFamily.poppinsSemiBold,}}>Editar</Text>
      </Pressable>

      <Pressable>
        <Text style={{color: '#8B8F92', textAlign: 'center'}} onPress={logout}> Sair</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    fontFamily: FontFamily.latoBold,
    backgroundColor: '#BBF246',
    gap: 10
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
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
  formGroup:{
    gap: 10
  },
  formInput:{
    backgroundColor:"#fff", 
    height: 50, 
    borderRadius: 20, 
    padding: 8, 
    fontSize: 16
  },
  btn:{
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: '#000',
  }
});