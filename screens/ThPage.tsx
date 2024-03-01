import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const ThPage = () => {
  return (
    <View style={styles.thPage}>
      <LinearGradient
        style={styles.thPageChild}
        locations={[0, 1]}
        colors={["#9159da", "#fff"]}
      />
      <View style={styles.solstice1RemovebgPreview4Parent}>
        <Image
          style={styles.solstice1RemovebgPreview4Icon}
          contentFit="cover"
          source={require("../assets/solstice-1-removebgpreview-4.png")}
        />
        <Image
          style={styles.solsticeRemovebgPreview5Icon}
          contentFit="cover"
          source={require("../assets/solsticeremovebgpreview-5.png")}
        />
        <Image
          style={styles.solsticeRemovebgPreview6Icon}
          contentFit="cover"
          source={require("../assets/solsticeremovebgpreview-6.png")}
        />
      </View>
      <Text style={styles.presence}>Presence</Text>
      <View style={[styles.thPageItem, styles.pagePosition]} />
      <View style={[styles.thPageInner, styles.pagePosition]} />
      <Image
        style={[styles.groupIcon, styles.pagePosition]}
        contentFit="cover"
        source={require("../assets/group-12.png")}
      />
      <View style={styles.dateParent}>
        <Text style={[styles.date, styles.noTypo]}>Date</Text>
        <Text style={[styles.status, styles.noTypo]}>Status</Text>
        <Text style={[styles.action, styles.noTypo]}>Action</Text>
        <Text style={[styles.no, styles.noTypo]}>No</Text>
      </View>
      <Text style={[styles.msTetta, styles.noTypo]}>Ms. Tetta</Text>
      <Text style={[styles.instansi, styles.roleTypo]}>Instansi</Text>
      <Text style={[styles.role, styles.roleTypo]}>Role</Text>
      <View style={styles.lineView} />
      <Image
        style={styles.iconPerson}
        contentFit="cover"
        source={require("../assets/-icon-person.png")}
      />
      <View style={styles.iconPhotoCameraParent}>
        <Image
          style={[styles.iconPhotoCamera, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/-icon-photo-camera.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>1.</Text>
        <Text style={[styles.text1, styles.text1Typo]}>01/03/2024</Text>
        <Text style={[styles.notPresent, styles.text1Typo]}>Not Present</Text>
      </View>
      <View style={[styles.iconDoneParent, styles.iconLayout1]}>
        <Image
          style={[styles.iconDone, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/-icon-done.png")}
        />
        <Text style={[styles.text2, styles.textTypo]}>2.</Text>
        <Text style={[styles.text3, styles.text3Typo]}>29/02/2024</Text>
        <Text style={[styles.present, styles.text3Typo]}>Present</Text>
      </View>
      <View style={[styles.iconDoneGroup, styles.iconLayout1]}>
        <Image
          style={[styles.iconDone, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/-icon-done.png")}
        />
        <Text style={[styles.text2, styles.textTypo]}>3.</Text>
        <Text style={[styles.text3, styles.text3Typo]}>28/02/2024</Text>
        <Text style={[styles.present, styles.text3Typo]}>Present</Text>
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
  pagePosition: {
    width: 325,
    left: 35,
    position: "absolute",
  },
  noTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    position: "absolute",
  },
  roleTypo: {
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    right: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorMidnightblue,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    left: 0,
    position: "absolute",
  },
  text1Typo: {
    top: 6,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorMidnightblue,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout1: {
    width: "71.79%",
    height: "3.08%",
    position: "absolute",
  },
  text3Typo: {
    top: 8,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorMidnightblue,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
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
  thPageChild: {
    borderTopLeftRadius: Border.br_31xl,
    borderTopRightRadius: Border.br_31xl,
    width: 390,
    backgroundColor: "transparent",
    left: 0,
    top: 0,
    position: "absolute",
    height: 844,
  },
  solstice1RemovebgPreview4Icon: {
    top: 645,
    width: 309,
    height: 367,
    left: 0,
    position: "absolute",
  },
  solsticeRemovebgPreview5Icon: {
    top: 13,
    left: 341,
    width: 217,
    height: 217,
    position: "absolute",
  },
  solsticeRemovebgPreview6Icon: {
    left: 92,
    width: 185,
    height: 185,
    top: 0,
    position: "absolute",
  },
  solstice1RemovebgPreview4Parent: {
    top: -43,
    left: -114,
    width: 558,
    height: 1012,
    position: "absolute",
  },
  presence: {
    top: 80,
    left: 33,
    fontSize: FontSize.size_6xl,
    width: 108,
    height: 30,
    textAlign: "left",
    color: Color.colorMidnightblue,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    position: "absolute",
  },
  thPageItem: {
    top: 129,
    borderRadius: Border.br_mini,
    shadowRadius: 8,
    elevation: 8,
    height: 613,
    shadowOpacity: 1,
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 325,
    left: 35,
    backgroundColor: Color.colorWhite,
  },
  thPageInner: {
    top: 127,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    backgroundColor: Color.colorMidnightblue,
    shadowRadius: 4,
    elevation: 4,
    height: 82,
    shadowOpacity: 1,
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 325,
    left: 35,
  },
  groupIcon: {
    top: 178,
    height: 564,
    width: 325,
    left: 35,
  },
  date: {
    left: 54,
    top: 0,
  },
  status: {
    left: 147,
    top: 0,
  },
  action: {
    left: 251,
    top: 0,
  },
  no: {
    left: 0,
    top: 0,
  },
  dateParent: {
    top: 183,
    left: 44,
    width: 303,
    height: 22,
    position: "absolute",
  },
  msTetta: {
    top: 142,
    left: 87,
  },
  instansi: {
    top: 135,
    left: 287,
  },
  role: {
    top: 156,
    left: 295,
  },
  lineView: {
    top: 153,
    left: 264,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderTopWidth: 1,
    width: 86,
    height: 1,
    position: "absolute",
  },
  iconPerson: {
    height: "3.32%",
    width: "7.18%",
    top: "16.11%",
    right: "79.49%",
    bottom: "80.57%",
    left: "13.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPhotoCamera: {
    height: "100%",
    width: "8.99%",
    bottom: "0%",
    left: "91.01%",
  },
  text: {
    top: 2,
  },
  text1: {
    left: 37,
  },
  notPresent: {
    left: 136,
  },
  iconPhotoCameraParent: {
    height: "2.96%",
    width: "71.28%",
    top: "25.36%",
    right: "15.9%",
    bottom: "71.68%",
    left: "12.82%",
    position: "absolute",
  },
  iconDone: {
    height: "96.15%",
    width: "8.93%",
    bottom: "3.85%",
    left: "91.07%",
  },
  text2: {
    top: 4,
  },
  text3: {
    left: 37,
  },
  present: {
    left: 147,
  },
  iconDoneParent: {
    top: "29.15%",
    right: "15.38%",
    bottom: "67.77%",
    left: "12.82%",
  },
  iconDoneGroup: {
    top: "33.77%",
    right: "15.13%",
    bottom: "63.15%",
    left: "13.08%",
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
  thPage: {
    borderRadius: Border.br_31xl,
    overflow: "hidden",
    height: 844,
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default ThPage;
