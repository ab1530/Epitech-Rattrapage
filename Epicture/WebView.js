import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
class MyWebView extends Component {
  render() {
    return <WebView source={{ uri: 'https://api.imgur.com/oauth2/authorize?client_id=311ca85a0892561&response_type=token&state=APPLICATION_STATE' }} />;
  }
}

export default MyWebView;