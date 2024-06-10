import { Image, View, Text, Pressable } from 'react-native';
import { StyleSheet } from "react-native";
/* import { LinearGradient } from "expo-linear-gradient"; */
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { auth, db } from '@/app/src/firebase.config';
import { signOut } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';

export default function TreinoScreen() {
  const [id, setID] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState(auth.currentUser?.email);

  useEffect(() => {
    const fetchPersonalTrainers = async () => {
      try {
        const querySnapshot = await getDocs(query(collection(db, 'aluno'), where('email', '==', email)));
        const aluno = querySnapshot.docs[0].data();
        setID(querySnapshot.docs[0].id);
        setNome(aluno.nome);
      } catch (error) {
        console.error("Error fetching personal trainers: ", error);
      }
    };

    fetchPersonalTrainers();
  }, []);

  return (
    <View style={styles.agendauser}>

      {/* Academias */}
      <View style={styles.warmup}>
        <Text style={[styles.fastWarmup, styles.seeMore1Typo]}>Academias</Text>
        
        <View style={[styles.view, styles.viewLayout1]}>
          <View style={[styles.bg, styles.bgPosition]} />
          <Image style={[styles.imageIcon, styles.imageIconPosition]} source={require("@/assets/images/gym/image1.png")}/>
          <Text style={[styles.legExcercises, styles.legExcercisesTypo]}>M2</Text>
          <View style={[styles.minWrapper, styles.minWrapperSpaceBlock]}>
            <Text style={styles.min}>06:00 - 23:00</Text>
          </View>
          <View style={[styles.beginnerWrapper, styles.minWrapperSpaceBlock]}>
            <Text style={styles.min}>Musculação</Text>
          </View>
        </View>
        
        <View style={[styles.view1, styles.viewLayout1]}>
          <View style={[styles.bg, styles.bgPosition]} />
          <Image style={[styles.imageIcon, styles.imageIconPosition]} source={require("@/assets/images/gym/image2.png")}/>
          <Text style={[styles.legExcercises, styles.legExcercisesTypo]}>Iron Gym</Text>
          <View style={[styles.minWrapper, styles.minWrapperSpaceBlock]}>
            <Text style={styles.min}>06:00 - 00:00</Text>
          </View>
          <View style={[styles.beginnerWrapper, styles.minWrapperSpaceBlock]}>
            <Text style={styles.min}>Musculação</Text>
          </View>
        </View>
      </View>

      {/* Mais modalidades */}
      <View style={styles.challenge}>
        <Text style={[styles.challenge1, styles.exploreLayout]}>Mais modalidades</Text>
        
        <View style={[styles.challenge3, styles.challengeLayout]}>
          <View style={[styles.bg3, styles.challengeLayout]} />
          <Image style={[styles.pyramid11Icon, styles.iconLayout]} source={require("@/assets/images/gym/pyramid-11.png")} />
          <Text style={[styles.squatChallenge, styles.challengePosition]}>{`Zumba e Aeróbica`}</Text>
        </View>
        
        <View style={[styles.challenge2, styles.challengeLayout]}>
          <View style={[styles.bg4, styles.challengeLayout]} />
          <Image style={[styles.pyramid11Icon, styles.iconLayout]} source={require("@/assets/images/gym/ball-8.png")}/>
          <Text style={[styles.sprintChallenge, styles.sprintChallengeClr]}>{`Corrida de curta distância`}</Text>
        </View>

        <View style={[styles.challenge11, styles.challengeLayout]}>
          <View style={[styles.bg5, styles.challengeLayout]} />
          <Image style={[styles.pyramid11Icon, styles.iconLayout]} source={require("@/assets/images/gym/box-12.png")}/>
          <Text style={[styles.plankChallenge, styles.challengePosition]}>{`Alguma coisa aqui`}</Text>
        </View>

      </View>

      {/* Próximos treinos */}
      <View style={styles.bestForYou}>
        <Text style={[styles.fastWarmup, styles.seeMore1Typo]}>Próximos treinos de 
          <Text style={{fontWeight:600, color: '#384046'}}> {nome.split(' ')[0]}</Text>
        </Text>
        
        <View style={[styles.view2, styles.viewLayout]}>
          <View style={[styles.bg6, styles.viewLayout]} />
          <Image style={[styles.imageIcon2, styles.iconLayout]} source={require("@/assets/images/gym/image3.png")}/>
          <Text style={[styles.bellyFatBurner, styles.framePosition]}> Core </Text>
          <View style={[styles.minFrame, styles.framePosition]}>
            <Text style={styles.min}>07:00</Text>
          </View>
          <View style={[styles.beginnerFrame, styles.framePosition]}>
            <Text style={styles.min}>Camila</Text>
          </View>
        </View>

        <View style={[styles.view3, styles.viewLayout]}>
          <View style={[styles.bg6, styles.viewLayout]} />
          <Image style={[styles.imageIcon2, styles.iconLayout]} source={require("@/assets/images/gym/image5.png")}/>
          <Text style={[styles.bellyFatBurner, styles.framePosition]}>Pilates</Text>
          <View style={[styles.minFrame, styles.framePosition]}>
            <Text style={styles.min}>10:00</Text>
          </View>
          <View style={[styles.beginnerFrame, styles.framePosition]}>
            <Text style={styles.min}>Naiara</Text>
          </View>
        </View>

        <View style={[styles.view4, styles.viewPosition]}>
          <View style={[styles.bg6, styles.viewLayout]} />
          <Image style={[styles.imageIcon2, styles.iconLayout]} source={require("@/assets/images/gym/image4.png")}/>
          <Text style={[styles.bellyFatBurner, styles.framePosition]}>Corrida</Text>
          <View style={[styles.minFrame, styles.framePosition]}>
            <Text style={styles.min}>08:00</Text>
          </View>
          <View style={[styles.beginnerFrame, styles.framePosition]}>
            <Text style={styles.min}>Naiara</Text>
          </View>
        </View>

        <View style={[styles.view5, styles.viewPosition]}>
          <View style={[styles.bg6, styles.viewLayout]} />
          <Image style={[styles.imageIcon2, styles.iconLayout]} source={require("@/assets/images/gym/image6.png")}/>
          <Text style={[styles.bellyFatBurner, styles.framePosition]}>Força</Text>
          <View style={[styles.minFrame, styles.framePosition]}>
            <Text style={styles.min}>19:30</Text>
          </View>
          <View style={[styles.beginnerFrame, styles.framePosition]}>
            <Text style={styles.min}>Kaique</Text>
          </View>
        </View>
      </View>

      {/* Banner */}
      <View style={[styles.banner, styles.bannerLayout]}>
        <Image style={[styles.imageIcon6, styles.bannerLayout]} source={require("@/assets/images/gym/image7.png")}/>
        <View style={[styles.seeMore, styles.seeMorePosition]}>
          <Text style={[styles.seeMore1, styles.seeMore1Typo]}>Ver mais</Text>
          <Image style={styles.backIcon} source={require("@/assets/images/gym/back.png")}/>
        </View>
        <Text style={[styles.bestQuarantineWorkout, styles.seeMorePosition]}>Pratique exercícios físico</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  seeMore1Typo: {
    fontFamily: "@/assets/fontsLato-Bold",
    fontWeight: "700",
  },
  viewLayout1: {
    height: 80,
    width: 190,
    position: "absolute",
  },
  bgPosition: {
    backgroundColor: '#fff',
    borderRadius: 9,
    left: 0,
    top: 0,
  },
  imageIconPosition: {
    left: 7,
    top: 7,
  },
  legExcercisesTypo: {
    fontWeight: "600",
    textAlign: "left",
    color: "#192126",
    fontFamily: "@/assets/fontsLato-Bold",
  },
  minWrapperSpaceBlock: {
    paddingVertical: 2,
    paddingHorizontal: 6,
    flexDirection: "row",
    backgroundColor: "#f1f1f1",
    borderRadius: 3,
  },
  bg2Layout: {
    height: 64,
    width: 340,
    position: "absolute",
  },
  bg2Position: {
    backgroundColor: "#192126",
    left: 0,
    top: 0,
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  buttonexploreactiveLayout: {
    height: 36,
    width: 107,
    position: "absolute",
  },
  bg5Position: {
    backgroundColor: "#bbf246",
    left: 0,
    top: 0,
  },
  challengeTypo: {
    fontFamily: "@/assets/fontsLato-Light",
    fontWeight: "500",
  },
  exploreLayout: {
    lineHeight: 24,
    textAlign: "left",
  },
  challengeLayout: {
    height: 110,
    width: 110,
    position: "absolute",
  },
  iconLayout: {
    height: 72,
    width: 72,
    position: "absolute",
  },
  challengePosition: {
    left: 8,
    top: 54,
    lineHeight: 24,
    fontSize: 14,
    position: "absolute",
  },
  sprintChallengeClr: {
    color: "#fff",
    textAlign: "left",
  },
  viewLayout: {
    height: 86,
    width: 194,
    position: "absolute",
  },
  framePosition: {
    left: 87,
    position: "absolute",
  },
  viewPosition: {
    top: 134,
    height: 86,
    position: "absolute",
  },
  bannerLayout: {
    height: 180,
    width: 350,
    position: "absolute",
  },
  overlayPosition: {
    backgroundColor: "transparent",
    height: 180,
    left: 0,
    top: 0,
    position: "absolute",
  },
  seeMorePosition: {
    left: 26,
    position: "absolute",
  },
  fastWarmup: {
    textAlign: "left",
    color: "#192126",
    fontSize: 18,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
  },
  bg: {
    height: 80,
    width: 190,
    position: "absolute",
  },
  imageIcon: {
    width: 66,
    height: 66,
    position: "absolute",
  },
  legExcercises: {
    fontSize: 14,
    left: 81,
    position: "absolute",
    top: 8,
    fontWeight: "600",
  },
  min: {
    fontSize: 12,
    fontFamily: "@/assets/fontsLato-Regular",
    color: "rgba(25, 33, 38, 0.7)",
    textAlign: "left",
  },
  minWrapper: {
    top: 33,
    left: 81,
    position: "absolute",
  },
  beginnerWrapper: {
    top: 55,
    left: 81,
    position: "absolute",
  },
  view: {
    top: 38,
    left: 0,
  },
  view1: {
    left: 206,
    top: 38,
  },
  warmup: {
    top: 648,
    width: 396,
    height: 118,
    left: 20,
    position: "absolute",
  },
  bg2: {
    borderRadius: 32,
    height: 64,
    width: 340,
    position: "absolute",
  },
  buttonprofileIcon: {
    left: 286,
    top: 20,
    width: 24,
    position: "absolute",
  },
  buttonstatisticIcon: {
    left: 214,
    top: 20,
    width: 24,
    position: "absolute",
  },
  explore: {
    fontSize: 14,
    marginLeft: 4,
    lineHeight: 24,
    textAlign: "left",
    color: "#192126",
  },
  buttonexploreParent: {
    borderRadius: 43,
    paddingLeft: 16,
    paddingTop: 6,
    paddingRight: 19,
    paddingBottom: 6,
    flexDirection: "row",
    backgroundColor: "#bbf246",
    position: "absolute",
  },
  buttonexploreactiveInner: {
    left: 0,
    top: 0,
  },
  buttonexploreactive: {
    top: 14,
    left: 80,
  },
  buttonhomeIcon: {
    top: 21,
    left: 30,
    position: "absolute",
  },
  navigationBar: {
    top: 768,
    left: 25,
  },
  challenge1: {
    color: "#191d1a",
    fontFamily: "@/assets/fontsLato-Bold",
    fontWeight: "700",
    fontSize: 18,
    left: 0,
    top: 0,
    position: "absolute",
  },
  bg3: {
    backgroundColor: "#fff",
    borderRadius: 9,
    left: 0,
    top: 0,
  },
  pyramid11Icon: {
    top: 32,
    left: 38,
    opacity: 0.5,
    overflow: "hidden",
  },
  squatChallenge: {
    fontFamily: "@/assets/fontsLato-Light",
    fontWeight: "500",
    textAlign: "left",
    color: "#192126",
  },
  challenge3: {
    left: 252,
    top: 38,
  },
  bg4: {
    backgroundColor: "#192126",
    left: 0,
    top: 0,
    borderRadius: 9,
    width: 110,
  },
  sprintChallenge: {
    left: 8,
    top: 54,
    lineHeight: 24,
    fontSize: 14,
    position: "absolute",
    fontFamily: "@/assets/fontsLato-Light",
    fontWeight: "500",
  },
  challenge2: {
    left: 126,
    top: 38,
  },
  bg5: {
    backgroundColor: "#bbf246",
    left: 0,
    top: 0,
    borderRadius: 9,
    width: 110,
  },
  plankChallenge: {
    fontWeight: "600",
    textAlign: "left",
    color: "#192126",
    fontFamily: "@/assets/fontsLato-Bold",
  },
  challenge11: {
    top: 38,
    left: 0,
  },
  challenge: {
    top: 476,
    width: 362,
    height: 148,
    left: 20,
    position: "absolute",
  },
  bg6: {
    backgroundColor: "#fff",
    borderRadius: 9,
    left: 0,
    top: 0,
  },
  imageIcon2: {
    left: 7,
    top: 7,
  },
  bellyFatBurner: {
    fontWeight: "600",
    textAlign: "left",
    color: "#192126",
    fontFamily: "@/assets/fontsLato-Bold",
    fontSize: 14,
    top: 8,
  },
  minFrame: {
    top: 37,
    paddingVertical: 2,
    paddingHorizontal: 6,
    flexDirection: "row",
    backgroundColor: "#f1f1f1",
    borderRadius: 3,
  },
  beginnerFrame: {
    top: 59,
    paddingVertical: 3,
    paddingHorizontal: 6,
    backgroundColor: "#f1f1f1",
    borderRadius: 3,
    left: 87,
    flexDirection: "row",
  },
  view2: {
    top: 38,
    left: 0,
  },
  view3: {
    left: 210,
    top: 38,
  },
  view4: {
    width: 194,
    top: 134,
    left: 0,
  },
  view5: {
    width: 213,
    left: 210,
  },
  bestForYou: {
    top: 244,
    width: 423,
    height: 220,
    left: 20,
    position: "absolute",
  },
  imageIcon6: {
    left: 0,
    top: 0,
  },
  overlay: {
    borderRadius: 23,
    width: 350,
    backgroundColor: "transparent",
  },
  overlayText: {
    borderTopLeftRadius: 23,
    borderBottomLeftRadius: 23,
    width: 230,
  },
  seeMore1: {
    color: "#bbf246",
    fontSize: 14,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  backIcon: {
    top: 4,
    left: 64,
    width: 12,
    height: 12,
    position: "absolute",
    overflow: "hidden",
  },
  seeMore: {
    top: 133,
    width: 76,
    height: 17,
  },
  bestQuarantineWorkout: {
    top: 26,
    fontSize: 24,
    width: 210,
    color: "#fff",
    textAlign: "left",
    fontFamily: "@/assets/fontsLato-Bold",
    fontWeight: "700",
  },
  banner: {
    top: 40,
    left: 20,
  },
  agendauser: {
    backgroundColor: "#f7f6fa",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
  hello:{
    fontFamily: '@/assets/fontsLato-Bold' 
  }
});

