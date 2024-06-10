import { View, Text, TextInput, Pressable } from 'react-native';
//import { styles } from '../../src/style';
import { StyleSheet } from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './src/firebase.config';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { addDoc, collection } from 'firebase/firestore';

export default function HomeScreen() {

  const [nome, setNome] = useState('');
  const [userMail, setUserMail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [userPassConfirm, setUserPassConfirm] = useState('');
  const router = useRouter();


  // Cadastrar novos alunos
  async function addUser(){
    if( nome && userMail && userPass && userPassConfirm){
      if(userPass !== userPassConfirm){
        alert('Senhas não são iguais');
        return;
      }else{
        if(userPass.length < 6 ){
          alert('A senha deve ter no mínimo 6 caracteres')
          return;
        }
        createUserWithEmailAndPassword(auth, userMail, userPass)
        .then( (data) => {
          const user = data.user;


          addDoc(collection(db, userMail.startsWith('personal')?'personal':'aluno'), {
            nome,
            email:userMail,
          });

          alert('Cadastro realizado com sucesso!');
        })
        .catch( (error) => {
          alert(error.message);
        })
        router.replace('/');
      }
    }else{
      alert('Preencha todos os campos');
      return;
    }
  }

  function voltar(){
    router.replace('/');
  }

  return (
      //* Container
      <View style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />

        {/* Texto: GYmApp */}
        <Text style={{fontSize: 26, color:"white", alignSelf: 'center', top: 100, position: 'absolute'}}>
          <Text style={{color:"#A0A4A8", fontWeight: 400}}>Novo </Text>
          <Text style={{color:"#BBF246", fontWeight: 700}}>Usuário</Text>
        </Text>
        
        {/* Box do Form */}
        <View style={styles.boxLogin}>

          <View style={styles.formGroup}>
            <Text style={{color:"white"}}> Nome </Text>
            <TextInput placeholder='Nome' style={styles.formInput}
              value={nome} onChangeText={setNome}></TextInput>
          </View>

          <View style={styles.formGroup}>
            <Text style={{color:"white"}}> Email </Text>
            <TextInput placeholder='Email' style={styles.formInput}
              value={userMail} onChangeText={setUserMail}></TextInput>
          </View>

          <View style={styles.formGroup}>
            <Text style={{color:"white"}}> Senha </Text>
            <TextInput secureTextEntry={true} placeholder='Senha (minímo 6 caracteres)' style={{backgroundColor:"white", height: 50, borderRadius: 20, padding: 8, fontSize: 16}}
            value={userPass} onChangeText={setUserPass}></TextInput>
          </View>

          <View style={styles.formGroup}>
            <Text style={{color:"white"}}> Confirmar Senha </Text>
            <TextInput secureTextEntry={true} placeholder='Confirme a senha' style={{backgroundColor:"white", height: 50, borderRadius: 20, padding: 8, fontSize: 16}}
            value={userPassConfirm} onChangeText={setUserPassConfirm}></TextInput>
          </View>

        </View>

        <View style={{top: 350, gap: 10, width: '80%'}}>
    
          {/* Botão: Entrar */}
          <Pressable onPress={addUser} style={styles.btn}>
            <Text style={{color: '#192126', fontWeight: 600, fontSize: 16}}>Criar conta</Text>
          </Pressable>

          <Pressable>
            <Text style={{color: '#8B8F92', textAlign: 'center'}} onPress={voltar}> Voltar</Text>
          </Pressable>

        </View>

      </View>
  );
}

export const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
      fontSize: 18,
      backgroundColor: '#384046'
    },

    boxLogin: {
      flex: 1, 
      justifyContent: 'center', 
      width: '80%', 
      gap: 20, 
      backgroundColor: '#192126', 
      borderRadius: 20, 
      padding: 15, 
      height: 400, 
      position: "absolute"
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