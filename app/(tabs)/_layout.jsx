import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";

const _layout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen name="home" />
      </Tabs>
    </>
  );
};

export default _layout;

const styles = StyleSheet.create({});
