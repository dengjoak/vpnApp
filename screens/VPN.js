import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import { Block, Button, Text, Utils } from "expo-ui-kit";

// constants
import { background } from "../constants/images"; // henter bilder

// theme
const { theme, rgba } = Utils;
const { SIZES, COLORS } = theme;

export default class VPN extends Component {
  render() {
    return (
      <View>
        <Text> VPN </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
