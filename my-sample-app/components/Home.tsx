import React from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../color.config";
import { CreditCard } from "./CreditCard";
import {
  MaterialIcons,
  Entypo,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";

const ExpenseCard = ({ price }: { price: number }) => {
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <View style={[styles.COntainerTwoHeader, styles.Expensecontainer]}>
      <View style={styles.COntainerTwoHeader}>
        <View style={styles.LogoCont}>
          <Entypo name="spotify" size={40} color="black" />
        </View>
        <View style={styles.logoc1}>
          <Text style={styles.logoheadertxt}>Spotify</Text>
          <Text>JUN 10 - 12:30 PM</Text>
        </View>
      </View>
      <Text style={styles.logoheadertxt}>
        {"- "}
        {USDollar.format(price)
          .replace(/^(\D+)/, "$1 ")
          .replace(/\s+/, " ")}
      </Text>
    </View>
  );
};

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.titleText}>Overview</Text>
          <Pressable style={styles.btn}>
            <Text style={styles.btntxt}>+</Text>
          </Pressable>
        </View>
        <ScrollView horizontal={true}>
          <CreditCard />
          <CreditCard />
        </ScrollView>
        <View style={styles.Containertwo}>
          <View style={styles.COntainerTwoHeader}>
            <View style={styles.headerc}>
              <Text style={styles.ctheadertxt}>Expenses</Text>
              <View style={styles.ic1}>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={30}
                  color="black"
                />
              </View>
            </View>
            <View style={styles.headerc}>
              <Text style={styles.ctheadertxt}>All</Text>
              <View style={styles.ic2}>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="black"
                />
              </View>
            </View>
          </View>
          <View>
            <ExpenseCard price={123} />
            <ExpenseCard price={123} />
            <ExpenseCard price={123} />
            <ExpenseCard price={123} />
            <ExpenseCard price={123} />
            <ExpenseCard price={123} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.absbtns}>
        <Pressable style={styles.btnpay}>
          <MaterialCommunityIcons name="line-scan" size={18} color="black" />
          <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 10 }}>
            Pay
          </Text>
        </Pressable>
        <Pressable style={styles.btntrans}>
          <Octicons name="arrow-switch" size={18} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Transfer
          </Text>
        </Pressable>
      </View>
      <View style={styles.noview} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  titleText: {
    fontSize: 22,
    // fontWeight: "bold",
  },
  btn: {
    backgroundColor: colors.textSecondary,
    color: colors.textPrimary,
    width: 40,
    height: 40,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
  },
  btntxt: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 30,
    textAlign: "center",
    color: colors.textPrimary,
  },
  Containertwo: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  COntainerTwoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  ctheadertxt: {
    fontSize: 22,
  },
  headerc: {
    flexDirection: "row",
  },
  ic1: {
    paddingTop: 2,
  },
  ic2: {
    marginLeft: -5,
  },
  LogoCont: {
    width: 60,
    height: 60,
    borderRadius: 25,
    padding: 10,
    backgroundColor: colors.secondary,
  },
  Expensecontainer: {
    marginHorizontal: 5,
    marginVertical: 5,
    height: 60,
  },
  logoheadertxt: {
    fontSize: 16,
    fontWeight: "bold",
  },
  logoc1: {
    marginLeft: 10,
  },
  absbtns: {
    marginVertical: 0,
    marginHorizontal: 20,
    flexDirection: "row",
  },
  noview: {
    height: 70,
  },
  btnpay: {
    backgroundColor: colors.textSecondary,
    color: colors.textPrimary,
    width: "45%",
    flexDirection: "row",
    height: 60,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  btntrans: {
    backgroundColor: "black",
    color: "white",
    width: "45%",
    flexDirection: "row",
    height: 60,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});
