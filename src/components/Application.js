import React, {Fragment, Component} from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  ScrollView,
  TouchableOpacity,
  Linking,
  Dimensions,
  Alert,
  SafeAreaView,
  NativeModules
} from 'react-native';
// import Image from 'react-native-scalable-image';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {  createAppContainer, createSwitchNavigator } from 'react-navigation';
import firebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/FontAwesome5';
// Icon.loadFont();
// import BottomTabBar from 'react-navigation-selective-tab-bar';

import MoreSplash from './MoreSplash'
import Messages from './Messages'
import FindFriends from './FindFriends'
import Settings from './Settings'
import FavoriteSplash from './FavoriteSplash'
import Profile from './Profile'
import Friend from './Friend'
import Search from './Search'
import BuddyList from './BuddyList'


import Loading from '../pages/Loading'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import ForgotPassword from '../pages/ForgotPassword'
import IntroSlider from '../pages/IntroSlider'

function returnIconName(routeName){
  let iconName;
  if (routeName === 'Search') {
    iconName = 'search';
  } else if (routeName === 'BuddyList'){
    iconName = 'address-book';
  } else if (routeName === 'Profile') {
    iconName = 'user-circle'
  } else if (routeName ==='Favorites'){
    iconName = 'bookmark';
  } else if(routeName ==='More'){
    iconName= 'bars';
  }
  return iconName;
}

function navigationOptions(title){
  var result = {
    title: title,
    headerStyle: {
      backgroundColor: "#000000cc",
      opacity: .8,
      borderBottomColor: 'green',
      borderBottomWidth: 1
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: "#fff",
      textShadowColor: "#ff9980",
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
      shadowOpacity: .58,
      textAlign: 'center',
      textTransform: 'uppercase',
      fontSize: 24,
      padding: 10
    }
  }
  return result
}

export default class Application extends Component {
  constructor(){
    super();
    this.state = {
      cal_auth: ''
    }
  }
  // This code let you hide the bottom app bar while "Details" is rendered
  // CalendarStack.navigationOptions = ({ navigation }) => {
  //   let tabBarVisible;
  //   if (navigation.state.routes.length > 1) {
  //     navigation.state.routes.map(route => {
  //       if (route.routeName === "Details") {
  //         tabBarVisible = false;
  //       } else {
  //         tabBarVisible = true;
  //       }
  //     });
  //   }
  //   return {
  //     tabBarVisible
  //   };
  // };
  // MoreStack.navigationOptions = ({ navigation }) => {
  //   let tabBarVisible;
  //   if (navigation.state.routes.length > 1) {
  //     navigation.state.routes.map(route => {
  //       if (route.routeName != "Settings") {
  //         tabBarVisible = false;
  //       } else {
  //         tabBarVisible = true;
  //       }
  //     });
  //   }
  //   return {
  //     tabBarVisible
  //   };
  // };


  render() {
    console.disableYellowBox = true;
    const MoreStack = createStackNavigator({
      MoreSplash: {
        screen: MoreSplash,
        navigationOptions: navigationOptions("Splash")
      },
      Messages: {
        screen : Messages,
        navigationOptions: navigationOptions("Messages")
      },
      FindFriends: {
        screen: FindFriends,
        navigationOptions: navigationOptions("Find Friends")
      },
      Settings: {
        screen: Settings,
        navigationOptions: navigationOptions("Settings")
      }
    },{headerLayoutPreset: 'center'})

    const FavoritesStack = createStackNavigator({
      FavoriteSplash: {
        screen: FavoriteSplash,
        navigationOptions: navigationOptions("Favorites")
      }
    },{headerLayoutPreset: 'center'});
    const ProfileStack = createStackNavigator({
      Profile: {
        screen: Profile,
        navigationOptions: navigationOptions("Profile")
      }
    },{headerLayoutPreset: 'center'});
    const BuddyListStack = createStackNavigator({
      BuddyList: {
        screen: BuddyList,
        navigationOptions: navigationOptions("Buddy List")
      },
      Friend: {
        screen: Friend
      }
    },{headerLayoutPreset: 'center'});

    const SearchStack = createStackNavigator({
      Search: {
        screen: Search,
        navigationOptions: navigationOptions("Search")
      }
    },{headerLayoutPreset: 'center'});

    const MainTabs = createBottomTabNavigator({
        Search: { screen: SearchStack },
        BuddyList: { screen: BuddyListStack },
        Profile: {screen:ProfileStack},
        Favorites: { screen: FavoritesStack},
        More: { screen: MoreStack}
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Search') {
            iconName = 'search';
          } else if (routeName === 'BuddyList'){
            iconName = 'address-book';
          } else if (routeName === 'Profile') {
            iconName = 'user-circle'
          } else if (routeName ==='Favorites'){
            iconName = 'bookmark';
          } else if(routeName ==='More'){
            iconName= 'bars';
          }
          return <Icon name={iconName} size={25} style={{ color: tintColor }}/>;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'black',
        inactiveBackgroundColor: 'white',
        activeBackgroundColor: 'white',
        style:{
          height: 65,
          zIndex: 1000
        }
      }
    });

    const Application = createAppContainer(createSwitchNavigator({
      Loading: {
        screen: Loading
      },
      Welcome: {
        screen: IntroSlider
      },
      SignUp: {
        screen: SignUp
      },
      Login: {
        screen: Login
      },
      Forgot: {
        screen: ForgotPassword
      },
      App: {
        screen: MainTabs
      }
    },
    {
      initialRouteName: 'Loading'
    }
  ));
    return <Application />;
  }
}



const styles = StyleSheet.create ({
  act:{
    width: '50%'
  },
  bold:{
    fontWeight: 'bold'
  },
  button:{
    borderColor: 'green',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 10,
    textTransform: 'uppercase',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  center:{
    textAlign: 'center'
  },
  date:{
    fontSize: 24,
    textTransform: 'uppercase'
  },
  dateWrapper:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5
  },
  glow:{
    color: "#ffd6cc",
    textShadowColor: "#ff9980",
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    padding: 10
  },
  infoLink:{
    textAlign: 'center',
    paddingTop: 10
  },
  info:{
    width: '50%'
  },
  icon:{

  },
  imgWrapper:{
    width: '100%'
  },
  image: {
      flex: 1,
      alignSelf: 'stretch'
  },
  link:{
    color: 'blue',
    zIndex: 100
  },
  starDetail:{
    textAlign: 'center',
    paddingTop: 10,
    position: 'relative'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    width: '100%',
    color: "#fff",
    textShadowColor: "#66ff66",
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    textAlign: 'center',
    fontFamily: "Merriweather-Bold",
    textTransform: 'uppercase',
    padding:10
  },
  titleWrapper:{
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    // width: 100,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
})
