import React from 'react';
import Navigator from './Navigator.js'
import {StyleSheet, Text, View, ListView, TextInput, TouchableOpacity, AsyncStorage, Button} from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      item: '',
      completedItems: []
    }
    this.onChangeText = this.onChangeText.bind(this)
    this.onNewItem = this.onNewItem.bind(this)
    this.onPress = this.onPress.bind(this)
    this.save = this.save.bind(this)
  }

      // await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
  componentDidMount() {
    AsyncStorage.getItem('items')
      .then(items => {
        if (items) {
          this.setState({
            items: JSON.parse(items)
          })
        }
      })
      .then( () => {
        return AsyncStorage.getItem('completedItems')
      })
      .then(completedItems => {
        if (completedItems) {
          this.setState({
            completedItems: JSON.parse(completedItems)
        })
        }
      })
      .catch(console.error)
  }

  onChangeText = text => {
    console.log('text: ', text)
    this.setState({
      item: text
    })
  }

  onNewItem = () => {
    console.log('item: ', this.state.item)
    const arr = [this.state.item, ...this.state.items];
    this.setState({
      items: arr,

    })

    this.save(arr);
  }

  save = (arr, complete=this.state.completedItems) => {
    this.setState({
      item: ''
    })
    AsyncStorage.setItem('items', JSON.stringify(arr))
    AsyncStorage.setItem('completedItems', JSON.stringify(complete))
  }

// complete tast name
  onPress = (task) => {
    const itemsMinusOne = this.state.items.filter(item => {
      return item !== task
    })
    this.setState({
      items: itemsMinusOne,
      completedItems: [...this.state.completedItems, task]
    })

    this.save(this.state.items, this.state.completedItems);
  }

  render () {
    return (
      <Navigator
        save={this.save}
        onChangeText={this.onChangeText}
        onNewItem={this.onNewItem}
        onPress={this.onPress}
        completedItems={this.state.completedItems}
        items={this.state.items}
        item={this.state.item}
        />
    )
  }
}
