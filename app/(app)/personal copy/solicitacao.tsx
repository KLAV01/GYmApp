import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, Padding, FontFamily, Color, FontSize } from "@/assets/GlobalStyles";

const PedidosPersonalView = () => {
  return (
    <View style={styles.pedidospersonalview}>
      <View style={styles.rounds}>
        <View style={[styles.view, styles.viewLayout1]}>
          <View style={[styles.bg, styles.viewLayout1]} />
          <Image
            style={styles.imageIcon}
            source={require("@/assets/images/gym/image8.png")}
          />
          <Text style={[styles.jumpingJacks, styles.text3Typo]}>
            Jumping Jacks
          </Text>
          <Text style={[styles.text, styles.minTypo]}>00:30</Text>
          <Image
            style={styles.icPlayIcon}
            source={require("@/assets/images/gym/ic-play.png")}
          />
        </View>
        <View style={[styles.view1, styles.viewLayout1]}>
          <View style={[styles.bg, styles.viewLayout1]} />
          <Image
            style={styles.imageIcon}
            source={require("@/assets/images/gym/iamge.png")}
          />
          <Text style={[styles.jumpingJacks, styles.text3Typo]}>Squats</Text>
          <Text style={[styles.text, styles.minTypo]}>01:00</Text>
          <Image
            style={styles.icPlayIcon}
            source={require("@/assets/images/gym/ic-play.png")}
          />
        </View>
        <View style={[styles.view2, styles.viewLayout1]}>
          <View style={[styles.bg, styles.viewLayout1]} />
          <Image
            style={styles.imageIcon}
            source={require("@/assets/images/gym/image9.png")}
          />
          <Text style={[styles.jumpingJacks, styles.text3Typo]}>
            Backward Lunge
          </Text>
          <Text style={[styles.text2, styles.textPosition]}>00:30</Text>
          <Image
            style={styles.icPlayIcon}
            source={require("@/assets/images/gym/ic-play.png")}
          />
        </View>
        <Text style={[styles.text3, styles.text3Typo]}>
          <Text style={styles.text4}>1</Text>
          <Text style={styles.text5}>/8</Text>
        </Text>
        <Text style={[styles.agenda, styles.agendaTypo]}>Agenda</Text>
      </View>
      <View style={[styles.navigation, styles.backIconLayout]}>
        <Text style={[styles.solicitao, styles.solicitaoPosition]}>
          Solicitação
        </Text>
        <Image
          style={[styles.backIcon, styles.backIconLayout]}
          contentFit="cover"
          source={require("@/assets/images/gym/back1.png")}
        />
      </View>
      <View style={styles.bestForYou}>
        <Text style={[styles.novosAlunos, styles.solicitaoPosition]}>
          Novos alunos
        </Text>
        <View style={[styles.view3, styles.viewLayout]}>
          <View style={[styles.bg3, styles.viewLayout]} />
          <Image
            style={styles.imageIcon2}
            source={require("@/assets/images/gym/image3.png")}
          />
          <Text style={styles.bellyFatBurner}>Belly fat burner</Text>
          <View style={[styles.minWrapper, styles.wrapperPosition]}>
            <Text style={[styles.min, styles.minTypo]}>10 min</Text>
          </View>
          <View style={[styles.beginnerWrapper, styles.wrapperPosition]}>
            <Text style={[styles.min, styles.minTypo]}>Beginner</Text>
          </View>
        </View>
        <View style={[styles.view4, styles.viewLayout]}>
          <View style={[styles.bg3, styles.viewLayout]} />
          <Image
            style={styles.imageIcon2}
            source={require("@/assets/images/gym/image4.png")}
          />
          <Text style={styles.bellyFatBurner}>Lose Fat</Text>
          <View style={[styles.minWrapper, styles.wrapperPosition]}>
            <Text style={[styles.min, styles.minTypo]}>10 min</Text>
          </View>
          <View style={[styles.beginnerWrapper, styles.wrapperPosition]}>
            <Text style={[styles.min, styles.minTypo]}>Beginner</Text>
          </View>
        </View>
        <View style={[styles.view5, styles.viewPosition]}>
          <View style={[styles.bg3, styles.viewLayout]} />
          <Image
            style={styles.imageIcon2}
            source={require("@/assets/images/gym/image5.png")}
          />
          <Text style={styles.bellyFatBurner}>Plank</Text>
          <View style={[styles.minWrapper, styles.wrapperPosition]}>
            <Text style={[styles.min, styles.minTypo]}>5 min</Text>
          </View>
          <View style={[styles.beginnerWrapper, styles.wrapperPosition]}>
            <Text style={[styles.min, styles.minTypo]}>Expert</Text>
          </View>
        </View>
        <View style={[styles.view6, styles.viewPosition]}>
          <View style={[styles.bg3, styles.viewLayout]} />
          <Image
            style={styles.imageIcon2}
            source={require("@/assets/images/gym/image6.png")}
          />
          <Text style={styles.bellyFatBurner}>Build Whider Biceps</Text>
          <View style={[styles.minWrapper, styles.wrapperPosition]}>
            <Text style={[styles.min, styles.minTypo]}>30 min</Text>
          </View>
          <View style={[styles.beginnerWrapper, styles.wrapperPosition]}>
            <Text style={[styles.min, styles.minTypo]}>Intermediate</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewLayout1: {
    height: 74,
    left: 0,
    width: 350,
    position: "absolute",
  },
  text3Typo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.latoLight,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  minTypo: {
    fontFamily: FontFamily.latoRegular,
    textAlign: "left",
  },
  textPosition: {
    top: 42,
    left: 74,
    position: "absolute",
  },
  agendaTypo: {
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    left: 0,
  },
  backIconLayout: {
    height: 24,
    position: "absolute",
  },
  solicitaoPosition: {
    color: Color.colorGray_100,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  viewLayout: {
    height: 86,
    width: 194,
    position: "absolute",
  },
  wrapperPosition: {
    paddingHorizontal: Padding.p_7xs,
    flexDirection: "row",
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_10xs,
    left: 87,
    position: "absolute",
  },
  viewPosition: {
    top: 134,
    height: 86,
    position: "absolute",
  },
  bg: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorDarkslategray,
    top: 0,
  },
  imageIcon: {
    left: 8,
    width: 58,
    height: 58,
    top: 8,
    position: "absolute",
  },
  jumpingJacks: {
    top: 14,
    lineHeight: 22,
    textAlign: "left",
    fontSize: FontSize.size_base,
    left: 74,
    fontFamily: FontFamily.latoLight,
  },
  text: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_300,
    top: 42,
    left: 74,
    position: "absolute",
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
  },
  view1: {
    top: 136,
  },
  text2: {
    fontFamily: FontFamily.poppinsRegular,
    color: "#747474",
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  view2: {
    top: 226,
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
    textAlign: "left",
    top: 0,
  },
  agenda: {
    fontSize: 20,
    color: Color.colorGray_200,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  rounds: {
    top: 348,
    height: 300,
    width: 350,
    left: 20,
    position: "absolute",
  },
  solicitao: {
    left: 130,
    lineHeight: 24,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
  },
  backIcon: {
    width: 24,
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  navigation: {
    top: 40,
    width: 220,
    left: 20,
    height: 24,
  },
  novosAlunos: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    left: 0,
  },
  bg3: {
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorWhite,
    top: 0,
    left: 0,
  },
  imageIcon2: {
    top: 7,
    left: 7,
    width: 72,
    height: 72,
    position: "absolute",
  },
  bellyFatBurner: {
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    left: 87,
    color: Color.colorGray_100,
    fontFamily: FontFamily.latoBold,
    textAlign: "left",
    top: 8,
    position: "absolute",
  },
  min: {
    color: Color.colorGray_400,
    fontSize: FontSize.size_xs,
  },
  minWrapper: {
    top: 37,
    paddingVertical: Padding.p_11xs,
  },
  beginnerWrapper: {
    top: 59,
    paddingVertical: Padding.p_10xs,
  },
  view3: {
    top: 38,
    height: 86,
    left: 0,
  },
  view4: {
    left: 210,
    top: 38,
    height: 86,
  },
  view5: {
    width: 194,
    top: 134,
    left: 0,
  },
  view6: {
    width: 213,
    left: 210,
  },
  bestForYou: {
    top: 96,
    left: 33,
    width: 423,
    height: 220,
    position: "absolute",
  },
  pedidospersonalview: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default PedidosPersonalView;
