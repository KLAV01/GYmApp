import { useEffect, useState} from 'react';
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { Border, FontFamily, Color, FontSize } from "@/assets/GlobalStyles2";
import { router, useLocalSearchParams, useRouter } from "expo-router";
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/app/src/firebase.config';

const DemoView = () => {
  const {id} = useLocalSearchParams<{ id: string }>();
  const [nome, setNome] = useState('');
  const [bio, setBio] = useState('');
  //const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [modalidade, setModalidade] = useState('');

  useEffect(() => {
    const fetchPersonalTrainers = async () => {
      try {        
        const docRef = doc(db, "personal", id+"");
        const personal = (await getDoc(docRef)).data();
        setNome(personal.nome);
        //setTelefone(personal.telefone);
        setCidade(personal.cidade);
        setBio(personal.bio);
        setModalidade(personal.modalidade);
      } catch (error) {
        console.error("Error fetching personal trainers: ", error);
      }
    };
    fetchPersonalTrainers();
  }, );

  return (
    <View style={styles.demoview}>
      
      <Pressable onPress={() => {alert('Solicitação enviada com sucesso!'); router.replace('/aluno/personal')}} style={styles.btn}>
        <Text style={{color: '#000', fontWeight: 600, fontSize: 16, fontFamily: FontFamily.poppinsSemiBold,}}>Quero ser aluno</Text>
      </Pressable>

      <View style={styles.video}>
        <Text style={[styles.theLowerAbdomen, styles.textTypo]}>{bio}</Text>
        <Text style={[styles.lowerBodyTraining, styles.time1Clr]}>{nome}</Text>
        <Text style={[styles.cidade, styles.textTypo]}>{cidade}</Text>
        <Image style={styles.imageIcon2} source={require("@/assets/images/gym/image2.png")} />
        <View style={[styles.detail, styles.baseLayout]}>
          <View style={[styles.base, styles.baseBorder]} />
          <View style={[styles.time, styles.timeLayout]}>
            <View style={[styles.timeChild, styles.timeLayout]} />
            <Text style={[styles.time1, styles.time1Clr]}>Experiência</Text>
            <Text style={[styles.min, styles.minTypo]}>5 anos</Text>
          </View>
          <Image style={[styles.icTimeIcon, styles.iconLayout]} source={require("@/assets/images/gym/ic-time.png")}/>
          <View style={[styles.calories, styles.timeLayout]}>
            <View style={[styles.timeChild, styles.timeLayout]} />
            <Text style={[styles.time1, styles.time1Clr]}>Modalidade</Text>
            <Text style={[styles.min, styles.minTypo]}>{modalidade}</Text>
          </View>
          <Image style={[styles.icBurnIcon, styles.iconLayout]} source={require("@/assets/images/gym/ic-burn.png")}/>
          <View style={[styles.divider, styles.baseBorder]} />
        </View>
      </View>

      <View style={[styles.navigation, styles.iconLayout]}>
        <Text style={[styles.workout, styles.minTypo]}>Personal</Text>
        <Pressable onPress={()=> router.replace('/aluno/personal')}>
          <Image style={[styles.backIcon, styles.iconLayout]} source={require("@/assets/images/gym/back1.png")}/>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewLayout: {
    height: 74,
    width: 350,
    position: "absolute",
  },
  bgPosition: {
    borderRadius: Border.br_mini,
    top: 0,
    left: 0,
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.latoRegular,
    textAlign: "left",
    position: "absolute",
  },
  textPosition: {
    top: 42,
    left: 74,
  },
  bg3Layout: {
    height: 56,
    width: 350,
    position: "absolute",
  },
  bg3Position: {
    backgroundColor: Color.colorYellowgreen,
    top: 0,
    left: 0,
  },
  workoutClr: {
    color: Color.colorGray_100,
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  time1Clr: {
    color: Color.colorGray_200,
    textAlign: "left",
    position: "absolute",
  },
  baseLayout: {
    height: 64,
    width: 258,
  },
  baseBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  timeLayout: {
    height: 32,
    position: "absolute",
  },
  minTypo: {
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    position: "absolute",
  },
  bg: {
    backgroundColor: Color.colorDarkslategray,
    height: 74,
    width: 350,
    position: "absolute",
  },
  imageIcon: {
    top: 8,
    left: 8,
    width: 58,
    height: 58,
    position: "absolute",
  },
  jumpingJacks: {
    top: 14,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.latoLight,
    fontWeight: "500",
    lineHeight: 22,
    fontSize: FontSize.size_base,
    left: 74,
  },
  text: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_300,
    top: 42,
    left: 74,
  },
  icPlayIcon: {
    top: 23,
    left: 300,
    width: 28,
    height: 28,
    position: "absolute",
  },
  view: {
    top: 46,
    left: 0,
  },
  view1: {
    top: 136,
    left: 0,
  },
  text2: {
    color: "#747474",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  view2: {
    top: 226,
    left: 0,
  },
  text4: {
    fontSize: FontSize.size_base,
  },
  text5: {
    fontSize: FontSize.size_xs,
  },
  text3: {
    left: 328,
    lineHeight: 30,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.latoLight,
    fontWeight: "500",
    top: 0,
  },
  rounds1: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    color: Color.colorWhite,
    textAlign: "left",
    top: 0,
    left: 0,
  },
  rounds: {
    top: 584,
    height: 300,
    width: 350,
    left: 20,
    position: "absolute",
  },
  bg3: {
    borderRadius: 32,
    height: 56,
    width: 350,
    position: "absolute",
  },
  letsWorkout: {
    left: 122,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    top: 16,
    textAlign: "left",
    position: "absolute",
  },
  button: {
    top: 764,
    left: 20,
  },
  theLowerAbdomen: {
    top: 382,
    fontSize: 15,
    color: "rgba(25, 29, 26, 0.5)",
    lineHeight: 22,
    left: 0,
    width: 350,
  },
  cidade: {
    top: 342,
    fontSize: 12,
    color: "#5E6468",
    lineHeight: 22,
    left: 0,
    width: 350,
  },
  lowerBodyTraining: {
    top: 306,
    fontSize: 24,
    fontWeight: "800",
    fontFamily: FontFamily.latoBlack,
    left: 0,
  },
  imageIcon2: {
    height: 250,
    top: 0,
    left: 0,
    width: 350,
    position: "absolute",
    borderRadius: 30,
  },
  overlay: {
    top: 116,
    borderBottomRightRadius: Border.br_4xl,
    borderBottomLeftRadius: Border.br_4xl,
    height: 134,
    backgroundColor: "transparent",
    left: 0,
    width: 350,
    position: "absolute",
  },
  base: {
    backgroundColor: "rgba(25, 33, 38, 0.3)",
    borderColor: Color.colorYellowgreen,
    borderWidth: 0.5,
    height: 64,
    width: 258,
    borderRadius: Border.br_mini,
    top: 0,
    left: 0,
  },
  timeChild: {
    borderRadius: Border.br_8xs,
    width: 32,
    backgroundColor: Color.colorYellowgreen,
    top: 0,
    left: 0,
  },
  time1: {
    top: 2,
    fontSize: FontSize.size_3xs,
    lineHeight: 10,
    left: 40,
    fontFamily: FontFamily.poppinsRegular,
  },
  min: {
    top: 19,
    lineHeight: 12,
    color: Color.colorYellowgreen,
    left: 40,
    fontSize: FontSize.size_xs,
  },
  time: {
    left: 16,
    width: 82,
    top: 16,
  },
  icTimeIcon: {
    top: 20,
    width: 24,
    height: 24,
    overflow: "hidden",
    left: 20,
  },
  calories: {
    left: 158,
    width: 84,
    top: 16,
  },
  icBurnIcon: {
    top: 21,
    left: 162,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  divider: {
    top: 13,
    left: 128,
    borderColor: "rgba(255, 255, 255, 0.25)",
    borderRightWidth: 1,
    width: 1,
    height: 39,
  },
  detail: {
    top: 218,
    left: 46,
    position: "absolute",
  },
  video: {
    top: 104,
    height: 440,
    width: 350,
    left: 20,
    position: "absolute",
  },
  workout: {
    left: 141,
    color: Color.colorGray_100,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    top: 0,
  },
  backIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
    top: 0,
    left: 0,
  },
  navigation: {
    top: 40,
    width: 209,
    left: 20,
  },
  demoview: {
    backgroundColor: "#f7f6fa",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
  btn:{
    top: 700,
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

export default DemoView;
