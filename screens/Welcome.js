import React, { Component } from "react";
import { Image, StyleSheet, ScrollView } from "react-native";
import { Block, Button, Text, Utils } from "expo-ui-kit";

// constants
import { background } from "../constants/images"; // henter bilder

// theme
const { theme, rgba } = Utils;
const { SIZES, COLORS } = theme;

const backgrounds = [
  {
    title: "Secured, forever.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: background.welcome
  },
  {
    title: "Secured, forever.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: background.encrypted
  },
  {
    title: "Secured, forever.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: background.privacy
  }
];

export default class Welcome extends Component {
  renderImages() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
      >
        {backgrounds.map((item, index) => (
          <Block
            center
            bottom
            key={`img-${index}`}
            style={{ width: SIZES.width }}
          >
            <Image
              source={item.img}
              resizeMode="center"
              style={{
                width: SIZES.width / 1.5,
                height: "100%"
              }}
            />
          </Block>
        ))}
      </ScrollView>
    );
  }

  renderDots() {
    return (
      <Block flex={false} row center middle margin={[20, 0, 40, 0]}>
        <Block
          radius={8}
          flex={false}
          margin={[0, 10]}
          color={rgba(COLORS.gray)}
          style={{ width: 8, height: 8 }}
        />
        <Block
          radius={8}
          flex={false}
          margin={[0, 5]}
          color={rgba(COLORS.gray, 0.5)}
          style={{ width: 8, height: 8 }}
        />
        <Block
          radius={8}
          flex={false}
          margin={[0, 5]}
          color={rgba(COLORS.gray, 0.5)}
          style={{ width: 8, height: 8 }}
        />
      </Block>
    );
  }
  render() {
    const { navigation } = this.props;
    return (
      <Block safe>
        <Block center middle>
          {this.renderImages()}
        </Block>
        <Block flex={false} center bottom margin={60}>
          <Text h3 semibold>
            Secured, forever.
          </Text>
          <Text h3 center caption gray margin={[10, 0]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          {this.renderDots()}
          <Button
            primary
            onPress={() => navigation.navigate("VPN")}
            style={{
              borderRadius: 40
            }}
          >
            <Text center white caption bold margin={[6, 26]}>
              GET STARTED
            </Text>
          </Button>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({});
