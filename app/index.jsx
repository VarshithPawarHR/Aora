import { Text, View } from "react-native";
import React, { useEffect } from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg font-pblack">Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{ color: "blue" }}>
        go to home
      </Link>
    </View>
  );
};

export default Index;
