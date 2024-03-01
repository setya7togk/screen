import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const FirstPage = () => {
  return (
    <View style={styles.firstPage}>
      <LinearGradient
        style={styles.firstPageChild}
        locations={[0, 1]}
        colors={["#240052", "#5100b8"]}
      />
      <Image
        style={styles.solsticeRemovebgPreview2Icon}
        contentFit="cover"
        source={require("../assets/solsticeremovebgpreview-2.png")}
      />
      <LinearGradient
        style={styles.firstPageItem}
        locations={[0, 1]}
        colors={["#fff", "#8a4dd7"]}
      />
      <Image
        style={styles.solsticeRemovebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/solsticeremovebgpreview-1.png")}
      />
      <View style={[styles.iconKeyboardArrowRightWrapper, styles.iconLayout1]}>
        <View style={[styles.iconKeyboardArrowRight, styles.iconLayout1]}>
          <View
            style={[styles.iconKeyboardArrowRightChild, styles.iconLayout1]}
          />
          <Text style={styles.login}>LOGIN</Text>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </View>
      </View>
      <View style={styles.membersParent}>
        <Text style={[styles.members, styles.membersTypo]}>Members</Text>
        <Text style={[styles.hello, styles.helloTypo]}>{`Hello,
`}</Text>
      </View>
      <Text style={[styles.topLeaderboard, styles.membersTypo]}>
        Top Leaderboard
      </Text>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text style={[styles.presence, styles.helloTypo]}>Presence</Text>
        <Text style={[styles.thisMonth, styles.thTypo]}>This Month</Text>
      </View>
      <Image
        style={[styles.firstPageInner, styles.firstPageInnerPosition]}
        contentFit="cover"
        source={require("../assets/group-3.png")}
      />
      <LinearGradient
        style={[styles.rectangleLineargradient, styles.dateChildShadowBox]}
        locations={[0, 1]}
        colors={["#ac77f0", "#efe2ff"]}
      />
      <View style={styles.thParent}>
        <Text style={[styles.th, styles.thTypo]}>4th</Text>
        <Text style={[styles.th1, styles.stTypo]}>5th</Text>
        <Text style={[styles.th2, styles.stTypo]}>3th</Text>
        <Text style={[styles.nd, styles.thTypo]}>2nd</Text>
        <Text style={[styles.st, styles.stTypo]}>1st</Text>
      </View>
      <View style={[styles.tetta, styles.tettaLayout]}>
        <View style={[styles.tettaChild, styles.tettaLayout]} />
        <View style={[styles.tettaItem, styles.itemPosition]} />
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
        <View style={[styles.veeParent, styles.parentPosition]}>
          <Text style={[styles.vee, styles.veeTypo]}>Tetta</Text>
          <Text style={[styles.vee1, styles.textTypo1]}>98%</Text>
          <Text
            style={[styles.pelajarmultimedia, styles.pelajarmultimediaTypo]}
          >
            Pelajar/Multimedia
          </Text>
        </View>
      </View>
      <View style={[styles.bebi, styles.tettaLayout]}>
        <View style={[styles.tettaChild, styles.tettaLayout]} />
        <View style={[styles.bebiItem, styles.itemPosition]} />
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <View style={[styles.bebiParent, styles.parentPosition]}>
          <Text style={[styles.bebi1, styles.veeTypo]}>Bebi</Text>
          <Text style={[styles.text, styles.textTypo1]}>82%</Text>
          <Text
            style={[styles.pelajarmultimedia1, styles.pelajarmultimediaTypo]}
          >
            Pelajar/Multimedia
          </Text>
        </View>
      </View>
      <View style={[styles.keke, styles.tettaLayout]}>
        <View style={[styles.tettaChild, styles.tettaLayout]} />
        <View style={[styles.kekeItem, styles.itemPosition]} />
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group2.png")}
        />
        <View style={[styles.bebiParent, styles.parentPosition]}>
          <Text style={[styles.keke1, styles.veeTypo]}>Keke</Text>
          <Text style={[styles.text1, styles.textTypo1]}>56%</Text>
          <Text
            style={[styles.pelajarmultimedia, styles.pelajarmultimediaTypo]}
          >
            Pelajar/Multimedia
          </Text>
        </View>
      </View>
      <View style={[styles.sinyo, styles.tettaLayout]}>
        <View style={[styles.tettaChild, styles.tettaLayout]} />
        <View style={[styles.sinyoItem, styles.itemPosition]} />
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group3.png")}
        />
        <View style={[styles.veeParent, styles.parentPosition]}>
          <Text style={[styles.sinyo1, styles.veeTypo]}>Sinyo</Text>
          <Text style={[styles.text2, styles.textTypo1]}>38%</Text>
          <Text
            style={[styles.pelajarmultimedia, styles.pelajarmultimediaTypo]}
          >
            Pelajar/Multimedia
          </Text>
        </View>
      </View>
      <View style={[styles.bayu, styles.tettaLayout]}>
        <View style={[styles.tettaChild, styles.tettaLayout]} />
        <View style={[styles.bayuItem, styles.itemPosition]} />
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group4.png")}
        />
        <View style={[styles.bayuParent, styles.parentPosition]}>
          <Text style={[styles.bebi1, styles.veeTypo]}>Bayu</Text>
          <Text style={[styles.text3, styles.textTypo1]}>17%</Text>
          <Text
            style={[styles.pelajarmultimedia1, styles.pelajarmultimediaTypo]}
          >
            Pelajar/Multimedia
          </Text>
        </View>
      </View>
      <View style={[styles.date, styles.dateLayout]}>
        <View style={[styles.dateChild, styles.dateLayout]} />
        <Text style={[styles.text4, styles.textTypo]}>0</Text>
        <Text style={[styles.text5, styles.textTypo]}>10</Text>
        <Text style={[styles.text6, styles.textTypo]}>20</Text>
        <Text style={[styles.text7, styles.textTypo]}>30</Text>
      </View>
      <View style={[styles.statusBar, styles.barFlexBox]}>
        <View style={[styles.time, styles.barFlexBox]}>
          <Image
            style={styles.timeIcon}
            contentFit="cover"
            source={require("../assets/time.png")}
          />
        </View>
        <View style={[styles.notchFrame, styles.notchLayout]}>
          <Image
            style={[styles.notchIcon, styles.notchLayout]}
            contentFit="cover"
            source={require("../assets/notch.png")}
          />
        </View>
        <View style={[styles.time, styles.barFlexBox]}>
          <Image
            style={[styles.receptionIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/reception.png")}
          />
          <Image
            style={[styles.wiFiIcon, styles.iconSpaceBlock]}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.batteryIcon, styles.iconSpaceBlock]}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
        </View>
      </View>
      <View style={[styles.homeBar, styles.barFlexBox]}>
        <View style={styles.rectangle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: 95,
    height: 30,
    position: "absolute",
  },
  membersTypo: {
    fontFamily: FontFamily.urbanistBold,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  helloTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.urbanistBold,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  thTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.urbanistBold,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  firstPageInnerPosition: {
    top: 372,
    position: "absolute",
  },
  dateChildShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  stTypo: {
    left: 5,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.urbanistBold,
    textAlign: "left",
    color: Color.colorMidnightblue,
    fontWeight: "700",
    position: "absolute",
  },
  tettaLayout: {
    height: 50,
    width: 275,
    position: "absolute",
  },
  itemPosition: {
    backgroundColor: Color.colorMidnightblue,
    height: 50,
    top: 0,
    left: 0,
    position: "absolute",
    borderRadius: Border.br_31xl,
  },
  parentPosition: {
    left: 63,
    top: 8,
    height: 32,
    position: "absolute",
  },
  veeTypo: {
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    fontFamily: FontFamily.urbanistBold,
    textAlign: "left",
    fontWeight: "700",
    top: 0,
    left: 0,
    position: "absolute",
  },
  textTypo1: {
    top: 7,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    fontFamily: FontFamily.urbanistBold,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  pelajarmultimediaTypo: {
    fontFamily: FontFamily.urbanistLight,
    fontWeight: "300",
    fontSize: FontSize.size_5xs,
    top: 22,
    color: Color.colorWhite,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  dateLayout: {
    height: 28,
    width: 240,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.urbanistBold,
    textAlign: "left",
    fontWeight: "700",
    top: 4,
    position: "absolute",
  },
  barFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  notchLayout: {
    width: 172,
    overflow: "hidden",
  },
  iconLayout: {
    height: 12,
    width: 18,
  },
  iconSpaceBlock: {
    marginLeft: 8,
    overflow: "hidden",
  },
  firstPageChild: {
    top: 47,
    height: 276,
    backgroundColor: "transparent",
    width: 390,
    left: 0,
    position: "absolute",
  },
  solsticeRemovebgPreview2Icon: {
    top: 116,
    left: -112,
    width: 301,
    height: 134,
    position: "absolute",
  },
  firstPageItem: {
    top: 214,
    borderTopLeftRadius: Border.br_31xl,
    height: 630,
    borderTopRightRadius: Border.br_31xl,
    backgroundColor: "transparent",
    width: 390,
    left: 0,
    position: "absolute",
  },
  solsticeRemovebgPreview1Icon: {
    top: -169,
    left: 59,
    width: 496,
    height: 531,
    position: "absolute",
  },
  iconKeyboardArrowRightChild: {
    top: 0,
    height: 30,
    left: 0,
    backgroundColor: Color.colorWhite,
    width: 95,
    borderRadius: Border.br_31xl,
  },
  login: {
    left: 19,
    fontSize: 15,
    fontFamily: FontFamily.poppinsBold,
    width: 63,
    height: 22,
    opacity: 0.8,
    textAlign: "left",
    fontWeight: "700",
    top: 4,
    color: Color.colorMidnightblue,
    position: "absolute",
  },
  vectorIcon: {
    height: "45.33%",
    width: "8.42%",
    top: "26.67%",
    right: "13.68%",
    bottom: "28%",
    left: "77.89%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconKeyboardArrowRight: {
    top: 0,
    height: 30,
    left: 0,
  },
  iconKeyboardArrowRightWrapper: {
    top: 111,
    left: 274,
    height: 30,
  },
  members: {
    top: 21,
    height: 23,
    color: Color.colorWhite,
    width: 115,
    left: 0,
  },
  hello: {
    width: 56,
    height: 18,
    left: 2,
    color: Color.colorWhite,
    top: 0,
  },
  membersParent: {
    top: 98,
    left: 21,
    height: 44,
    width: 115,
    position: "absolute",
  },
  topLeaderboard: {
    top: 240,
    left: 39,
    width: 197,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    color: Color.colorMidnightblue,
    height: 30,
  },
  groupChild: {
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 505,
    width: 346,
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_31xl,
  },
  presence: {
    top: 25,
    left: 36,
    color: Color.colorMidnightblue,
  },
  thisMonth: {
    top: 28,
    left: 235,
    color: Color.colorGray_100,
  },
  rectangleParent: {
    top: 286,
    height: 505,
    width: 346,
    left: 23,
    position: "absolute",
  },
  firstPageInner: {
    left: 119,
    width: 192,
    height: 333,
  },
  rectangleLineargradient: {
    borderBottomLeftRadius: Border.br_26xl,
    width: 37,
    height: 419,
    top: 372,
    position: "absolute",
    left: 23,
    shadowRadius: 4,
    borderTopRightRadius: Border.br_31xl,
    backgroundColor: "transparent",
  },
  th: {
    top: 186,
    left: 2,
    color: Color.colorMidnightblue,
  },
  th1: {
    top: 248,
  },
  th2: {
    top: 124,
  },
  nd: {
    top: 62,
    color: Color.colorMidnightblue,
    left: 0,
  },
  st: {
    top: 0,
  },
  thParent: {
    top: 411,
    left: 27,
    height: 267,
    width: 29,
    position: "absolute",
  },
  tettaChild: {
    backgroundColor: Color.colorPlum,
    top: 0,
    left: 0,
    width: 275,
    borderRadius: Border.br_31xl,
  },
  tettaItem: {
    width: 267,
  },
  maskGroupIcon: {
    top: 2,
    left: 8,
    width: 46,
    height: 45,
    position: "absolute",
  },
  vee: {
    width: 61,
  },
  vee1: {
    left: 154,
    width: 32,
  },
  pelajarmultimedia: {
    width: 72,
  },
  veeParent: {
    width: 186,
    height: 32,
  },
  tetta: {
    top: 396,
    left: 66,
    width: 275,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  bebiItem: {
    width: 247,
  },
  bebi1: {
    width: 42,
  },
  text: {
    left: 159,
    width: 30,
  },
  pelajarmultimedia1: {
    width: 65,
  },
  bebiParent: {
    width: 189,
    height: 32,
  },
  bebi: {
    top: 458,
    left: 66,
    width: 275,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  kekeItem: {
    width: 164,
  },
  keke1: {
    width: 48,
  },
  text1: {
    left: 156,
    width: 33,
  },
  keke: {
    top: 520,
    left: 66,
    width: 275,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  sinyoItem: {
    width: 135,
  },
  sinyo1: {
    width: 55,
  },
  text2: {
    left: 157,
    width: 29,
  },
  sinyo: {
    top: 582,
    left: 66,
    width: 275,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  bayuItem: {
    width: 83,
  },
  text3: {
    left: 160,
    width: 27,
  },
  bayuParent: {
    width: 187,
    height: 32,
  },
  bayu: {
    top: 644,
    left: 66,
    width: 275,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  dateChild: {
    borderRadius: Border.br_16xl,
    backgroundColor: Color.colorMediumpurple,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
    left: 0,
  },
  text4: {
    left: 17,
  },
  text5: {
    left: 79,
  },
  text6: {
    left: 150,
  },
  text7: {
    left: 205,
  },
  date: {
    top: 716,
    left: 97,
  },
  timeIcon: {
    width: 40,
    height: 13,
    overflow: "hidden",
  },
  time: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorGray_200,
    flex: 1,
  },
  notchIcon: {
    height: 32,
  },
  notchFrame: {
    justifyContent: "center",
    flexDirection: "row",
    width: 172,
    height: 47,
    backgroundColor: Color.colorGray_200,
  },
  receptionIcon: {
    overflow: "hidden",
  },
  wiFiIcon: {
    height: 12,
    width: 18,
  },
  batteryIcon: {
    width: 28,
    height: 13,
  },
  statusBar: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    height: 47,
    backgroundColor: Color.colorGray_200,
    left: "0%",
    right: "0%",
    top: 0,
    position: "absolute",
    width: "100%",
  },
  rectangle: {
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorBlack,
    width: 134,
    height: 5,
  },
  homeBar: {
    top: 810,
    backgroundColor: Color.colorGray_300,
    height: 34,
    paddingTop: Padding.p_smi,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  firstPage: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_31xl,
  },
});

export default FirstPage;
