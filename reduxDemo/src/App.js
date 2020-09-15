import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import loginForm from "./components/loginForm";
import firebase from "firebase";
import LoginForm from "./components/loginForm";

export default class App extends Component {
  componentDidMount() {
      const config = {
            apiKey: "AIzaSyC1dLi3jsbhemlrWy4zR8lMnmPcAw9Qkqg",
            authDomain: "twitterklon-9c305.firebaseapp.com",
            databaseURL: "https://twitterklon-9c305.firebaseio.com",
            projectId: "twitterklon-9c305",
            storageBucket: "twitterklon-9c305.appspot.com",
            messagingSenderId: "548290666383",
            appId: "1:548290666383:web:092ae7d71c7339ccb775fa",
            measurementId: "G-06C8D0J3PN"
      };
      // Initialize Firebase
      firebase.initializeApp(config);
      firebase.analytics();

  }

    render() {
    return (
        <Provider store={createStore(reducers)}>
            <View style={{flex:1, backgroundColor:'#ddd', alignItems:'center', justifyContent: 'center'}}>
                <LoginForm/>
            </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({});
