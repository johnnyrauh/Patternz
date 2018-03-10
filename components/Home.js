import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';

window.navigator.userAgent = 'react-native';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    console.log('this.props: ', this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>Welcome to Patternz!</Text>
        <Button onPress={() => this.props.navigation.navigate('Checklist')} title="Lets Start" />
        <Image
          style={{
            flex: 1,
            alignSelf: 'stretch',
            width: undefined,
            height: undefined,
            margin: 5
          }}
          source={require('/Users/johnrauh/Desktop/Patternz/Patternz/images/checklist-icon.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text1: {
    fontSize: 20,
    padding: 5
  },
  text2: {
    fontSize: 20,
    padding: 5
  },
  text3: {
    fontSize: 20,
    padding: 5,
    color: 'purple',
    fontStyle: 'italic'
  },

  button: {
    padding: 20,
    color: '#FFF076'

  }
});
