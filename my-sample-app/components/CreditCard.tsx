import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../color.config";
const { width, height } = Dimensions.get("window");

const NumberView = ({ number }: { number: string }) => {
  const numarray = [];
  for (let i = 0; i < number.length; i += 4) {
    const chunk = number.slice(i, i + 4);
    numarray.push(chunk);
  }
  return (
    <View style={styles.numberView}>
      {numarray.map((num, index) => {
        return (
          <Text key={index} style={styles.numbertxt}>
            {num}
          </Text>
        );
      })}
    </View>
  );
};

const Showprice = ({ price }: { price: number }) => {
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <View style={styles.priceView}>
      <Text style={styles.pricetxt}>
        {USDollar.format(price)
          .replace(/^(\D+)/, "$1 ")
          .replace(/\s+/, " ")}
      </Text>
    </View>
  );
};

export const CreditCard = () => {
  return (
    <LinearGradient
      colors={["rgba(254, 223, 152, 1)", "rgba(239, 118, 187, 1)"]}
      style={styles.container}
      start={{ x: 1, y: 0.5 }}
    >
      <View style={styles.subContainer}>
        <MaterialCommunityIcons
          name="integrated-circuit-chip"
          size={50}
          color="white"
        />
        <Image
          source={{
            uri: "https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/ffffff/external-mastercard-incorporated-an-american-multinational-financial-services-corporation-logo-bold-tal-revivo.png",
          }}
          style={styles.mastercardlogo}
        />
      </View>
      <NumberView number="1234567890123456" />
      <Showprice price={1234} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.85,
    height: 205,
    background: "rgb(239,118,187)",
    borderRadius: 25,
    marginLeft: 20,
    padding: 20,
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10,
  },
  mastercardlogo: {
    width: 60,
    height: 60,
    marginTop: -5,
  },
  numberView: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 5,
  },
  numbertxt: {
    color: colors.textSecondary,
    fontSize: 23,
    fontWeight: "bold",
  },
  priceView: {
    flexDirection: "row",
    padding: 10,
  },
  pricetxt: {
    color: colors.textSecondary,
    fontSize: 30,
  },
  pricetxt1: {
    paddingRight: 10,
  },
});
