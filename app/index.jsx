import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const index = () => {
  return (
    <View style={styles.container}>
      <Text>Hi tere still did not appear man</Text>
      <StatusBar style="auto" />
      <Link href="/Profile" style={{ color: "blue" }}>
        Go to profile
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
