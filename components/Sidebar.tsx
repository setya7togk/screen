import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Sidebar = () => {
  return (
    <View style={styles.sidebarLayout1}>
      <LinearGradient
        style={[styles.sidebarChild, styles.sidebarLayout1]}
        locations={[0, 1]}
        colors={["#c6a8ed", "#dec5ff"]}
      />
      <Image
        style={styles.sidebarItem}
        contentFit="cover"
        source={require("../assets/group-10.png")}
      />
      <Image
        style={[styles.sidebarInner, styles.sidebarLayout]}
        contentFit="cover"
        source={require("../assets/line-13.png")}
      />
      <Image
        style={[styles.lineIcon, styles.sidebarLayout]}
        contentFit="cover"
        source={require("../assets/line-14.png")}
      />
      <Image
        style={[styles.sidebarChild1, styles.sidebarLayout]}
        contentFit="cover"
        source={require("../assets/line-14.png")}
      />
      <Text style={[styles.account, styles.outTypo]}>Account</Text>
      <Text style={[styles.presence, styles.outTypo]}>Presence</Text>
      <Text style={[styles.task, styles.outTypo]}>Task</Text>
      <Text style={[styles.out, styles.outTypo]}> Out</Text>
      <Image
        style={styles.iconLogout}
        contentFit="cover"
        source={require("../assets/-icon-logout.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sidebarLayout1: {
    height: 844,
    width: 200,
  },
  sidebarLayout: {
    height: 1,
    width: 150,
    left: 50,
    position: "absolute",
  },
  outTypo: {
    textAlign: "left",
    color: Color.colorMidnightblue,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  sidebarChild: {
    top: 0,
    left: 0,
    borderTopLeftRadius: Border.br_31xl,
    borderBottomLeftRadius: Border.br_31xl,
    backgroundColor: "transparent",
    position: "absolute",
  },
  sidebarItem: {
    top: 51,
    left: 138,
    width: 62,
    height: 50,
    position: "absolute",
  },
  sidebarInner: {
    top: 185,
  },
  lineIcon: {
    top: 234,
  },
  sidebarChild1: {
    top: 283,
  },
  account: {
    top: 157,
    left: 112,
  },
  presence: {
    top: 206,
    left: 108,
  },
  task: {
    top: 255,
    left: 144,
  },
  out: {
    top: 306,
    left: 116,
  },
  iconLogout: {
    height: "3.08%",
    width: "13%",
    top: "36.04%",
    right: "6.9%",
    bottom: "60.88%",
    left: "80.1%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
});

export default Sidebar;
