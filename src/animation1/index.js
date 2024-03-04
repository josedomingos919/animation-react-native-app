import { Component } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";

export default class Animation1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      larguraAnimada: new Animated.Value(150),
      alturaAnimada: new Animated.Value(35),
      OpacidadeAnimada: new Animated.Value(1),
    };

    //[Loop]
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.larguraAnimada, {
          toValue: 200,
          duration: 400,
          useNativeDriver: false,
        }),
        Animated.timing(this.state.larguraAnimada, {
          toValue: 150,
          duration: 400,
          useNativeDriver: false,
        }),
      ])
    ).start();

    // [Parallel]
    // Animated.parallel([
    //   Animated.timing(this.state.larguraAnimada, {
    //     toValue: 300,
    //     duration: 2000,
    //     useNativeDriver: false,
    //   }),
    //   Animated.timing(this.state.alturaAnimada, {
    //     toValue: 200,
    //     duration: 2000,
    //     useNativeDriver: false,
    //   }),
    // ]).start();

    // [Sequence]
    // Animated.sequence([
    //   Animated.timing(this.state.OpacidadeAnimada, {
    //     toValue: 1,
    //     duration: 400,
    //     useNativeDriver: false,
    //   }),

    //   Animated.parallel([
    //     Animated.timing(this.state.larguraAnimada, {
    //       toValue: 300,
    //       duration: 2000,
    //       useNativeDriver: false,
    //     }),
    //     Animated.timing(this.state.alturaAnimada, {
    //       toValue: 200,
    //       duration: 2000,
    //       useNativeDriver: false,
    //     }),
    //   ]),
    // ]).start();

    // [Simple-Animation]
    // Animated.timing(this.state.alturaAnimada, {
    //   toValue: 150,
    //   duration: 2000,
    //   useNativeDriver: false,
    // }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            opacity: this.state.OpacidadeAnimada,
            width: this.state.larguraAnimada,
            height: this.state.alturaAnimada,
            backgroundColor: "#4169E1",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 22,
            }}
          >
            Carregando...
          </Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
