//import { styles } from '../../src/style';
import { Stack, router, useRouter } from 'expo-router';

// screens/PersonalTrainersList.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TextInput, Pressable, Image } from 'react-native';
import { db } from '@/app/src/firebase.config';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';

export default function PersonalListScreen() {
  const [id, setID] = useState('');
  const [nome, setNome] = useState('');
  const [bio, setBio] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [modalidade, setModalidade] = useState('');

  const [personals, setPersonals] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cadastrar novos personals
  const handleSignup = async () => {
    if (nome && bio && telefone && modalidade && cidade) {
      try {
        const docRef = await addDoc(collection(db, 'personal'), {
          nome,
          bio,
          telefone,
          modalidade,
          cidade,
        });
        listar();
        alert('Personal cadastrado com sucesso!');
      } catch (teste) {
        alert('Error');
      }
    } else {
      alert('Preencha todos os campos');
    }
  };

  useEffect(() => {
    const fetchPersonalTrainers = async () => {
      try {
        listar();
        setLoading(false);
      } catch (error) {
        console.error("Erro ao listar Personals: ", error);
        setLoading(false);
      }
    };

    fetchPersonalTrainers();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
  }

  async function listar(){
    const querySnapshot = await getDocs(collection(db, 'personal'));
    const personalList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPersonals(personalList);
  }

  const localizar = async (temp) => {
    personals.map( (item) => {
      if(item.id == temp){
        setID(temp);
        setNome(item.nome);
        setBio(item.bio);
        setTelefone(item.telefone);
        setCidade(item.cidade);
        setModalidade(item.modalidade);
      }
    })
  }

  async function update() {
    if (nome && bio && telefone && modalidade && cidade) {
      try {
        updateDoc(doc(db, "personal", id), {
          nome,
          bio,
          telefone,
          modalidade,
          cidade,
        });
        listar();
        alert('Personal atualizado com sucesso!');
      } catch (teste) {
        alert('Error');
      }
    } else {
      alert('Preencha todos os campos');
    }
  }

  async function deleteById() {
      try {
        deleteDoc(doc(db, "personal", id));
        listar();
        alert('Personal removido com sucesso!');
      } catch (teste) {
        alert('Error');
      }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Personal</Text>

      <View style={styles.formGroup}>
        <Text style={{color:"#000"}}> Nome </Text>
        <TextInput 
          placeholder={'Nome'} 
          style={styles.formInput}
          value={nome} onChangeText={setNome}/>
      </View>

      <View style={styles.formGroup}>
        <Text style={{color:"#000"}}> Bio </Text>
        <TextInput 
          placeholder={'Bio'} 
          style={styles.formInput}
          value={bio} onChangeText={setBio}/>
      </View>

      <View style={styles.formGroup}>
        <Text style={{color:"#000"}}> Modalidade </Text>
        <TextInput 
          placeholder='Modalidade' 
          style={styles.formInput}
          value={modalidade} onChangeText={setModalidade}/>
      </View>

      <View style={styles.formGroup}>
        <Text style={{color:"#000"}}> Telefone </Text>
        <TextInput 
          placeholder='Telefone' 
          style={styles.formInput}
          value={telefone} onChangeText={setTelefone}/>
      </View>

      <View style={styles.formGroup}>
        <Text style={{color:"#000"}}> Cidade </Text>
        <TextInput 
          placeholder='Cidade' 
          style={styles.formInput}
          value={cidade} onChangeText={setCidade}/>
      </View>
      
      <View style={{flexDirection:'row', justifyContent: 'space-evenly'}}>
        <Pressable onPress={handleSignup} style={styles.teste}>
          <Text style={{color: '#000', fontWeight: 600, fontSize: 16}}>Cadastrar</Text>
        </Pressable>
        <Pressable onPress={update} style={styles.teste}>
          <Text style={{color: '#000', fontWeight: 600, fontSize: 16}}>Editar</Text>
        </Pressable>
        <Pressable onPress={deleteById} style={styles.teste}>
          <Text style={{color: '#000', fontWeight: 600, fontSize: 16}}>Excluir</Text>
        </Pressable>
      </View>

      {/* <FlatList style={{margin: 10}}
        data={personals}
        keyExtractor={(data) => data.id}
        renderItem={(data) => <CardPersonal item={data.item} onPress={ () => alert('teste')}/>}
      /> */}
      <FlatList style={{margin: 10}}
        data={personals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable style={{flex:1, flexDirection: 'row', borderRadius: 20, overflow: "hidden", marginTop: 15}} onPress={ () => localizar(item.id)}>
            <View style={{backgroundColor: '#fff', width: 100,  borderRadius: 4, top: 0,}}>
                <Image style={{width: 100, height: 100}} source={require('@/assets/images/gym/image2.png')}/>
            </View>
            <View style={{flex:1, backgroundColor: '#fff', width: '100%'}}>
                <Text style={{top: 20, left: 20, position: "absolute", fontWeight: "500"}}>{item.nome}</Text>
                <Text style={{top: 50, left: 20, position: "absolute"}}>{item.modalidade}</Text>
                <View style={styles.difficultyPosition}>
                    <Text style={{color:'#fff'}}>{item.cidade}</Text>
                </View>
                <Text style={{top: 75, left: 20, position: "absolute"}}>{item.telefone}</Text>
            </View>
        </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: '#F7F6FA'
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
  item1: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
  },
  difficultyPosition: {
    right: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    backgroundColor: '#192126',
    top: 0,
    position: "absolute",
  },
  teste: {
    width: 120, height: 50, borderRadius: 20,
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
