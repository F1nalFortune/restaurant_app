import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import firebase from 'react-native-firebase';

export default class FavoriteSplash extends Component {


  render() {
    firebase.analytics().setCurrentScreen('FavoriteSplash');
    return (
    <ScrollView style={{backgroundColor: '#c0dfc066'}}>
      <Text style={styles.title}>
        Favorite Splash
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.subtitle}>
          Here are your favorite items.
        </Text>
      </View>
    </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  infoContainer:{
    padding:15
  },
  title:{
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 24,
    paddingTop: 20,
    paddingBottom: 0
  },
  serviceInfo:{
    paddingLeft: 25,
    paddingRight: 25,
    lineHeight: 20,
    fontSize: 16
  },
  serviceTitle:{
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 18,
  },
  subtitle:{
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 20
  }
})
