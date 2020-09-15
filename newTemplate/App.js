import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      input1: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> Simple Calculator </Text>
        </View>
        <View style={styles.contentWrapper}>
           <TextInput style={styles.input}
              placeholder='İlk Sayı'
              onChangeText ={() => {

              }}
              value={this.state.input1}
           />
           <Text style={styles.sampleText}>İlk Sayı: {this.state.input1}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column'
  },
  contentWrapper:{

  },
  input:{
    height:40
  },
  sampleText:{
    height:30,
    fontSize:14
  },
  header:{
    height:80,
    paddingTop:30,
    shadowColor:'#000000',
    shadowOffset:{width:0, height: 2},
    shadowOpacity: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#F5FCFF'
  },
  headerText:{
    fontSize:20,
    textAlign:'center'
  }
});
