import React from 'react';
import {StyleSheet, Text, View, ListView, TextInput, TouchableOpacity, ProgressViewIOS} from 'react-native';
import ProgressCircle from 'react-native-progress-circle'

export default class Data extends React.Component {

  render() {

    return (
      <View>
        <View style={styles.titleContainer} >
          <Text style={styles.title}>Data Analysis</Text>
        </View>
        <View style={{alignItems: 'center', paddingTop: 20}}>
          <Text style={{ fontSize: 17}}>Total Tasks: </Text>
          <Text style={{ fontSize: 17}}>Total Tasks Remaining: </Text>
          <Text style={{ fontSize: 17}}>Total Tasks Completed: </Text>
        </View>
          <View style={{alignItems: 'center', padding: 25}}>

        <ProgressCircle
          percent={100}
          radius={100}
          borderWidth={8}
          color="#3399FF"
          shadowColor="#999"
          bgColor="#fff"
          >
          <Text style={{ fontSize: 25}}>{'30%'}</Text>
        </ProgressCircle>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    padding: 10,
    paddingTop: 15,
    backgroundColor: '#6AB9ED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20
  },
  textInput: {
    fontSize: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#eaeaea',
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemText: {
    flex: 1,
  },
});
