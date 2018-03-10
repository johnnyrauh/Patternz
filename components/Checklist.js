import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native';


export default class Checklist extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}  >
          <Text style={styles.title}>Tasks</Text>
        </View>
        <TextInput
          style={styles.textInput}
          onSubmitEditing={() => {
            this.props.screenProps.onNewItem()
          }}
          placeholder='Add New Task'
          returnKeyType="done"
          onChangeText={this.props.screenProps.onChangeText}
          value={this.props.screenProps.item}
          />
        <ScrollView>
          {this.props.screenProps.items.map(item => (
            <View key={item} style={styles.item}>
              <Text style={styles.itemText}>{item}</Text>
              <TouchableOpacity style={styles.doneButton}
                onPress={() => {
                  this.props.screenProps.completeTask(item)
                }}
                >
                <Text>Done</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View style={{padding: 50}}>
          <Button onPress={() => this.props.navigation.navigate('Data')} title="Data" />
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
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    padding: 10
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
  doneButton: {
    padding: 10,
    backgroundColor: '#eaeaea'
  }
});
