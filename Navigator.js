import React from 'react';
import Home from './components/Home'
import DataAnalysis from './components/DataAnalysis'
import Checklist from './components/Checklist'
import { StackNavigator } from 'react-navigation'

const Navi = StackNavigator({
  Main: {
    screen: Home
  },
  Checklist: {
    screen: Checklist
  },
  Data: {
    screen: DataAnalysis
  }
})

const Navigator = ({ navigation, save, onChangeText, onNewItem, onPress, completedItems, items, item}) => (
  <Navi
    navigation={navigation}
    screenProps={{
      save,
      onChangeText,
      onNewItem,
      onPress,
      completedItems,
      items,
      item
    }} />
)

export default Navigator;
