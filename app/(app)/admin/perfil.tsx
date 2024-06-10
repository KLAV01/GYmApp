import { FontFamily, Color, Padding, Border, FontSize } from "@/assets/GlobalStyles";
import { View, Text, TextInput, Pressable, Button, Alert, Image, ActivityIndicator } from 'react-native';
import { StyleSheet } from "react-native";
import { useState } from 'react';
import { db, auth } from '@/app/src/firebase.config';

import { signOut } from "firebase/auth";
import { useRouter } from "expo-router";

export default function PerfilScreen() {
  const [email, setEmail] = useState(auth.currentUser?.email);

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
      <Text style={styles.title}>Adminstrador</Text>

      <View style={styles.formGroup}>
        <Text style={{color:"#000"}}> Email </Text>
        <TextInput style={styles.formInput}
          value={email} onChangeText={setEmail} keyboardType="email-address"/>
      </View>

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
    backgroundColor: '#F7F6FA',
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
    backgroundColor: '#BBF246',
  }
});