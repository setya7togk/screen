import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontSize, FontFamily, Border, Color, Padding } from "../GlobalStyles";

const LoginPage = () => {
  return (
    <View style={styles.loginPage}>
      <LinearGradient
        style={[styles.loginPageChild, styles.loginPageChildPosition]}
        locations={[0, 1]}
        colors={["#fff", "#8a4dd7"]}
      />
      <View style={styles.welcomeWrapper}>
        <Text style={styles.welcome}>{`Welcome,
`}</Text>
      </View>
      <View style={styles.solstice1RemovebgPreview1Parent}>
        <Image
          style={[
            styles.solstice1RemovebgPreview1Icon,
            styles.loginPageChildPosition,
          ]}
          contentFit="cover"
          source={require("../assets/solstice-1-removebgpreview-1.png")}
        />
        <Image
          style={styles.solstice1RemovebgPreview3Icon}
          contentFit="cover"
          source={require("../assets/solstice-1-removebgpreview-3.png")}
        />
        <Image
          style={styles.solstice1RemovebgPreview2Icon}
          contentFit="cover"
          source={require("../assets/solstice-1-removebgpreview-2.png")}
        />
      </View>
      <View style={styles.loginPageItem} />
      <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      <Text style={styles.toYourAccount}>to your account</Text>
      <View style={[styles.loginPageInner, styles.loginLayout]} />
      <View style={[styles.rectangleView, styles.loginLayout]} />
      <Text style={[styles.namenisn, styles.namenisnTypo]}>Name/NISN</Text>
      <Text style={[styles.passwornd, styles.namenisnTypo]}>Passwornd</Text>
      <View style={[styles.loginPageChild1, styles.loginLayout]} />
      <Text style={[styles.submit, styles.submitPosition]}>Submit</Text>
      <Image
        style={[styles.solsticeRemovebgPreview3Icon, styles.submitPosition]}
        contentFit="cover"
        source={require("../assets/solsticeremovebgpreview-3.png")}
      />
      <Image
        style={styles.solsticeRemovebgPreview4Icon}
        contentFit="cover"
        source={require("../assets/solsticeremovebgpreview-4.png")}
      />
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
  loginPageChildPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  loginTypo: {
    fontSize: FontSize.size_9xl,
    textAlign: "left",
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    height: 23,
  },
  loginLayout: {
    height: 50,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  namenisnTypo: {
    color: Color.colorDarkgray,
    left: 94,
    width: 112,
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    height: 23,
    position: "absolute",
  },
  submitPosition: {
    left: 150,
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
  loginPageChild: {
    borderTopLeftRadius: Border.br_31xl,
    borderTopRightRadius: Border.br_31xl,
    width: 390,
    backgroundColor: "transparent",
    height: 844,
  },
  welcome: {
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    color: Color.colorMidnightblue,
    height: 23,
    width: 115,
    left: 0,
    top: 0,
    position: "absolute",
  },
  welcomeWrapper: {
    top: 132,
    height: 23,
    width: 115,
    left: 35,
    position: "absolute",
  },
  solstice1RemovebgPreview1Icon: {
    width: 549,
    height: 549,
  },
  solstice1RemovebgPreview3Icon: {
    top: 316,
    left: 78,
    width: 309,
    height: 309,
    position: "absolute",
  },
  solstice1RemovebgPreview2Icon: {
    top: 148,
    left: 329,
    width: 486,
    height: 505,
    position: "absolute",
  },
  solstice1RemovebgPreview1Parent: {
    top: -245,
    left: -220,
    width: 815,
    height: 653,
    position: "absolute",
  },
  loginPageItem: {
    top: 251,
    shadowRadius: 8,
    elevation: 8,
    width: 325,
    height: 395,
    shadowOpacity: 1,
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 35,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_31xl,
  },
  login: {
    top: 274,
    left: 160,
    width: 69,
    color: Color.colorMidnightblue,
    fontSize: FontSize.size_9xl,
    position: "absolute",
  },
  toYourAccount: {
    top: 314,
    left: 139,
    width: 112,
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorMidnightblue,
    height: 23,
    position: "absolute",
  },
  loginPageInner: {
    top: 383,
    width: 260,
    backgroundColor: Color.colorGainsboro,
    left: 69,
    height: 50,
    borderRadius: Border.br_6xl,
  },
  rectangleView: {
    top: 449,
    width: 260,
    backgroundColor: Color.colorGainsboro,
    left: 69,
    height: 50,
    borderRadius: Border.br_6xl,
  },
  namenisn: {
    top: 399,
  },
  passwornd: {
    top: 462,
  },
  loginPageChild1: {
    top: 549,
    left: 105,
    backgroundColor: Color.colorMidnightblue,
    shadowRadius: 4,
    elevation: 4,
    width: 180,
    height: 50,
    borderRadius: Border.br_6xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  submit: {
    top: 556,
    color: Color.colorWhite,
    width: 108,
    fontSize: FontSize.size_9xl,
    textAlign: "left",
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    height: 23,
  },
  solsticeRemovebgPreview3Icon: {
    top: 574,
    width: 410,
    height: 410,
  },
  solsticeRemovebgPreview4Icon: {
    top: 599,
    left: -131,
    width: 281,
    height: 281,
    position: "absolute",
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
  loginPage: {
    overflow: "hidden",
    height: 844,
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_31xl,
  },
});

export default LoginPage;
