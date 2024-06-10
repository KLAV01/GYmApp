//import { styles } from '../../src/style';
import { Stack, useRouter } from 'expo-router';

// screens/PersonalTrainersList.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image, Pressable } from 'react-native';
import { db } from '@/app/src/firebase.config';
import { collection, getDocs } from 'firebase/firestore';
import { CardPersonal } from '@/components/CardPersonal';

export default function PersonalListScreen() {
  const [personalTrainers, setPersonalTrainers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPersonalTrainers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'personal'));
        const personalList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPersonalTrainers(personalList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching personal trainers: ", error);
        setLoading(false);
      }
    };

    fetchPersonalTrainers();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
  }

  const localizar = async (temp) => {
    alunos.map( (item) => {
      if(item.id == temp){
        setID(temp);
        setNome(item.nome);
        setEmail(item.email);
        setTelefone(item.telefone);
        setCidade(item.cidade);
        setObjetivo(item.objetivo);
      }
    })
  }

  async function update() {
    if (nome && email && telefone && objetivo && cidade) {
      try {
        updateDoc(doc(db, "aluno", id), {
          nome,
          email,
          telefone,
          objetivo,
          cidade,
        });
        listar();
        alert('Aluno atualizado com sucesso!');
      } catch (teste) {
        alert('Error');
      }
    } else {
      alert('Preencha todos os campos');
    }
  }

  async function deleteById() {
      try {
        deleteDoc(doc(db, "aluno", id));
        listar();
        alert('Aluno removido com sucesso!');
      } catch (teste) {
        alert('Error');
      }
  }

  return (
    <View style={styles.container}>
      {/* <FlatList style={{margin: 10}}
        data={personalTrainers}
        keyExtractor={(data) => data.id}
        renderItem={(data) => <CardPersonal item={data.item}/>}
        onEndReached={ () => null}  // recarregar mais dados ao chegar ao final da página
        onEndReachedThreshold={.8}
      /> */}
      <FlatList style={{margin: 10}}
        data={personalTrainers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable style={{flex:1, flexDirection: 'row', borderRadius: 20, overflow: "hidden", marginTop: 15}} onPress={ () => alert(item.id)}>
            <View style={{backgroundColor: '#fff', width: 100,  borderRadius: 4, top: 0,}}>
                <Image style={{width: 100, height: 100}} source={{uri:"https://img-cdn.hltv.org/playerbodyshot/EQuPdPSxo2xmXDwwoVRx4j.png?ixlib=java-2.1.0&w=400&s=a22c84e43ee55c164fbb59fbb35366a6"}}/>
            </View>
            <View style={{flex:1, backgroundColor: '#fff', width: '100%'}}>
                <Text style={{top: 20, left: 20, position: "absolute", fontWeight: "500"}}>{item.nome}</Text>
                <Text style={{top: 50, left: 20, position: "absolute"}}>{item.metas}</Text>
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
  cardPersonal:{
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
},
difficultyPosition: {
    right: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    backgroundColor: '#ccc',
    top: 0,
    position: "absolute",
  }
});
