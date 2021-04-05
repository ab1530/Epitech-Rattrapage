import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';
import Home from './Home';
import SearchPictures from './SearchPictures'
import Fav from './Fav'

const nav = createStackNavigator();

let access_token = ""

//webview correcte
//recup accesstoken
//afficher profil du gars en utilisant des fonctions
//essayer de coder differement
var token = {}
function MyWebView({ navigation }) {
  return (
    <WebView source={{ uri: 'https://api.imgur.com/oauth2/authorize?client_id=04f1193646ee9ad&response_type=token&state=APPLICATION_STATE' }}
      onNavigationStateChange={(nav) => {
        if (nav.url.includes("access_token")) {
          let data = {}
          var regex = /[?&#]([^=#]+)=([^&#]*)/g, match;
          while (match = regex.exec(nav.url)) {
              data[match[1]] = match[2];
          }
          access_token = data
          token = access_token
          //console.log(access_token)
          AsyncStorage.setItem("userData", JSON.stringify(data)).then(() => {
              navigation.navigate("Home")
          });
      }
      }}
      
    />
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <nav.Navigator screenOptions={{headerShown: false }}>
      <nav.Screen name="Authenticate on Imgur" component={MyWebView} />
      <nav.Screen name="Home" component={Home} />
      <nav.Screen name="Fav" component={Fav} />
      <nav.Screen name="SearchPictures" component={SearchPictures} />
      </nav.Navigator>
    </NavigationContainer>
  );
}