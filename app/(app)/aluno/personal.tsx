//import { styles } from '../../src/style';
import { Stack, router, useRouter } from 'expo-router';

// screens/PersonalTrainersList.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Pressable, Image, TextInput } from 'react-native';
import { db } from '@/app/src/firebase.config';
import { collection, getDocs } from 'firebase/firestore';
import { CardPersonal } from '@/components/CardPersonal';

export default function PersonalListScreen() {
  const [personalTrainers, setPersonalTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(personalTrainers);


  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
        const newData = personalTrainers.filter(item => {
        const itemData = item.nome ? item.nome.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(personalTrainers);
    }
  };

  useEffect(() => {
    const fetchPersonalTrainers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'personal'));
        const personalList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPersonalTrainers(personalList); 
        setFilteredData(personalList);
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

  const openView = async (id) => {
    //router.setParams({id: id})
    router.push('/aluno/bio?id='+id);
  }

  return (
    <View style={styles.container}>

      <View style={{height: 50, marginTop: 25}}>
        <Text style={{marginLeft:15, fontSize:12, fontWeight: 600}}>Escolha um 🔥</Text>
        <Text style={{marginLeft:15, fontSize:24, fontWeight: 600}}>Profissional </Text>
      </View>
      <View style={{height: 50}}>
        <Image style={[styles.icSearchIcon]} source={require("@/assets/images/gym/ic-search.png")} />
        <TextInput style={{backgroundColor:'#fff', borderRadius:10, height:50, padding:10, width:'90%', alignSelf:'center', fontSize: 16}}
          value={search}
          placeholder="Search"
          onChangeText={(text) => handleSearch(text)}
        />
      </View>
      <View style={{marginTop: 25, height: 0}}>
        <Text style={{marginLeft: 15, fontSize:18, fontWeight: 600}}>Resultado </Text>
      </View>

      <FlatList style={{margin: 10}}
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable style={{flex:1, flexDirection: 'row', borderRadius: 20, overflow: "hidden", marginTop: 15}} onPress={ () => openView(item.id)}>
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
    backgroundColor: '#F7F6FA',
    gap: 20
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
  icSearchIcon: {
    top: 12,
    right: 42,
    position: "absolute",
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  pesquisar: {
    left: 46,
    /* fontFamily: FontFamily.latoRegular,
    color: Color.colorGray_500, */
    top: 16,
    /* fontSize: FontSize.size_sm, */
    textAlign: "left",
    position: "absolute",
  },
});
