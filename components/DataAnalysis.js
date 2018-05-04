import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  TouchableOpacity,
  ProgressViewIOS
} from "react-native";
import ProgressCircle from "react-native-progress-circle";

export default class Data extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Data Analysis</Text>
        </View>
        <View style={{ alignItems: "center", paddingTop: 20 }}>
          <Text style={{ fontSize: 17 }}>
            Total Current Tasks: {this.props.screenProps.items.length}
          </Text>
          <Text style={{ fontSize: 17 }}>
            Total Tasks Completed:{" "}
            {this.props.screenProps.completedItems.length}
          </Text>
        </View>
        <View style={{ alignItems: "center", padding: 50 }}>
          <ProgressCircle
            style={styles.circle}
            percent={
              this.props.screenProps.completedItems.length /
              (this.props.screenProps.completedItems.length +
                this.props.screenProps.items.length) * 100
            }
            radius={100}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
          >
            <Text style={{ fontSize: 25, alignContent: "center" }}>
              {Math.round(
                this.props.screenProps.completedItems.length /
                  (this.props.screenProps.completedItems.length +
                    this.props.screenProps.items.length) * 100
              )}%
            </Text>
          </ProgressCircle>
          <Text style={{ padding: 15, fontSize: 15, paddingTop: 45 }}>
            Make a Difference Campaign
          </Text>
          <ProgressCircle
            percent={
              Math.round(this.props.screenProps.completedItems.length / 100) *
              100
            }
            radius={100}
            borderWidth={8}
            color="red"
            shadowColor="#999"
            bgColor="#fff"
          >
            <Text style={{ fontSize: 25 }}>
              {this.props.screenProps.completedItems.length / 100 * 100}%
            </Text>
          </ProgressCircle>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    padding: 10,
    paddingTop: 15,
    backgroundColor: "#6AB9ED",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20
  },
  textInput: {
    fontSize: 15,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#eaeaea",
    flexDirection: "row",
    alignItems: "center"
  },
  itemText: {
    flex: 1
  },
  circle: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#eaeaea",
    flexDirection: "row",
    alignItems: "center"
  },
  circle2: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#eaeaea",
    flexDirection: "row",
    alignItems: "stretch"
  }
});
