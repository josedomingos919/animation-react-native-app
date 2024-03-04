import { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";

export default class Animation2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      larguraAnimada: new Animated.Value(150),
      alturaAnimada: new Animated.Value(35),
      OpacidadeAnimada: new Animated.Value(0),
    };

    this.loadChart = this.loadChart.bind(this);
  }

  loadChart() {
    Animated.sequence([
      Animated.timing(this.state.OpacidadeAnimada, {
        toValue: 1,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.alturaAnimada, {
        toValue: 300,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: 80,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#4169E1",
          }}
        >
          <TouchableOpacity onPress={this.loadChart}>
            <Text
              style={{
                fontSize: 25,
                color: "#ffff",
              }}
            >
              Gerar Gráfico
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Text>Vendas</Text>
          <Animated.View
            style={{
              opacity: this.state.OpacidadeAnimada,
              width: this.state.larguraAnimada,
              height: this.state.alturaAnimada,
              backgroundColor: "#FF0000",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontSize: 22,
              }}
            >
              R$ 150,00
            </Text>
          </Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
