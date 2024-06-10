import { View, Text, TextInput, Pressable } from 'react-native';
import { StyleSheet } from "react-native";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './src/firebase.config';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';

export default function HomeScreen() {

  const [userMail, setUserMail] = useState('');
  const [userPass, setUserPass] = useState('');
  const router = useRouter();

  function teste(){
    router.replace('(app)/aluno');
  }
  function newUser(){
    router.replace('newUser');
  }
  function openView(){
    signInWithEmailAndPassword(auth, userMail, userPass)
    .then((data) => {
      console.log(data.user);
      if(userMail === 'klav@gmail.com'){
        router.replace('(app)/admin/'); 
        return;
      }
      if(userMail.startsWith('personal')){
        router.replace('(app)/personal/'); 
        return;
      }
      router.replace('(app)/aluno/');
    })
    .catch( (lascou) => {
      const code = lascou.code;
      const msg = lascou.message;
      alert(code + ": "+ msg);
    })
  }

  return (
      //* Container
      <View style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />

        {/* Texto: GYmApp */}
        <Text style={{fontSize: 26, color:"white", alignSelf: 'center', top: 100, position: 'absolute'}}>
          <Text style={{color:"#BBF246", fontWeight: 700}}>GYm</Text>
          <Text style={{color:"#A0A4A8", fontWeight: 400}}>App</Text>
        </Text>
        
        {/* Box do Form */}
        <View style={styles.boxLogin}>

          <View style={styles.formGroup}>
            <Text style={{color:"white", alignSelf: 'center'}}> Email </Text>
            <TextInput placeholder='Email' style={styles.formInput}
              value={userMail} onChangeText={setUserMail}></TextInput>
          </View>

          <View style={styles.formGroup}>
            <Text style={{color:"white", alignSelf: 'center'}}> Senha </Text>
            <TextInput secureTextEntry={true} placeholder='Senha' style={{backgroundColor:"white", height: 50, borderRadius: 20, padding: 8, fontSize: 16}}
            value={userPass} onChangeText={setUserPass}></TextInput>
          </View>

        </View>

        <View style={{top: 350, gap: 10, width: '80%'}}>
    
          {/* Botão: Entrar */}
          <Pressable onPress={openView} style={styles.btn}>
            <Text style={{color: '#192126', fontWeight: 600, fontSize: 16}}>Entrar</Text>
          </Pressable>

          <Pressable>
            <Text style={{color: '#8B8F92', textAlign: 'center'}} onPress={newUser}> Criar conta</Text>
          </Pressable>

          {/* <Pressable>
            <Text style={{color: '#8B8F92', textAlign: 'center'}} onPress={teste}> Teste</Text>
          </Pressable> */}
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