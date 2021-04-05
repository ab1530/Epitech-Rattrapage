import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from "firebase";
import { Component } from 'react';

firebase.initializeApp({
    apiKey: "AIzaSyCYrZMaz2bZIqXzQa1M6CA7cGYLDZ_XhtI",
    authDomain: "dashboard-264d0.firebaseapp.com",
    projectId: "dashboard-264d0",
    storageBucket: "dashboard-264d0.appspot.com",
    messagingSenderId: "783988357763",
    appId: "1:783988357763:web:d9f8e7e107f426c48539b6",
    measurementId: "G-H84G6GRZLQ"
  })

class AuthGoogle extends Component {
    state = { isSignedIn: false }
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
            console.log("user", user)
        })
    }
    render() {
        return (
            <div className="App">
                <StyledFirebaseAuth
                    uiConfig={this.uiConfig}
                    firebaseAuth={firebase.auth()}
                />
            </div>
        )
    }
}

export default AuthGoogle;