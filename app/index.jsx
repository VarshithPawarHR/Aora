import {
  Image,
  SafeAreaView,
  SafeAreaViewBase,
  ScrollView,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { Redirect, router, Router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

const Index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[450px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover endless possibilities with{" "}
              <Text className="text-secondary-100">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute-bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text
            className="text-white text-lg mt-5 text-center
          font-psemibold"
          >
            Where creativity meets inovation
          </Text>
          <CustomButton
            title="continue with Email"
            handlePress={() => router.push("/signin")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Index;

//statusbar is basically used to show time -battery percentage in mobile phones soo use it wisely
